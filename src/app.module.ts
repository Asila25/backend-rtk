import { Module } from "@nestjs/common";

import { MongooseModule } from "@nestjs/mongoose";
import { UserModule } from './user/user.module';
import { ProductModule } from './product/product.module';
import { BookModule } from './book/book.module';

@Module({
  imports: [
    MongooseModule.forRoot(
      "mongodb+srv://admin:admin123@bio.xy33u.mongodb.net/itinfo?retryWrites=true&w=majority&appName=bio"
    ),
    UserModule,
    ProductModule,
    BookModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
