import React from 'react'
import Image from 'next/image';
import Link from "next/link";
import { useSelector, useDispatch } from 'react-redux';
import { PlusIcon,ChevronDoubleLeftIcon } from "@heroicons/react/solid";
import Subscribe from "../components/Subscribe";
import Footer from "../components/Footer";
import Foot from "../components/Foot";
import Nav from "../components/Nav";
// Importing actions from  cart.slice.js
import {
  incrementQuantity,
  decrementQuantity,
  removeFromCart,
} from '../redux/cart.slice';




const Cart = () => {
 // Extracting cart state from redux store 
 const cart = useSelector((state) => state.cart);

 // Reference to the dispatch function from redux store
  const dispatch = useDispatch();

  const getTotalPrice = () => {
    return cart.reduce(
      (accumulator, item) => accumulator + item.quantity * item.price,
      0
    );
  };

 return (
   <div className='h-screen'>
             <div className='text-center py-4'><h2 className='text-2xl'>My Cart</h2><hr></hr></div>


             <Link href="/store">
             <div className='flex cursor-pointer  items-center'>
               <ChevronDoubleLeftIcon  width={30}/><span className='my-2 hover:underline  hover:decoration-[blue]'>Store</span>
             </div>
             </Link>

     
     <div className='w-full h-screen overflow-auto  flex flex-col  items-center'>
       
     {cart.length === 0 ? (<div className='flex flex-col items-center justify-center h-[70vh]'>
       <h1 className='mb-6 text-2xl'>You have nothing in your cart!</h1>
       <Link href="/store"><p className='cursor-pointer hover:border-b-2 border-[blue]'>Continue Shopping</p></Link>
    </div> ) : (
       <>
         {/* <div >
           <div>Image</div>
           <div>Product</div>
           <div>Price</div>
           <div>Quantity</div>
           <div>Actions</div>
           <div>Total Price</div>
         </div> */}
           {/* <div>
               <Image src={item.image} height="90" width="65" />
             </div> */}

         {/* {cart.map((item) => (
           <div key={item.id} >
           
             <p>{item.title}</p>
             <p>$ {item.price}</p>
             <p>{item.quantity}</p>
             <div >
             <button onClick={() => dispatch(incrementQuantity(item.id))}>
                  +
                </button>
                <button onClick={() => dispatch(decrementQuantity(item.id))}>
                  -
                </button>
                <button onClick={() => dispatch(removeFromCart(item.id))}>
                  x
                </button>
             </div>
             <p>$ {item.quantity * item.price}</p>
           </div>
           
           
         ))} */}

{/* {cart.map((item) => (
         <div className='flex flex-row items-center border-2 border-[blue] w-8/12 h-[10rem] my-2 gap-6' key={item.id}>

           <div className='flex flex-row ml-12 w-9/12'>
           <p>{item.title}</p>
             <p>$ {item.price}</p>
             <p>{item.quantity}</p>
           </div>

           <div className='flex flex-row w-3/12'>
             <button className='h-auto w-auto p-3 bg-[blue] text-white text-xl' onClick={() => dispatch(incrementQuantity(item.id))}>+</button>
              <button className='h-auto w-auto p-3 bg-[black] text-white text-xl mx-6' onClick={() => dispatch(decrementQuantity(item.id))}>-</button>
              <button className='h-auto w-auto p-3 bg-[red] text-white text-xl' onClick={() => dispatch(removeFromCart(item.id))}>x</button>
           </div>
         </div>

          ))}  */}

          
         {/* <h2>Grand Total: $ {getTotalPrice()}</h2> */}



         <div className='w-11/12 lg:w-6/12 mx-auto '>
   


           <div className='flex flex-col mt-6'>

             {cart.map((item)=>(
               <div key={item.id}>
                 <hr className='py-2'></hr>
                <div className='flex flex-col lg:flex-row' key={item.id}>
                  <div className='w-11/12 lg:w-2/12 mx-4 mb-4'>
                    <div className='border-2  flex flex-col justify-center items-center py-4'>
               <img src={item.image} height="90" width="65" />
               </div>
                  </div>



                  <div className='flex flex-col lg:flex-row lg:w-6/12 lg:ml-[4rem]'>
                      <p>{item.title}</p>
             <p className='font-bold'>$ {item.price}</p>

             <div className='flex flex-row lg:hidden gap-3'>
               <h3>Quantity: &nbsp; &nbsp; &nbsp;</h3>
             <p>{item.quantity}</p>
             <div className='cursor-pointer  ml-[15rem]  lg:flex w-2/12 lg:pl-[3rem]' onClick={() => dispatch(removeFromCart(item.id))}>
               x
             </div>
             </div>
           
             
             </div>


             <div className='cursor-pointer hidden lg:flex w-2/12 pl-[3rem]' onClick={() => dispatch(removeFromCart(item.id))}>
               x
             </div>
            
                </div>
                <hr></hr>
                </div>
             ))}
            




           </div>
           <hr></hr>
         </div>


               
       </>
       
     )}
      <button className='bg-[blue] bottom flex items-center justify-center text-white p-4 px-6 mt-[5rem]' ><p>Checkout (Grand Total: ${getTotalPrice()}</p></button>

   </div>
   <Subscribe />
      <Foot />
   </div>
 );
};


export default Cart