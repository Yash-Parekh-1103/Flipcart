'use server'


import { NewProduct,  paymentTable, ProductTable } from "@/db/schema"
import { db } from ".."
import { eq } from "drizzle-orm"

//fetch all product from backend
export const fetchallProduct = async () => {
    const product = await db.select().from(ProductTable)
    //console.log(product);
    return product;
}

//get single product from backend
export const fetchsingleProduct = async (id: number) => {
    const product = await db.select().from(ProductTable).where(eq(ProductTable.id, id))
    // console.log(product);
    return product[0]
}


// New Product to backend
export const NewProductAction = async (data: NewProduct) => {
    // console.log(data)
    const newproduct = await db.insert(ProductTable).values(data)
    // console.log(newproduct)
    return true
}

export const fetchmyOrder = async (email:string) => {

    const product = await db.select({

        pay_id:paymentTable.pay_id,
        name:ProductTable.name,
        image:ProductTable.image,
        price:ProductTable.price
    })
    .from(paymentTable)
    .innerJoin(ProductTable,eq(ProductTable.id,paymentTable.prod_id))
    .where(eq(paymentTable.email,email))

    console.log(product);

    return product;
  
}
