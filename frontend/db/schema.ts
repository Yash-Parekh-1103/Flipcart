import { boolean, integer, pgTable, varchar } from "drizzle-orm/pg-core";


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

