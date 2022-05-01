import React,{useState, useEffect} from 'react'
import {useRouter} from 'next/router'
import Link from 'next/link'
import Header from '../../../components/Header'
import { PlusIcon,ChevronDoubleLeftIcon,ShoppingCartIcon } from "@heroicons/react/solid";
import Subscribe from '../../../components/Subscribe';
import Footer from '../../../components/Footer';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../../redux/cart.slice';
import { useSelector } from 'react-redux';


const Product = ({item}) => {
    const [itemDetails,setItemDetails] = useState()
    const [close, setClose] = useState(false);
    const [productInfo, setProductInfo] = useState(false)
    const [returnPolicy, setReturnPolicy] = useState()

    const dispatch = useDispatch();

    const cart = useSelector((state) => state.cart);


    const getItemsCount = () => {
      return cart.reduce((accumulator, item) => accumulator + item.quantity, 0);
    };





    
 

  return (
    <div className="h-[auto]">

        {/* <Header /> */}

        <div className='flex items-center'>
        <Link href="/store">
            <div className='flex flex-row cursor-pointer ml-4 lg:ml-6'>
        <ChevronDoubleLeftIcon width={30}/><span className='my-2'>Back</span>
        </div>
            </Link>

            <Link href='/cart'>
            <div className='flex items-center lg:hidden ml-[11rem]'>
           <ShoppingCartIcon width={20} /><sup className='text-[blue] pt-2 lg:pt-0'> {getItemsCount()}</sup>
           </div>
           </Link>
            </div>



            <div className='flex w-10/12 lg:w-6/12 mx-auto cursor-pointer'>
            <Link href="/"><span className='hover:border-b border-[blue]'>Home/</span></Link>

            <Link href="/store">
                    <span className='hover:border-b border-[blue]'>Store</span></Link>/
                    <span className='font-thin hover:border-b border-[blue]'>{item.title}</span>
                    
                    
                    <Link href='/cart'><ShoppingCartIcon width={20} height={30} className='ml-auto cursor-pointer hover:border-b border-[blue] hidden lg:flex'/></Link><span className='hover:border-b-2 hover:border-[blue] text-[blue] hidden lg:flex'><sub>{getItemsCount()}</sub></span>
                    </div>

            <div className="h-5/6 w-11/12 lg:w-6/12 mx-[auto]  flex flex-col lg:flex-row">
           
                <div className="flex flex-col w-11/12 lg:w-7/12 h-full ">
                {/* <div className="cursor-pointer w-full "><p>
                    
                    
                    <Link href="/"><span className='hover:border-b border-[blue]'>Home/</span></Link>
                    
                    
                    <Link href="/store">
                    <span className='hover:border-b border-[blue]'>Store</span></Link>/
                    <span className='font-thin hover:border-b border-[blue]'>{item.title}</span>
                    </p>
                    
                    
                    </div> */}

                  


                    

                <div className="lg:h-5/6 w-10/12 mx-[auto] py-8 lg:py-[6rem] flex flex-col items-center justify-center my-12 ">
                    <img src={item.image} />
                </div>
                </div>



                <div className="flex flex-col w-12/12 lg:w-5/12 h-5/6 my-[auto] lg:pl-6 py-[6rem]">

                    <h1 className="text-3xl mb-6 font-bold">{item.title}</h1>
                    {/* <p className="text-sm my-6">Product Id</p> */}

                    <h2 className="mb-[2rem] font-bold ">${item.price}</h2>

                    <div className='mb-2'>
                        <h2>Quantity</h2>
                        <input type="number" 
                        className='w-full outline-black border-2 border-[black]'
                        min={1}
                        
                        />
                    </div>

                    <button className="bg-[blue] text-base text-[white] flex items-center h-12 justify-center mb-3"onClick={() => dispatch(addToCart(item))}>Add to Cart</button>

                    <button className="bg-[black] text-base text-[white] flex items-center h-12 justify-center">Buy Now</button>

                    <div className="pt-[1rem]">
                        <p className='my-3 font-bold cursor-pointer border-2 border-[blue]' onClick={() => {setProductInfo(!productInfo); setReturnPolicy(false)}}>Product Info</p>
                        <h3 className={`${productInfo ? 'bock':'hidden'}`} >{item.description}</h3>
                    
                    </div>



                    <div className='mt-[1rem]'>
                        <p className='mt-1 font-bold cursor-pointer border-2 border-[blue]' onClick={() => {setReturnPolicy(!returnPolicy); setProductInfo(false)}}>Return Policy</p>
                        <p className={`${returnPolicy ? 'bock':'hidden'}`} >Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi nostrum labore officia eligendi eum quidem voluptates alias nobis fugiat exercitationem ipsa omnis eius non consequuntur error, praesentium soluta sunt assumenda.</p>
                    </div>


                    
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
export default Product