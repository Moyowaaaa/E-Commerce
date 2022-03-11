import React from 'react'
import { Head } from 'next/document'
import Footer from '../components/Footer'
import Header from '../components/Header'
import { PlusIcon, ChevronDoubleLeftIcon } from "@heroicons/react/solid";
import Link from 'next/Link';


const Products = () => {
  return (
    <div className='h-full '>
        <div className='flex flex-col'>
            <h1 className='text-3xl text-center'>All Products</h1>
            </div>


            <div className='mt-6 flex flex-row  flex-wrap h-[400px] justify-around'>
                <div className='w-3/12 h-full border-[blue] border-2'></div>


                <div className='w-3/12 h-full border-[blue] border-2'></div>


                <div className='w-3/12 h-full border-[blue] border-2'></div>


                

                </div>

            
    </div>
  )
}

export default Products