'use server'

import { NewPayment, paymentTable } from "@/db/schema"
import { db } from "..";

//payment backend

export const insertpayment = async (data:NewPayment) => {

    console.log(data);

    await db.insert(paymentTable).values(data)
    
    
    
}