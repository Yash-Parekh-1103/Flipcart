'use server'


import { ProductTable } from "@/db/schema"
import { db } from ".."
import { eq } from "drizzle-orm"

//fetch all product from backend
export const fetchallProduct = async () => {

   const product =  await db.select().from(ProductTable)

//    console.log(product);

return product;

}

//get single product from backend

export const fetchsingleProduct = async (id:number) => {

    const product = await db.select().from(ProductTable).where(eq(ProductTable.id,id))

    console.log(product);

    return product[0]
    
}
