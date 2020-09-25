import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Product extends Document {
  @Prop({ required: true })
  name: string;

  @Prop({ required: true })
  cost_per_unit: number;

  @Prop({ required: true })
  selling_price_per_unit: number;
  
  @Prop({ required: true })
  units_available: number;
}

export const ProductSchema = SchemaFactory.createForClass(Product);
