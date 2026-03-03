'use client'

import { insertpayment } from "@/Actions/paymentAction"
import { fetchsingleProduct } from "@/Actions/productAction"
import { NewPayment, Product } from "@/db/schema"
import { useCurrentUser } from "@/hooks/userHooks"
import { useParams, useRouter } from "next/navigation"
import { useEffect, useState } from "react"
import { useForm } from "react-hook-form"

const page = () => {
    const { email } = useCurrentUser()
    const { id } = useParams()
    const router = useRouter()
    const { register, handleSubmit, formState: { errors } } = useForm<NewPayment>()
    const [singleProduct, setsingleProduct] = useState<Product | null>(null)

    // Handle payment form submission
    const createPayment = async (data: NewPayment) => {
        if (!email) return
        const newData = { ...data, email, "prod_id": Number(id) } as NewPayment
        await insertpayment(newData)
        router.push(`/product/${id}`)
    }

    // Fetch product data on component mount
    useEffect(() => {
        getProduct()
    }, [])

    // Get single product details
    const getProduct = async () => {
        const singleproduct = await fetchsingleProduct(Number(id))
        setsingleProduct(singleproduct)
    }

    return (
        <div>
            {singleProduct && (
                <div>
                    <img src={singleProduct.image}></img>
                    <p>{singleProduct.name}</p>
                    <p>${singleProduct.price}</p>
                </div>
            )}
            <form onSubmit={handleSubmit(createPayment)}>
                <input type="number" {...register("c_number", { required: true })} placeholder="Card Number" className="border border-gray-300 rounded px-3 py-2" />
                {errors.c_number && <span>This field is required</span>}
                <input {...register("c_name", { required: true })} placeholder="Cardholder Name" className="border border-gray-300 rounded px-3 py-2" />
                {errors.c_name && <span>This field is required</span>}
                <input type="number" {...register("cvv", { required: true })} placeholder="CVV" className="border border-gray-300 rounded px-3 py-2" />
                {errors.cvv && <span>This field is required</span>}
                <input type="submit" />
            </form>
        </div>
    )
}

export default page
