import axios from "axios";
import react, { useState, useEffect } from "react";
import Router from "next/router";
import Link from "next/link";
import Head from "next/head";
import Image from "next/image";
import useFetch from "../utils/useFetch";
const random = Math.floor(Math.random() * 10);
const url = "https://fakestoreapi.com/products";

const NewProduct = ({ newProduct }) => {

  const random = Math.floor(Math.random() * 10);

  const {products, loading,error} = useFetch({url:`${url}/${random}`});

  // const newProduct = products;

  console.log("showcase", products);
  const [newProducts, setNewProducts] = useState(products);

  return (
    <div>
      <div className="h-[40rem]  flex flex-row flex-col-reverse lg:flex-row">
        <div className="w-6/12  lg:w-6/12 bg-[blue] flex flex-col items-center justify-center">
          <div className="text-center"></div>
        </div>

        <div className="w-full lg:w-6/12 bg-[blue] flex flex-col items-center justify-center">
          <h2>{newProducts?.title}</h2>
        </div>
      </div>
    </div>
  );
};
// export const getServerSideProps = async (random) => {
//   const res = await fetch(`https://fakestoreapi.com/products/${random}`);
//   const newProduct = await res.json();

//   return {
//     props: {
//       newProduct,
//     },
//   };
// };
export default NewProduct;
