From node:18 AS build
WORKDIR /app
COPY /web /app/
RUN npm install
RUN npm run build


FROM eclipse-temurin:21-jdk-alpine
WORKDIR /app
COPY --from=build /app/dist /app/public
COPY /server/build/libs/server-0.0.1-SNAPSHOT.jar ./app.jar
ENTRYPOINT ["java", "-jar", "app.jar"]