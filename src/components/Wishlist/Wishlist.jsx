import React, { useState } from "react";
import { RxCross1 } from "react-icons/rx";
import styles from "../../styles/style";
import {BsCartPlus }from 'react-icons/bs'
import { AiOutlineHeart } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { backend_url } from "../../server";
import { removeFromWishList } from "../../redux/actions/wishList";
import { addToCart } from "../../redux/actions/cart";

const Wish = ({ setOpenWish }) => {
  const {wishList} = useSelector((state) => state.wishList)
   const dispatch = useDispatch();
  const removeFromWishListHandler = (data) => {
    dispatch(removeFromWishList(data));
  };
  const addToCartHandler = (data)=>{
    const newData = {...data,qty:1}
    dispatch(addToCart(newData))
    setOpenWish(false)
  }

  return (
    <div className="fixed top-0 left-0 w-full text-black bg-[#0000002c] h-screen z-10 ">
      <div className="fixed top-0 right-0 min-h-full bg-white w-[26%]   flex flex-col  shadow-sm">
        {
          wishList && wishList.length === 0 ?(
             <div className="w-full h-screen flex items-center justify-center">
                          <div className="flex w-full justify-end  pt-5 pr-5 fixed top-3 right-3">
                           <RxCross1 size={25} className="cursor-pointer " onClick={()=> setOpenWish(false)}/>
                        </div>
                        <h5>WishList is empty!</h5>
                        </div>
          ):(
            <>
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
            <h5 className="pl-2 text-5 font-[500]">{wishList.length}</h5>
          </div>
          {/* CART ITEMS */}
          <br />
          <div className="w-full border-t">
            {wishList &&
              wishList.map((i, index) => <CartSingle key={index} data={i} removeFromWishListHandler={removeFromWishListHandler} addToCartHandler={addToCartHandler} />)}
          </div>
        </div>
            </>
          )
        }
      </div>
    </div>
  );
};

const CartSingle = ({ data,removeFromWishListHandler ,addToCartHandler}) => {
  const [value, setValue] = useState(1);
  const totalPrice = data.discountPrice * value;
  return (
    <div className="border-b p-2">
      <div className="w-full flex items-center gap-4 ">
        <RxCross1 className=" cursor-pointer" size={15}
        onClick={()=> removeFromWishListHandler(data)}
        />
          {/* iMAGE */}
         <img
          src={`${backend_url}/${data.images[0]}`}
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
            <BsCartPlus size={20} className="cursor-pointer" tittle="Add to cart" 
            onClick={()=> addToCartHandler(data)}/>
        </div>
       
      </div>
    </div>
  );
};

export default Wish;
