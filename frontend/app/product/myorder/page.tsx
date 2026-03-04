'use client'

import { fetchmyOrder } from "@/Actions/productAction"
import { Payment } from "@/db/schema"
import { useCurrentUser } from "@/hooks/userHooks"
import { useParams } from "next/navigation"
import { useEffect, useState } from "react"

const page = () => {

    const {email , isLoaded} = useCurrentUser()

    const [myorder, setmyorder] = useState<Myorder[] | null>(null)

    const getmyorder = async () => {

        if(!email) return

        
     const myproduct =  await fetchmyOrder(email)

     console.log(myproduct);

     setmyorder(myproduct)
     
        
    }

    useEffect(() => {

        if(!isLoaded) return 

       getmyorder()
    
    }, [email,isLoaded])

     interface Myorder {

        name:string,
        image:string,
        price:number,
        pay_id:number


    }
    



  return (
    <div>

        {myorder && myorder.map((p)=>

            <div key={p.pay_id}>

                <img src={p.image}></img>
                <p>{p.name}</p>
                <p>{p.price}</p>


                </div>


        ) }

        


      
    </div>
  )
}

export default page
