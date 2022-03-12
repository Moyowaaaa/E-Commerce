import React,{useState, useEffect} from 'react'
import {useRouter} from 'next/router'
import Link from 'next/link'
import Header from '../../../components/Header'
import { PlusIcon,ChevronDoubleLeftIcon } from "@heroicons/react/solid";
import Subscribe from '../../../components/Subscribe';
import Footer from '../../../components/Footer';


const product = ({item}) => {
    // const [itemDetails,setItemDetails] = useState()
    // const [close, setClose] = useState(false);
    // const [productInfo, setProductInfo] = useState(true)
    // const [returnPolicy, setReturnPolicy] = useState()



    // const showInfo = () => {
    //     setProductInfo(true)
    //     setReturnPolicy(false)
    // }

    // const showPolicy = () => {
    //     setReturnPolicy(true)
    //     setProductInfo(false)
    // }


  


    // useEffect(() => {
    //     const getServerSideProps = async(context) => {
    //         try {
    //         const res = await fetch(`https://fakestoreapi.com/products/${context.params.id}`)
    //         .then(res=>res.json())
    //         .then(res=>console.log(json))
    //         // .then(json=> {setItemDetails(json)
    //         //     console.log(res)
    //         // })
    //         } catch (error) {
    //             console.log(error)
    //         }
            
        
      
    // }
    // getServerSideProps()
    // })

 

 
  return (
    <div className="h-screen">

        {/* <Header /> */}
        <Link href="/store">
            <div className='flex flex-row cursor-pointer ml-6'>
        <ChevronDoubleLeftIcon width={30}/><span className='my-2'>Back</span>
        </div>
            </Link>

          


            <div className="h-5/6  w-6/12 mx-[auto]  flex">
           
                <div className="flex flex-col w-7/12 h-full">
                <div className=""><p>Home/<span >Store</span>/<span className='font-thin'>{item.title .slice(0,10)}</span></p></div>

                <div className="h-5/6 w-10/12 mx-[auto] flex flex-col items-center justify-center  my-[auto]">
                    <img src={item.image} />
                </div>
                </div>



                <div className="flex flex-col w-5/12 h-5/6 my-[auto] pl-6">

                    <h1 className="text-3xl mb-6 font-bold">{item.title}</h1>
                    {/* <p className="text-sm my-6">Product Id</p> */}

                    <h2 className="my-[2rem] font-bold ">${item.price}</h2>

                    <button className="bg-[blue] text-base text-[white] flex items-center h-12 justify-center">Add to Cart</button>

                    <div className="pt-[1rem]">
                        <p className='my-3 font-bold cursor-pointer border-2 border-[blue]'>Product Info</p>
                        {/* <h3 className={`${productInfo ? 'bock':'hidden'}`}>{item.description}</h3> */}
                        <h3>{item.description}</h3>
                    </div>



                    {/* <div className='mt-[1rem]'>
                        <p className='mt-1 font-bold cursor-pointer border-2 border-[blue]' onClick={showPolicy}>Return Policy</p>
                        <p className={`${returnPolicy ? 'bock':'hidden'}`}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi nostrum labore officia eligendi eum quidem voluptates alias nobis fugiat exercitationem ipsa omnis eius non consequuntur error, praesentium soluta sunt assumenda.</p>
                    </div> */}


                    
                </div>
             
            </div>
            <Subscribe />
            <Footer />

         



    </div>
  )
}
export const getServerSideProps = async(context) => {
    const res = await fetch(`https://fakestoreapi.com/products/${context.params.id}`)

    const item = await res.json() 

    return {
        props: {
            item
        }
    }
}


// 
export default product