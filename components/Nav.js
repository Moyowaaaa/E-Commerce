
import React from "react";
import { UserIcon, ShoppingCartIcon } from "@heroicons/react/solid";
import Head from "next/head";
import Image from "next/image";
import { useState, useEffect } from "react";
import Router from "next/router";
import Link from "next/link";
import { useRouter } from "next/router";

const Nav = () => {
    const router = useRouter();

  return (
    <div className='w-[100%]'>

<div className="inline-flex flex-row w-full cursor-pointer">
        <div className="  w-5/12 flex flex-row h-[auto] px-12 py-8 gap-5 h-[auto]">
            <Link  href="/"><span className='hover:border-b border-[blue]'>Home</span></Link>
            <Link  href='/store'><span className={`hover:border-b border-[blue] ${router.pathname == "/store" ? "border-b-2 border-[blue]" : ""}`}>Store</span></Link>
            <Link href='/about'><span className={`hover:border-b border-[blue] ${router.pathname == "/about" ? "border-b-2 border-[blue]" : ""}`}>About us</span></Link>
            <Link href='/contact'><span className={`hover:border-b border-[blue] ${router.pathname == "/contact" ? "border-b-2 border-[blue]" : ""}`}>Contact</span></Link>
          </div>

          <div className="flex flex-row items-center w-5/12 ] ">
            <p className="text-center text-2xl">E commerce</p>
          </div>


          <div className="flex items-center ">
            
              {/* <UserIcon width={20}/><span>  Login</span> */}
              <span className="hover:border-b-2 hover:border-[blue]"><ShoppingCartIcon width={20} height={30}/></span>
              
              
          </div>



          {/* <span className=''><UserIcon width={20}/> Login</span>
            <span className='ml-6'><ShoppingCartIcon width={20} height={30}/></span>
            */}
        </div>
    </div>
  )
}

export default Nav