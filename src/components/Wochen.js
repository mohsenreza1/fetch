import React from 'react'
import { useState,useEffect } from 'react'


export default function Wochen() {
    const [zufällig, setzufällig] = useState({});

    useEffect(() =>{
        fetch("http://www.boredapi.com/api/activity")
        .then((response) =>{
            if(response.status === 200){
                return response.json()
            }
        })
        .then(json => setzufällig(json))
    },[]);
    console.log(zufällig)
  return (
    <>
        <h1>Zufällig</h1>
         <p>{zufällig.activity}</p>
         <p>{zufällig.type}</p>
      
    </>
  )
}
