'use client'

// 📦 Import form handling and validation libraries
import { useForm } from "react-hook-form"
// 📝 Import product schema type
import { NewProduct } from "@/db/schema"
// 👤 Import hook for getting current user info
import { useCurrentUser } from "@/hooks/userHooks"
// 🚀 Import server action for creating products
import { NewProductAction } from "@/Actions/productAction"
import { useRouter } from "next/navigation"

// 🏪 Main product creation page component
const page = () => {

    // 👤 Get current user's email
    const {email} = useCurrentUser()

    const router = useRouter()

    // 📋 Initialize form with react-hook-form
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<NewProduct>()

    // 💾 Handle product creation submission
    const CreateProduct = async (data:NewProduct) => {
        // ⚠️ Return if user is not logged in
        if (!email) return
        // 📦 Add email to product data
        const newdata = {...data,email}
        // 🔄 Submit product to server
       await  NewProductAction(newdata)

       router.push("/product")

        
    }





    return (
        <div>
            {/* 📝 Product creation form */}
            <form onSubmit={handleSubmit(CreateProduct)}>

                {/* 🏷️ Product name input */}
                <input {...register("name", { required: true })} placeholder="Product name" />
                {errors.name && <span>This field is required</span>}

                {/* 🖼️ Product image URL input */}
                <input {...register("image", { required: true })} placeholder="Image URL" />
                {errors.name && <span>This field is required</span>}

                {/* 💰 Product price input */}
                <input type="number" {...register("price", { required: true })} placeholder="Price" />
                {errors.name && <span>This field is required</span>}

                {/* 📄 Product description input */}
                <input {...register("description", { required: true })} placeholder="Description" />
                {errors.name && <span>This field is required</span>}

                {/* ✅ Submit button */}
                <input type="submit" />
            </form>
        </div>
    )
}

export default page
