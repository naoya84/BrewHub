FROM node:18 AS build
WORKDIR /app
COPY /web /app/
RUN npm install
RUN npm run build


FROM eclipse-temurin:21-jdk-alpine AS server
WORKDIR /app
COPY ./server /app/
RUN ./gradlew clean build -x test

FROM eclipse-temurin:21-jdk-alpine
WORKDIR /app
COPY --from=build /app/dist /app/public
COPY --from=server /app/build/libs/server-0.0.1-SNAPSHOT.jar ./app.jar
ENTRYPOINT ["java", "-jar", "app.jar"]