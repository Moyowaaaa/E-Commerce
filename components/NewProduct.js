
import axios from 'axios';
import react, { useState,useEffect } from 'react'
import Router from 'next/router'
import Link from 'next/link'
import Head from 'next/head'
import Image from 'next/image'



const NewProduct = () => {
    const [newProducts, setNewProducts] = useState()
    const random = Math.floor(Math.random() * 10);
    const[items, setItems] = useState()

    // useEffect(() =>{
    //     const newArrivals = () => {
    //       try {
    //         fetch(`https://fakestoreapi.com/products/${random}`)
    //         .then(res=>res.json())
    //         .then(json=> {setItems(json)
    //             console.log(items)
    //         })
    //       } catch (error) {
    //         console.log(error)
    //       }
    
      
    //     }
    //     newArrivals()
    //   })

  return (
    <div>


<div className='h-[40rem]  flex flex-row'>
          <div className=' w-6/12 bg-[blue] flex flex-col items-center justify-center'>
            <div className='text-center'> 
              <h1 className='text-4xl text-white my-2'>NEW ARRIVALS</h1>


              <a href='/store'>
              <p className='text-base text-white'>Shop Now</p></a>
              
            </div>
            </div>


            {/* {items && items.map(item => (<h2>{item.title}</h2>))} */}


       
            

            

            {/* {items && items.map(item => (
                <div className='bg-[none] border-[blue] border-2 w-6/12 flex col items-center justify-center '>
                <div>
                <img src={item.image} height={100} width={350} />
                </div>
                </div>
            ))}
             */}
          



          </div>
    </div>
  )
}

export default NewProduct