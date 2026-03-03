'use client'

import { fetchsingleProduct } from "@/Actions/productAction"
import { Button } from "@/components/ui/button"
import { Product } from "@/db/schema"
import { useParams } from "next/navigation"
import { useEffect, useState } from "react"


const page = () => {

    const [singleProduct, setsingleProduct] = useState<Product | null>(null)

   const {id} =  useParams()

    useEffect(() => {
    //  setsingleProduct(product)
     getsingleProduct()
    }, [])
    


    const product = {

        name:"yash",
        id:1,
        price:19,
        description:"hkvuoibtuiktr",
        email:"techtsx",
        image:"https://imgs.search.brave.com/87i6ERCCThEQ5Re4tLUpzBVnZXxMWbcQ_ojnWYbT4Vc/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9mZG4u/Z3NtYXJlbmEuY29t/L2ltZ3Jvb3QvbmV3/cy8yNi8wMi93ZWVr/bHktcG9sbC1zYW1z/dW5nLWdhbGF4eS1z/MjYtc2VyaWVzLy0z/NDR4MjE1L2dzbWFy/ZW5hXzAwMC5qcGc"


    } as Product

    const getsingleProduct = async () => {

      const data =  await fetchsingleProduct(Number(id))
      console.log(data);
      setsingleProduct(data)
      

    }



  return (
    <div className="flex min-w-screen">

      <div>

    <img src={singleProduct?.image}></img>
      </div>


      <div>
    
    <p>{singleProduct?.name}</p>
    <p>${singleProduct?.price}</p>
    <p>{singleProduct?.description}</p>
    <Button variant="outline" className="bg-black text-white">Add to cart</Button>

      </div>



    </div>
  )
}

export default page
