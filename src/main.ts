import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";

async function start() {
  try {
    const PORT = process.env.PORT ?? 3003;

    const app = await NestFactory.create(AppModule);

    app.enableCors({
      methods: ["GET", "POST", "PATCH", "DELETE"],
      credentials: true,
    });

    app.setGlobalPrefix("api");

    await app.listen(PORT, () => {
      console.log(`Server is running at http://localhost:${PORT}/api`);
    });
  } catch (error) {
    console.log(error.message);
  }
}

start();
