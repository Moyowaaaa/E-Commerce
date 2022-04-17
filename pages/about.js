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

const About = () => {
  return (
    <div>
      <div className="h-screen w-full  flex flex-col">

          
        <div className="inline-flex flex-row w-full cursor-pointer">
        <div className="  w-5/12 flex flex-row h-[auto] px-12 py-8 gap-5 h-[auto]">
            <Link  href="/"><span className='hover:border-b border-[blue]'>Home</span></Link>
            <Link  href='/store'><span className='hover:border-b border-[blue]'>Store</span></Link>
            <Link href='/about'><span className='hover:border-b border-[blue]'>About us</span></Link>
            <Link href='/contact'><span className='hover:border-b border-[blue]'>Contact</span></Link>
          </div>

          <div className="flex flex-row items-center w-5/12 ] ">
            <p className="text-center text-2xl">E commerce</p>
          </div>


          <div className="flex items-center">
            
              {/* <UserIcon width={20}/><span>  Login</span> */}
              <ShoppingCartIcon width={20} height={30}/>
              
              
          </div>



          {/* <span className=''><UserIcon width={20}/> Login</span>
            <span className='ml-6'><ShoppingCartIcon width={20} height={30}/></span>
            */}
        </div>

        <div className="w-8/12 mx-[auto] h-[auto] pt-8 text-justify">
          <p className="py-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Amet
            aliquam id diam maecenas ultricies mi eget mauris. At auctor urna
            nunc id. Eu lobortis elementum nibh tellus molestie nunc non
            blandit. Dui sapien eget mi proin sed libero. Dolor sit amet
            consectetur adipiscing elit ut aliquam purus sit. Sed ullamcorper
            morbi tincidunt ornare massa eget. A condimentum vitae sapien
            pellentesque habitant. Cras tincidunt lobortis feugiat vivamus at
            augue. Habitant morbi tristique senectus et. Consectetur purus ut
            faucibus pulvinar elementum integer enim. Iaculis urna id volutpat
            lacus laoreet non curabitur. Tellus integer feugiat scelerisque
            varius morbi enim nunc faucibus. Velit sed ullamcorper morbi
            tincidunt ornare massa eget. Quis blandit turpis cursus in hac.
            Elementum facilisis leo vel fringilla. Tincidunt arcu non sodales
            neque sodales ut etiam sit. Vitae nunc sed velit dignissim sodales
            ut eu. Et malesuada fames ac turpis egestas integer.
          </p>


          <p className="py-4 pb-12">
          Tortor dignissim convallis aenean et tortor at risus viverra. Vivamus at augue eget arcu. Rhoncus est pellentesque elit ullamcorper dignissim cras. Gravida dictum fusce ut placerat orci nulla pellentesque. Pellentesque elit ullamcorper dignissim cras tincidunt lobortis feugiat. Id aliquet risus feugiat in ante metus dictum. Sagittis vitae et leo duis ut. Diam vulputate ut pharetra sit amet aliquam id diam maecenas. Imperdiet nulla malesuada pellentesque elit eget. Maecenas pharetra convallis posuere morbi leo urna molestie at. Eros donec ac odio tempor orci dapibus ultrices. Et ultrices neque ornare aenean. Interdum velit laoreet id donec. Dolor sit amet consectetur adipiscing elit pellentesque. Eleifend donec pretium vulputate sapien nec sagittis. Facilisi etiam dignissim diam quis enim lobortis. Imperdiet dui accumsan sit amet. Non tellus orci ac auctor augue mauris augue neque gravida. Maecenas sed enim ut sem viverra aliquet. Mauris pharetra et ultrices neque ornare aenean.
          </p>
        </div>

        <Subscribe />
      <Foot />
      </div>
    

      
    </div>
  );
};

export default About;
