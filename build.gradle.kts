plugins {
    kotlin("jvm") version "1.9.10"
    application
}

repositories {
    mavenCentral()
}

dependencies {
    implementation("io.ktor:ktor-server-core:2.3.0")
    implementation("io.ktor:ktor-server-netty:2.3.0")
    implementation("io.ktor:ktor-serialization-jackson:2.3.0")
    implementation("io.ktor:ktor-server-cors:2.3.0")
    implementation("org.litote.kmongo:kmongo-coroutine:4.7.2")
    implementation("org.litote.kmongo:kmongo-reactor:4.7.2") // Add this if you need reactive features
    implementation("ch.qos.logback:logback-classic:1.4.12")
}


kotlin {
    jvmToolchain {
        languageVersion.set(JavaLanguageVersion.of(17)) // Or 11, 8, depending on your JDK
    }
}

application {
    mainClass.set("MainKt")
}
