import React,{useState, useEffect} from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'
import Link from 'next/link'
// import Footer from '../components/Footer'
import { PlusIcon,ChevronDoubleLeftIcon } from "@heroicons/react/solid";
import axios from 'axios';
import Subscribe from '../components/Subscribe';
// import Footer from '../components/Footer';


const Store = () => {
    const[products, setProducts] = useState()
    useEffect(() => {
        
        const getProducts = () => {
            try {
                fetch('https://fakestoreapi.com/products')
            .then(res=>res.json())
            .then(json=> {setProducts(json)
                console.log(products)
            })
            } catch (error) {
                console.log(error)
            }
            return{
                props:{
                    products
                }
            }
        }
        getProducts()
    },[])
  return (
    <div>


        <Header />

        <Link href="/">
            <div className='flex flex-row cursor-pointer ml-6'>
        <ChevronDoubleLeftIcon width={30}/><span className='my-2'>Back</span>
        </div>
            </Link>
      

        <div className=' h-[100vh]  mt-12'>
{/* 
             <div className='h-[30rem] border-2 border-[royalblue] w-[25rem]  my-6'>
            {products && products.map(product => (
              <div key={product.id}>
                <img src={product.image} />
                </div>
            ))}


       
            </div> */}


            <div className='flex flex-row flex-wrap justify-center w-full mb-3'>


                {products && products.map(product => (
                                                <Link href="/products/[id]" as={`/products/${product.id}`} key={product.id}>
                          <div className='w-3/12  h-[50vh] ml-8 mt-3 hover:border-2 border-[blue] cursor-pointer' key={product.id}>

  
                              
                
                <div className='flex flex-col h-3/4  py-[auto] items-center justify-center'><img src={product.image} height={100} width={150}/></div>
                <div className='flex flex-col jusitfy-around w-11/12 mx-[auto]'>
                    {product.title}
                    <br/>
                    <p className='font-bold my-[auto]'>{product.price}$</p>
                    </div>
                    

                    
                </div>
                </Link>
                ))}
       

            {/* <div className='w-3/12 border-[blue] border-2 h-[50vh] ml-8 '>
                
                <div className='flex flex-col h-3/4 border-2 border-black items-center'></div>'
                
                </div> */}


            {/* <div className='w-3/12 border-[blue] border-2 h-[50vh] ml-8'></div>


            </div>

            <div className='flex flex-row flex-wrap justify-center w-full mb-6'>
                
            

            <div className='w-3/12 border-[blue] border-2 h-[50vh] ml-8'></div>

            <div className='w-3/12 border-[blue] border-2 h-[50vh] ml-8'></div>


            <div className='w-3/12 border-[blue] border-2 h-[50vh] ml-8'></div> */}


            </div>

           


            
            </div>
            
            
    </div>
  )
}

export default Store