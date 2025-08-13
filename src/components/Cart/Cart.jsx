import React, { useState } from "react";
import { RxCross1 } from "react-icons/rx";
import styles from "../../styles/style";
import { IoBagHandleOutline } from "react-icons/io5";
import { HiMinus, HiPlus } from "react-icons/hi";
import { Link } from "react-router-dom";

const Cart = ({ setOpenCard }) => {
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
              onClick={() => setOpenCard(false)}
            />
          </div>

          {/* ITEMS LENGTH */}

          <div className={`${styles.normalFlex} px-4 mt-12`}>
            <IoBagHandleOutline size={25} />
            <h5 className="pl-2 text-5 font-[500]">3 Items</h5>
          </div>
          {/* CART ITEMS */}
          <br />
          <div className="w-full border-t">
            {cartData &&
              cartData.map((i, index) => <CartSingle key={index} data={i} />)}
          </div>
        </div>
        {/* CHECK OUT BUTTON */}
        <div className="px-5 mb-3">
          <Link to="/checkout">
              <div className="h-[45px] flex items-center mt-5 justify-center w-[100%] bg-red-500 rounded-[5px]">
                <h1 className="text-white text-[18px] font-[600]">CheckOut Now (USD$1080)</h1>
              </div>
          </Link>
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
        {/* QUANTITY */}
        <div>
          <div
            className={`bg-[#e44343] border border-[#e4434373] rounded w-6 h-6 ${styles.normalFlex} justify-center cursor-pointer`}
            onClick={() => setValue(value + 1)}
          >
            <HiPlus size={18} color="#fff" />
          </div>
          <span className="pl-2">{value}</span>
          <div
            className="bg-[#a7abb14f] rounded w-6 h-6 flex  items-center justify-center cursor-pointer"
            onClick={() => setValue(value === 1 ? 1 : value - 1)}
          >
            <HiMinus size={18} />
          </div>
        </div>
        {/* iMAGE */}
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTErtDJz7qg076NRGZYvYBXTqWeTCNXxHbnQg&s"
          alt=""
          className="w-[65px] h-[80px] ml-2 "
        />
        {/* DESCRIPYION */}
        <div className="pl-1">
          <h1 className="font-semibold">{data.name}</h1>
          <h4 className="font-[400] text-[15px] text-black ">
            ${data.price} * {value}
          </h4>
          <h4 className="font-[600] text-[16px] text-[#db2222] font-Roboto">
            US${totalPrice}
          </h4>
        </div>
        <RxCross1 className="cursor-pointer" />
      </div>
    </div>
  );
};

export default Cart;
