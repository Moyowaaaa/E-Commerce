import React from 'react'
import { UserIcon, ShoppingCartIcon } from "@heroicons/react/solid";
import Link from 'next/link'

const Navbar = () => {
  return (
    <div>

<div className='h-[4rem] pl-6 bg-[blue]  text-[white] flex items-center '>
        <h1 className='w-9/12'>E-commerce</h1>


        <div className='flex flex-wrap '>
            <Link href='/store'><span className='mx-6'>Shop</span></Link>
            <a href="/aboutus"><span className='mx-6'>About</span></a>
           {/* <Link href='/aboutus'><span className='mx-6'>About</span> </Link> */}
            <span className='flex'><UserIcon width={20}/> Login</span>
            <span className='ml-6'><ShoppingCartIcon width={20} height={30}/></span>
        </div>
        </div>


    </div>
  )
}

export default Navbar