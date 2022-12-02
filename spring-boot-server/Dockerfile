FROM openjdk:11
ENV PORT 8081
ADD target/spring-boot-docker.jar spring-boot-docker.jar
ENTRYPOINT ["java","-jar","/spring-boot-docker.jar"]
EXPOSE ${PORT}

