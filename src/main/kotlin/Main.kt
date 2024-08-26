import io.ktor.application.*
import io.ktor.features.ContentNegotiation
import io.ktor.features.CORS
import io.ktor.features.DefaultHeaders
import io.ktor.features.StatusPages
import io.ktor.http.HttpStatusCode
import io.ktor.jackson.jackson
import io.ktor.request.receive
import io.ktor.response.respond
import io.ktor.routing.*
import io.ktor.server.engine.embeddedServer
import io.ktor.server.netty.Netty
import org.litote.kmongo.coroutine.CoroutineDatabase
import org.litote.kmongo.coroutine.coroutine
import org.litote.kmongo.coroutine.findOneById
import org.litote.kmongo.coroutine.findOneByIdAndDelete
import org.litote.kmongo.reactivestreams.KMongo

data class Item(val _id: String?, val title: String)

fun main() {
    embeddedServer(Netty, port = 3000) {
        install(DefaultHeaders)
        install(ContentNegotiation) {
            jackson { }
        }
        install(CORS) {
            anyHost() // Allow CORS for all origins
        }
        install(StatusPages) {
            exception<Throwable> { cause ->
                call.respond(HttpStatusCode.InternalServerError, "Internal Server Error")
            }
        }

        val database = connectToMongoDB()
        val itemCollection = database.getCollection<Item>("Items_today")

        routing {
            static("/dist") {
                files("dist") // Serving static files
            }
            static("/public") {
                files("public") // Serving static files
            }

            route("/api/items") {
                get {
                    val items = itemCollection.find().toList()
                    call.respond(items)
                }
                post("/add") {
                    val newItem = call.receive<Map<String, String>>()["newItem"]
                    newItem?.let {
                        val item = Item(null, it)
                        itemCollection.insertOne(item)
                        call.respond(HttpStatusCode.Created, item)
                    } ?: call.respond(HttpStatusCode.BadRequest, "Invalid item")
                }
                delete("/{id}") {
                    val itemId = call.parameters["id"]
                    itemId?.let {
                        val deleteResult = itemCollection.findOneByIdAndDelete(it)
                        if (deleteResult != null) {
                            call.respond(HttpStatusCode.OK, mapOf("message" to "Item deleted successfully"))
                        } else {
                            call.respond(HttpStatusCode.NotFound, "Item not found")
                        }
                    } ?: call.respond(HttpStatusCode.BadRequest, "Invalid ID")
                }
            }
        }
    }.start(wait = true)
}

fun connectToMongoDB(): CoroutineDatabase {
    val client = KMongo.createClient(
        connectionString = "mongodb+srv://noelpena:1234@cluster0.xbaexmf.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
    ).coroutine
    return client.getDatabase("Cluster0")
}
