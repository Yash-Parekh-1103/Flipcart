'use client'
import { fetchallProduct } from "@/Actions/productAction"
import { Button } from "@/components/ui/button"
import { useEffect, useState } from "react"

const page = () => {

    const [allProduct, setallProduct] = useState<Product[]|null>(null)

    useEffect(() => {
     
        //store product in useState
        // setallProduct()
        getallProduct()

    }, [])

    const getallProduct =  async () => {

      const product =   await fetchallProduct()

    //   console.log(product);

    setallProduct(product)

    }
    
    interface Product {

       price:number,
       image:string,
       name:string

    }
    // static value for now later come from backend
    // const product = [
    //     {
    //         "img":"https://imgs.search.brave.com/87i6ERCCThEQ5Re4tLUpzBVnZXxMWbcQ_ojnWYbT4Vc/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9mZG4u/Z3NtYXJlbmEuY29t/L2ltZ3Jvb3QvbmV3/cy8yNi8wMi93ZWVr/bHktcG9sbC1zYW1z/dW5nLWdhbGF4eS1z/MjYtc2VyaWVzLy0z/NDR4MjE1L2dzbWFy/ZW5hXzAwMC5qcGc",
    //         "name":"samsung",
    //         "price":10
    //     } ,
    //     {
    //         "img":"https://imgs.search.brave.com/87i6ERCCThEQ5Re4tLUpzBVnZXxMWbcQ_ojnWYbT4Vc/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9mZG4u/Z3NtYXJlbmEuY29t/L2ltZ3Jvb3QvbmV3/cy8yNi8wMi93ZWVr/bHktcG9sbC1zYW1z/dW5nLWdhbGF4eS1z/MjYtc2VyaWVzLy0z/NDR4MjE1L2dzbWFy/ZW5hXzAwMC5qcGc",
    //         "name":"samsung 2",
    //         "price":10
    //     } ,
    //     {
    //         "img":"https://imgs.search.brave.com/87i6ERCCThEQ5Re4tLUpzBVnZXxMWbcQ_ojnWYbT4Vc/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9mZG4u/Z3NtYXJlbmEuY29t/L2ltZ3Jvb3QvbmV3/cy8yNi8wMi93ZWVr/bHktcG9sbC1zYW1z/dW5nLWdhbGF4eS1z/MjYtc2VyaWVzLy0z/NDR4MjE1L2dzbWFy/ZW5hXzAwMC5qcGc",
    //         "name":"samsung 3",
    //         "price":10
    //     } 


    // ] as Product[]


  return (
    <div className="flex">

        {allProduct && allProduct.map((p)=> 

 <div key={p.name} className="border-2 border-black bg-gray-100 w-fit p-2 my-3 mx-3 flex flex-col items-center px-5">
        <img src={p.image}></img>

    <p>{p.name}</p>
    <p className="text-2xl font-bold">${p.price}</p>
    <Button variant="outline" className="bg-black text-white w-full">Buy Now</Button>

      </div>

        )}
     
    </div>
  )
}

export default page
