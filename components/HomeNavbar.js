import React from 'react'
import { UserIcon, ShoppingCartIcon } from "@heroicons/react/solid";
import Link from 'next/link'

const HomeNavbar = () => {
  return (
    <div className='h-[4rem] pl-6  text-[white] flex items-center '>
        <h1 className='w-9/12'>Peter&apos;Place</h1>


        <div className='flex flex-wrap '>
            <Link href='/store'><span className='mx-6'>Shop</span></Link>
           <Link href='/about'><span className='mx-6'>About</span> </Link>
            <span className='flex'><UserIcon width={20}/> Login</span>
            <span className='ml-6'><ShoppingCartIcon width={20} height={30}/></span>
        </div>
        </div>
  )
}

export default HomeNavbar