import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class MachineDetails extends Document {
  @Prop({ required: true })
  type: string;

  @Prop({ required: true })
  paper_id: string;

  @Prop({ required: true })
  width: number;

  @Prop({ required: true })
  height: number;

}

export const MachineDetailsSchema = SchemaFactory.createForClass(MachineDetails);
