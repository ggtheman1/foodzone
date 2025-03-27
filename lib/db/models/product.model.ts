import { IProductInput } from "@/types";
import { Document, model, Model, models, Schema } from "mongoose";

export interface IProduct extends Document, IProductInput{
    _id: string
    createdAt: Date
    updatedAt: Date
}
const productSchema= new Schema<IProduct>(
 {
    name:{
        type: String,
        required: true,
    },
    slug:{
        type:String,
        required: true,
        unique:true
    },
    category:{
        type:String,
        required: true,
    },
    images:{
        type:String,
        required: true,
    },
    description:{
        type:String,
        required: true,
    },
    price:{
        type:Number,
        required: true,
    },
    countOrdered:{
        type:Number,
        required: true,
    },
    sizes:{
        type:[String], default: ["Small","Medium","Large"]
    },
    avgRating:{
        type:Number,
        required: true,
        default: 0,
    },
    ratingDistribution:[
        {
            rating:{
                type:Number,
                required: true,
            },
            count: {
                type:Number,
                required: true,
            },
        },
    ],
    numSales:{
        type:Number,
        required:true,
        default:1,
    },
    isPublished:{
        type:Boolean,
        required:true,
        default:false,
    },
   
 },
  {
        timestamps: true,
    }
)
    
const Product=
  (models.Product as Model <IProduct>) ||
   model<IProduct> ('Product',productSchema)

   export default  Product;