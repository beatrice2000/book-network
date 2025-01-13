# Folosește o imagine OpenJDK ca bază
FROM openjdk:17-jdk-slim

LABEL authors="Ioana"

# Setează directorul de lucru
WORKDIR /app

# Copiază fișierul .jar în container
COPY target/book-network-0.0.1-SNAPSHOT.jar app.jar

# Rulează aplicația
ENTRYPOINT ["java", "-jar", "app.jar"]FF