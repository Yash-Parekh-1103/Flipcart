'use server'
import { ProductTable } from "@/db/schema"
import { db } from ".."

export const fetchallProduct = async () => {

   const product =  await db.select().from(ProductTable)

//    console.log(product);

return product;


   
    
}
