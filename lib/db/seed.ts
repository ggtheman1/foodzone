import { cwd } from "process";
import { loadEnvConfig } from '@next/env'
import Product from "./models/product.model";
import data from '@/lib/data'
import { connectToDatabase } from ".";

 loadEnvConfig(cwd())

 const main = async () => {
    try{
      const { products } =data
      await connectToDatabase(process.env.MONGODB_URL)
      await Product.deleteMany()
      const createProducts= await Product.insertMany(products)
      console.log({
        createProducts,
        message: "seeded successfully",
      })
      process.exit(0);
    }
    catch(e){
        console.log(e)
        throw new Error('Failed to seed database')
    }
}
main();