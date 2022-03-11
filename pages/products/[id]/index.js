import React,{useState, useEffect} from 'react'
import {useRouter} from 'next/router'
import Link from 'next/link'
import Header from '../../../components/Header'
import { PlusIcon,ChevronDoubleLeftIcon } from "@heroicons/react/solid";


const product = () => {
    const [itemDetails,setItemDetails] = useState()




    useEffect(() => {
        const getServerSideProps = async(context) => {
            try {
            const res = await fetch(`https://fakestoreapi.com/products/${context.params.id}`)
            .then(res=>res.json())
            .then(json=> {setItemDetails(json)
                console.log(res)
            })
            } catch (error) {
                console.log(error)
            }
            
        
      
    }
    getServerSideProps()
    })

 

 
  return (
    <div>

        <Header />
        <Link href="/store">
            <div className='flex flex-row cursor-pointer ml-6'>
        <ChevronDoubleLeftIcon width={30}/><span className='my-2'>Back</span>
        </div>
            </Link>


         



    </div>
  )
}


// 
export default product