import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { HydratedDocument } from "mongoose";

export type BookDocument = HydratedDocument<Book>;

@Schema({ timestamps: true })
export class Book {
  @Prop({ required: true })
  name: string;
  @Prop()
  ganre: string;
  @Prop()
  language?: string;
  @Prop()
  author: string;
}

export const BookSchema = SchemaFactory.createForClass(Book);