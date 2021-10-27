import {Schema, Prop, SchemaFactory} from '@nestjs/mongoose'
import {Schema as MongooseSchema, Document} from 'mongoose'
export type SalesDocument = Sales & Document;
@Schema({versionKey: false})
export class Sales{
  @Prop()
  _id: MongooseSchema.Types.ObjectId;

  @Prop()
  saleDate: Date;

  // @Prop()
  // items: any[];

  @Prop()
  storeLocation: string;

  // @Prop()
  // customer: any;

  @Prop()
  couponUsed: boolean;

  @Prop()
  purchaseMethod: string;
}

export const SalesSchema = SchemaFactory.createForClass(Sales);