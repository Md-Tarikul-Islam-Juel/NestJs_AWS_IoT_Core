
import { NestFactory } from "@nestjs/core";
import { rateLimit } from "express-rate-limit";
import { AppModule } from "./app.module";
import { SwaggerModule, DocumentBuilder } from "@nestjs/swagger";

const limiter = rateLimit({
  //from per ip we allow max 5/min
  windowMs: 1000 * 60, // 1 minutes
  max: 50, // Maximum 5 requests per IP in 15 minutes
  message: "Too many requests, please try again later."
});

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
    .setTitle("AWS IoT Core Backend")
    .setDescription("")
    .setVersion("1.0")
    .addTag("")
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup("api", app, document);

  await app.listen(3000);
}

bootstrap();
