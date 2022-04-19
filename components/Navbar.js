import React from 'react'
import { UserIcon, ShoppingCartIcon } from "@heroicons/react/solid";
import Link from 'next/link'

const Navbar = ({ search }) => {
  return (
    <div>

{/* <div className='h-[4rem] pl-6 bg-[blue]  text-[white] flex items-center '>
        <h1 className='w-9/12'>Peter&apos;s  Place</h1>


        <div className='flex flex-wrap hidden lg:flex '>
            <Link href='/store'><span className='mx-6'>Shop</span></Link>
            <Link href='/about'><span className='mx-6'>About</span></Link>

            <div>
                <input type="text"
          placeholder="Search"
          className='text-black'
          onChange = {(e) => search(e)}
                ></input>
            </div>


            <span className='flex'><UserIcon width={20}/> Login</span>
            <span className='ml-6'><ShoppingCartIcon width={20} height={30}/></span>
        </div>
        </div> */}


        <div className='w-full  h-[4rem]'>
        <div className='flex  items-center h-full'>
          <Link href='/'>
            <div className='w-4/12 lg:pl-[2rem] cursor-pointer '>
        <h1 className='w-max hover:border-b-2 hover:border-[blue]'>Peter&apos;s  Place</h1>
        </div>
        </Link>



        <div className='h-full  w-4/12 flex items-center'>
        <input type="text" placeholder="Search" className='text-black hidden border-b-2 outline-none focus:border-[blue] w-full py-2 lg:flex'  onChange = {(e) => search(e)}></input>
        </div>

        <div className='ml-[3rem] cursor-pointer'></div>
        <Link href='/about'><span className=' mx-12 hover:border-b-2 hover:border-[blue]'>About</span></Link>
        <Link href='/store'><span className='mr-8 hover:border-b-2 hover:border-[blue]'>Shop</span></Link>
        <span className='ml-6 hover:border-b-2 hover:border-[blue]'><ShoppingCartIcon width={20} height={30}/></span>

          </div>

          <div className='h-full mx-auto w-9/12 flex items-center'>
        <input type="text" placeholder="Search" className='text-black border-b-2 outline-none focus:border-[blue] w-full py-2 mt-[5rem] lg:hidden'  onChange = {(e) => search(e)}></input>
        </div>

          
        </div>

    </div>
  )
}

export default Navbar