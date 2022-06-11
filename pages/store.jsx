import React, { useState, useEffect } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Link from "next/link";
// import Footer from '../components/Footer'
import { PlusIcon, ChevronDoubleLeftIcon } from "@heroicons/react/solid";
import axios from "axios";
import Subscribe from "../components/Subscribe";
// import Footer from '../components/Footer';
import Navbar from "../components/Navbar";
import Contact from "../components/Contact";
import { SpinnerCircularFixed } from "spinners-react";
import Shop from "../components/Store";

const Store = () => {
  const [products, setProducts] = useState();
  const [searchValue, setSearchValue] = useState("");
  const [loader, setLoader] = useState(false);
  const search = (e) => {
    setSearchValue(e.target.value);
  };

  useEffect(() => {
    async function getProducts() {
      try {
        const res = await axios.get("https://fakestoreapi.com/products");
        console.log(res.data);
        setProducts(res.data);
      } catch (error) {
        console.log(error);
      }
    }

    getProducts();
  });
  useEffect(() => {
    setLoader(false);
  });

  return (
    <div className="h-screen">
      <Navbar search={search} />

      <Link href="/">
        <div className="flex flex-row cursor-pointer ml-2 lg:ml-6 hover:underline hover:decoration-[blue]">
          <ChevronDoubleLeftIcon width={30} />
          <span className="my-2">Back</span>
        </div>
      </Link>

      <div className=" mt-12">
        <Shop
          search={search}
          loader={loader}
          products={products}
          searchValue={searchValue}
        />
      </div>

      <Subscribe />
      <Footer className="absolute" />
    </div>
  );
};

export default Store;
