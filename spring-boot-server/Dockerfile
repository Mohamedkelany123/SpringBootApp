FROM openjdk:11
ENV PORT 8081
ENV DBPORT 3306
#ENV FEPORT 8081
ADD target/spring-boot-docker.jar spring-boot-docker.jar
ENTRYPOINT ["java","-Ddbport=${DBPORT}","-jar","/spring-boot-docker.jar"]
EXPOSE ${PORT}