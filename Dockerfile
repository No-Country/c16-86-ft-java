# Utiliza una imagen base de OpenJDK
FROM openjdk:17-jre-slim

# Copia el archivo JAR de tu aplicación al contenedor
COPY target/c16-86-ft-java-Parking-0.0.1-SNAPSHOT /app.jar

# Exponer el puerto en el que se ejecuta tu aplicación Spring Boot
EXPOSE 8080

# Comando para ejecutar la aplicación cuando se inicie el contenedor
CMD ["java", "-jar", "/app.jar"]