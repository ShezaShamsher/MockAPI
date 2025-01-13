'use client'                     
import { useEffect, useState } from "react"

interface User {
    name: string,
    price: number,
    image: string,
    id: string
}

export default function fruits (){

const [fruits, setfruits] = useState<User[]>([])

useEffect(()=>{

    const Fetchdata =async ()=> {
    try {   
        const response = await fetch('https://677ee09194bde1c1252ddd20.mockapi.io/userdata') ;
        const data = await response.json()
        setfruits(data)
}

    catch (error) {
        console.log('Data is not fetch' , error);
        
    }
}
    Fetchdata()

})

console.log(fruits);

    return (
        
        <div className="mx-10 my-20">
            <h1 className="mb-10 font-bold text-3xl ">Fruits</h1>
            <div className="grid grid-cols-3 gap-8">
            {fruits.map((fruits) => (
                <div key = {fruits.id}>
                <img className="w-72" src={fruits.image} alt={fruits.name} />
                <h1>{fruits.name}</h1>
                <p>${fruits.price}</p>
                
                </div>
            ))}
            </div>
        </div>
    )
}


