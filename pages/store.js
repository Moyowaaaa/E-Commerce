import React,{useState, useEffect} from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'
import Link from 'next/link'
// import Footer from '../components/Footer'
import { PlusIcon,ChevronDoubleLeftIcon } from "@heroicons/react/solid";
import axios from 'axios';
import Subscribe from '../components/Subscribe';
// import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import Contact from '../components/Contact';


const Store = () => {
    const[products, setProducts] = useState();
    const [ searchValue, setSearchValue] = useState('')
    const search =(e) => {
        setSearchValue(e.target.value)
    }

    useEffect(() => {
        
    //     const getProducts = () => {
    //         try {
    //             fetch('https://fakestoreapi.com/products')
    //         .then(res=>res.json())
    //         .then(json=> {setProducts(json)
    //             console.log(products)
    //         })
    //         } catch (error) {
    //             console.log(error)
    //         }
    //         return{
    //             props:{
    //                 products
    //             }
    //         }
    //     }
    //     getProducts()
    // },[])

    async function getProducts() {
        try {
            const res = await axios.get('https://fakestoreapi.com/products')
            console.log(res.data)
            setProducts(res.data)
        } catch (error) {
            console.log(error)
        }
    };
  
    getProducts()

});



  return (
    <div className='h-screen'>


        <Navbar search={search} />

        <Link href="/">
            <div className='flex flex-row cursor-pointer ml-2 lg:ml-6'>
        <ChevronDoubleLeftIcon width={30}/><span className='my-2'>Back</span>
        </div>
            </Link>
      

        <div className=' mt-12'>
{/* 
             <div className='h-[30rem] border-2 border-[royalblue] w-[25rem]  my-6'>
            {products && products.map(product => (
              <div key={product.id}>
                <img src={product.image} />
                </div>
            ))}


       
            </div> */}

           


            <div className='flex flex-row flex-wrap justify-center w-full mb-3'>
{/* 

                {products && products.map(product => (
                                                <Link href="/products/[id]" as={`/products/${product.id}`} key={product.id}>
                          <div className='w-full lg:w-3/12  h-[50vh] lg:ml-8 mt-3 hover:border-2 border-[blue] cursor-pointer' key={product.id}>

  
                              
                
                <div className='flex flex-col h-3/4  py-[auto] items-center justify-center bg-[#fff]'><img src={product.image} height={100} width={150}/></div>
                <div className='flex flex-col jusitfy-around w-11/12 mx-[auto]'>
                    {product.title}
                    <br/>
                    <p className='font-bold my-[auto]'>{product.price}$</p>
                    </div>
                    

                    
                </div>
                </Link>
                ))} */}


                {products?.filter((product) => {
                   return product.title.toLowerCase().includes(searchValue.toLowerCase()) 
                }).map(product => (
                    <Link href="/products/[id]" as={`/products/${product.id}`} key={product.id}>
                    <div className='w-full lg:w-3/12  h-[50vh] lg:ml-8 mt-3 hover:border-2 border-[blue] cursor-pointer' key={product.id}>


                        
          
          <div className='flex flex-col h-3/4  py-[auto] items-center justify-center bg-[#fff]'><img src={product.image} height={100} width={150}/></div>
          <div className='flex flex-col jusitfy-around w-11/12 mx-[auto]'>
              {product.title}
              <br/>
              <p className='font-bold my-[auto]'>{product.price}$</p>
              </div>
              

              
          </div>
          </Link>   )) 
                }


            </div>

           


            
            </div>

            
            {/* <Contact /> */}



            {/* <div className='w-full bg-[black] flex flex-row'>


                <div className='w-5/12  h-[auto]'>
                <div className=' bg-[black] text-white '>
        <h2 className='text-3xl text-center py-6'>Contact Us</h2>
        <div className='flex flex-col w-full ml-[6rem] pt-12 ' >
            <div className='flex flex-row w-full'>
                <div className='w-6/12'><label>FirstName</label>
                <br/>
                <input
                className='mb-4 py-1 pl-2 text-black w-full'
                 />
                </div>



                <div className='ml-12 w-6/12'><label>LastName</label>
                <br/>
                <input
                className='mb-4 py-1 px-2 text-black w-full' />
                </div>



                </div>


                <div className='flex flex-col w-full'>
                    <label>Enter Your Email</label>
                    <input 
                    className='mb-4 py-1 px-2 text-black'/>

                    <label>Enter your Subject</label>
                    <input 
                    className='mb-4 py-2 px-2 text-black'/>

                    <label>Enter Your Message</label>
                    <textarea className='resize-none h-[10rem] pt-2 px-2 text-black'></textarea>

                </div>



                <button className='mt-2 mb-6 bg-[none] w-16 border-2 border-white text-white'>Send</button>

                
            </div>
            </div>
                </div>



                <div className='ml-[10rem] w-5/12'>
                    <div className='bg-black h-[30rem] flex flex-col items-center mt-6'>
                    <h2 className='text-4xl text-white flex justify-center'>JOIN OUR MAILING LIST</h2>
        <h4 className='text-xl text-white mb-6'>And Never Miss An Update</h4>


        <div className='flex flex-col justify-center text-white w-8/12 text-center'>
        <label required>Enter your Email Here</label>
        <input 
        placeholder="Email"
        className='outline-white border-2 border-white mt-6 w-12/12 h-12 text-black py-[auto] pl-4 pr-4'
        />
        <button className='outline-white border-2 border-white mt-6 w-12/12 h-12'>Subscribe </button>
            </div>


                    </div>
                </div>

              
            </div> */}

            <Subscribe />
        <Footer className='absolute' />
    </div>
  )
}

export default Store