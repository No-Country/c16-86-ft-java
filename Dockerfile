# Utiliza una imagen base de OpenJDK
FROM amazoncorretto:17

# Copia el archivo JAR de tu aplicación al contenedor
COPY target/c16-86-ft-java-Parking-0.0.1-SNAPSHOT app.jar

# Exponer el puerto en el que se ejecuta tu aplicación Spring Boot
EXPOSE 8080

# Comando para ejecutar la aplicación cuando se inicie el contenedor
ENTRYPOINT ["java", "-jar", "/app.jar"]