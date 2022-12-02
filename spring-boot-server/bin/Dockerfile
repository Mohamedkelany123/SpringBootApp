FROM openjdk:11
ENV PORT 8081
ADD target/Spring-boot-docker.jar Spring-boot-docker.jar
ENTRYPOINT ["java","-jar","Spring-boot-docker.jar"]
EXPOSE ${PORT}

