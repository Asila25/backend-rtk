import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { HydratedDocument } from "mongoose";

export type ProductDocument = HydratedDocument<Product>;

@Schema({ timestamps: true })
export class Product {
  @Prop({ required: true })
  title: string;
  @Prop()
  price: number;
  @Prop()
  description: string;
  @Prop()
  category: string;
  @Prop()
  image: string;
}

export const ProductSchema = SchemaFactory.createForClass(Product);
