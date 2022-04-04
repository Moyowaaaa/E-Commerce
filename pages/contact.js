import React from "react";
import { UserIcon, ShoppingCartIcon } from "@heroicons/react/solid";
import Head from "next/head";
import Image from "next/image";
import { useState, useEffect } from "react";
import Router from "next/router";
import Link from "next/link";
import Subscribe from "../components/Subscribe";
import Footer from "../components/Footer";
import Foot from "../components/Foot";

const contact = () => {
  return (
    <div>
        <div className="inline-flex flex-row w-full cursor-pointer">
        <div className="  w-5/12 flex flex-row h-[auto] px-12 py-8 gap-5 h-[auto]">
            <Link  href="/"><span className='hover:border-b border-[blue]'>Home</span></Link>
            <Link  href='/store'><span className='hover:border-b border-[blue]'>Store</span></Link>
            <Link href='/about'><span className='hover:border-b border-[blue]'>About us</span></Link>
            <Link href='/contact'><span className='hover:border-b border-[blue]'>Contact</span></Link>
          </div>

          <div className="flex flex-row items-center w-5/12  ">
            <p className="text-center text-2xl">E commerce</p>
          </div>

          <div className="flex flex-row  w-2/12">
            <span className="w-full flex  ">
              <UserIcon width={20} />
            </span>
          </div>

          {/* <span className='flex'><UserIcon width={20}/> Login</span>
            <span className='ml-6'><ShoppingCartIcon width={20} height={30}/></span>
            */}
        </div>


        <div className="w-8/12  m-[auto] h-auto flex mt-[6rem]">
            <div className="w-6/12 pr-2">
                <h2 className="mb-12 font-bold text-4xl">Contact us.</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
            </div>


            <div className="w-6/12 ml-2  block">
                <form className="px-4">
                    <div className="flex flex-col w-full">
                    <label>Name</label>
                    <input type="text" className="border-b-2 border-[blue] px-2 outline-none"></input>
                    </div>


                    <div className="w-full my-4 py-2">
                    <label className="" >Email</label><br/>
                    <input type="text" 
                    className="mt-2 border-b-2 border-[blue] w-full px-2 outline-none"
                    ></input>
                    <br/>
                    </div>


                    <div className="w-full w-full my-4">
                    <label>Subject</label>
                    <br/>
                    <input type="text" className="mt-2 border-b-2 border-[blue] w-full px-2 outline-none"></input>
                    <br/>
                    </div>

                    <label>Message</label>
                    <br/>
                    <textarea className="w-full h-24 mt-2 border-b-2 border-[blue] resize-none px-2 pt-2 outline-none"></textarea> 

                    <button className="p-4 bg-[blue] text-white my-6">Submit</button>  
                </form>


                
            </div>
        </div>
        <Subscribe />
        <Foot />
    </div>
  )
}

export default contact