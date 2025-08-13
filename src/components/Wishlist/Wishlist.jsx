import React, { useState } from "react";
import { RxCross1 } from "react-icons/rx";
import styles from "../../styles/style";
import {BsCartPlus }from 'react-icons/bs'
import { AiOutlineHeart } from "react-icons/ai";
const Wish = ({ setOpenWish }) => {
  const cartData = [
    {
      name: "Iphone 15 pro max 2546 gb ssd and 8 gb ram silver ",
      description: "test",
      price: 1200,
    },
    {
      name: "Iphone 14 pro max 2546 gb ssd and 100 gb ram silver ",
      description: "test",
      price: 1300,
    },
    {
      name: "Iphone 13 pro max 2356 gb ssd and 54 gb ram silver ",
      description: "test",
      price: 1300,
    },
  ];

  return (
    <div className="fixed top-0 left-0 w-full text-black bg-[#0000002c] h-screen z-10 ">
      <div className="fixed top-0 right-0 min-h-full bg-white w-[26%]   flex flex-col  shadow-sm">
        <div>
          <div className="flex w-full justify-end top-0 right-2 fixed mt-4 pr-5 text-black ">
            <RxCross1
              size={25}
              className="cursor-pointer "
              onClick={() => setOpenWish(false)}
            />
          </div>

          {/* ITEMS LENGTH */}

          <div className={`${styles.normalFlex} px-4 mt-12`}>
            <AiOutlineHeart size={25} />
            <h5 className="pl-2 text-5 font-[500]">3 Items</h5>
          </div>
          {/* CART ITEMS */}
          <br />
          <div className="w-full border-t">
            {cartData &&
              cartData.map((i, index) => <CartSingle key={index} data={i} />)}
          </div>
        </div>
      </div>
    </div>
  );
};

const CartSingle = ({ data }) => {
  const [value, setValue] = useState(1);
  const totalPrice = data.price * value;
  return (
    <div className="border-b p-2">
      <div className="w-full flex items-center gap-4 ">
        <RxCross1 className=" cursor-pointer" size={30}/>
          {/* iMAGE */}
         <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTErtDJz7qg076NRGZYvYBXTqWeTCNXxHbnQg&s"
          alt=""
          className="w-[65px] h-[80px] ml-2 "
        />

      
       
        {/* DESCRIPYION */}
        <div className="pl-1">
          <h1 className="font-semibold">{data.name}</h1>
          <h4 className="font-[600] text-[16px] text-[#db2222] font-Roboto">
            US${totalPrice}
          </h4>
        </div>
        <div>
            <BsCartPlus size={20} className="cursor-pointer" tittle="Add to cart"/>
        </div>
       
      </div>
    </div>
  );
};

export default Wish;
