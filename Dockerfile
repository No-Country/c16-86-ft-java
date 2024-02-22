
FROM amazoncorretto:17

COPY target/c16-86-ft-java-Parking-0.0.1-SNAPSHOT app.jar




ENTRYPOINT ["java", "-jar", "/app.jar"]