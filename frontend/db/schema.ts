import {  bigint, integer, pgTable, varchar } from "drizzle-orm/pg-core";


export const ProductTable = pgTable("Product", {
   id: integer().primaryKey().generatedAlwaysAsIdentity(),
  email: varchar().notNull(),
  image:varchar().notNull(),
  name:varchar().notNull(),
  price:integer().notNull(),
  description:varchar()

  
});

export type Product = typeof ProductTable.$inferSelect
export type NewProduct = typeof ProductTable.$inferInsert

export const paymentTable = pgTable("payment", {


    pay_id: integer().primaryKey().generatedAlwaysAsIdentity(),
    email: varchar().notNull(),
    prod_id:integer().notNull(),
    c_number: bigint("c_number", { mode: "bigint" }).notNull(),
    cvv:integer().notNull(),
    c_name:varchar().notNull()

  
})


export type Payment = typeof paymentTable.$inferSelect
export type NewPayment = typeof paymentTable.$inferInsert



