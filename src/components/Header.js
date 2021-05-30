import React from "react";
import Image from "next/image";
import {
  MenuIcon,
  SearchIcon,
  ShoppingCartIcon,
} from "@heroicons/react/outline";
function Header() {
  return (
    <header>
      {/* top header */}
      <div className="flex items-center bg-amazon_blue p-1 flex-grow py-2">
        <div className="mt-2 flex items-center flex-grow sm:flex-grow-0">
          <Image
            src="https://links.papareact.com/f90"
            width={150}
            height={40}
            objectFit="contain"
            className="cursor-pointer"
          />
        </div>
        <div className="hidden sm:flex items-center h-10 rounded-md flex-grow bg-yellow-400 hover:bg-yellow-500 cursor-pointer">
          <input
            className="h-full w-6 flex-grow flex-shrink rounded-l-md focus:outline-none mx-2 px-3"
            type="text"
          />
          <SearchIcon className="h-12 p-4" />
        </div>
        <div className="text-white flex items-center text-xs space-x-6 mx-6 whitespace-nowrap">
          <div className="link">
            <p>Hello, Amiyanshu</p>
            <p className="font-extrabold md:text-sm">Account & list</p>
          </div>
          <div className="link">
            <p>Returns</p>
            <p className="font-bold md:text-sm"> & Orders</p>
          </div>
          <div className="relative link flex items-center">
            <span className="absolute right-0 top-0 md:right-10 h-4 w-4 bg-yellow-400 text-center rounded-full text-black font-bold">
              0
            </span>
            <ShoppingCartIcon className="h-10" />
            <p className="hidden md:inline font-extrabold md:text-sm mt-2">
              Basket
            </p>
          </div>
        </div>
      </div>
      {/* Below nav */}
      <div className="flex items-center space-x-3 p-2 pl-6 bg-amazon_blue-light text-sm text-white">
        <p className=" link1 flex item-center">
          <MenuIcon className="h-6 mr-1" /> All
        </p>
        <p className=" link1">Best Sellers</p>
        <p className="link1">Mobiles</p>
        <p className="link1">Prime</p>
        <p className="link1">Fashion</p>
        <p className="link1">Electronics</p>
        <p className="link1 hidden lg:inline-flex ">Today's Deal</p>
        <p className="link1 hidden lg:inline-flex">Customer Service</p>
        <p className="link1 hidden lg:inline-flex">Amazon Pay</p>
        <p className="link1 hidden lg:inline-flex">Home and Kitchen</p>
        <p className="link1 hidden lg:inline-flex">Computers</p>
      </div>
    </header>
  );
}

export default Header;
