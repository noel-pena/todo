plugins {
    kotlin("jvm") version "1.9.10"
    application
}

repositories {
    mavenCentral()
}

dependencies {
    implementation("org.springframework.boot:spring-boot-starter-web")
    implementation("org.springframework.boot:spring-boot-starter-data-mongodb")
    implementation("org.springframework.boot:spring-boot-starter-actuator")
    testImplementation("org.springframework.boot:spring-boot-starter-test")
}

kotlin {
    jvmToolchain(21) // Or use 17, depending on your Java target
}

application {
    mainClass.set("com.example.todolist.ApplicationKt")
}

tasks.withType<JavaCompile> {
    options.release.set(21) // Or use 17, depending on your Java target
}
