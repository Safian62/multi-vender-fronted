import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styles from "../../styles/style";
import {
  AiFillHeart,
  AiOutlineHeart,
  AiOutlineMessage,
  AiOutlineShoppingCart,
} from "react-icons/ai";

const ProductDetails = ({ data }) => {
  const [count, setCount] = useState(1);
  const [click, setClick] = useState(false);
  const [select, setSelect] = useState(0);
  const navigate = useNavigate();

  function increment() {
    setCount(count + 1);
  }
  function decrement() {
    if (count > 1) {
      setCount(count - 1);
    }
  }

  const handleMessageSubmit = () => {
    navigate("/inbox?conservation=507ebjver884chfgjerive84");
  };
  return (
    <div className="bg-white">
      {data ? (
        <div className={`unset ${styles.section} w-[90%] 800px:w-[80%] h-full`}>
          {/* TOP COMPONENT */}
          <div className="w-full py-5 ">
            <div className=" w-full 800px:flex">
              {/* LEFT SIDE CONTENT */}
              <div className="w-full 800px:[50%]">
                <img
                  src={data.image_Url[select].url}
                  alt=""
                  className="w-[80%]"
                />
                <div className="w-full flex">
                  <div
                    className={`${
                      select === 0 ? "border" : "null"
                    } cursor-pointer`}
                  >
                    <img
                      src={data?.image_Url[0].url}
                      alt=""
                      className="h-[200px]"
                      onClick={() => setSelect(0)}
                    />
                  </div>
                  <div
                    className={`${
                      select === 1 ? "border" : "null"
                    } cursor-pointer`}
                  >
                    <img
                      src={data?.image_Url[1].url}
                      alt=""
                      className="h-[200px]"
                      onClick={() => setSelect(1)}
                    />
                  </div>
                </div>
              </div>
              {/* RIGHT SIDE CONTENT */}
              <div className="w-full 80px:w-[50%] pt-5">
                <h1 className={`${styles.productTitle}`}>{data.name}</h1>
                <p>{data.description}</p>
                {/* PRICE */}
                <div className="flex pt-3">
                  <h4 className={`${styles.productDiscountPrice}`}>
                    {data.discount_price}$
                  </h4>
                  <h3 className={`${styles.price}`}>
                    {data.price ? data.price + "$" : null}
                  </h3>
                </div>
                {/* BUTTONS */}
                <div
                  className={`${styles.normalFlex} mt-12 justify-between pr-3`}
                >
                  <div className="flex w-full items-center mt-12 justify-between pr-3">
                    {/* BUTTON */}
                    <div>
                      <button
                        className="bg-gradient-to-r from-teal-400 to-teal-500 text-white font-bold rounded-l px-4 py-2 shadow-lg hover:opacity-75 transition duration-300 ease-in-out"
                        onClick={decrement}
                      >
                        -
                      </button>
                      <span className="bg-gray-200 text-gray-800 font-medium px-4 py-[11px]">
                        {count}
                      </span>
                      <button
                        className="bg-gradient-to-r from-teal-400 to-teal-500 text-white font-bold rounded-r px-4 py-2 shadow-lg hover:opacity-75 transition duration-300 ease-in-out"
                        onClick={increment}
                      >
                        +
                      </button>
                    </div>
                    {/* FAVOURITE */}
                    <div>
                      {click ? (
                        <AiFillHeart
                          size={30}
                          className="cursor-pointer "
                          onClick={() => setClick(!click)}
                          color={click ? "red" : "#333"}
                          title="Remove from wishlist"
                        />
                      ) : (
                        <AiOutlineHeart
                          size={30}
                          className="cursor-pointer "
                          onClick={() => setClick(!click)}
                          color={click ? "red" : "#333"}
                          title="Add to wishlist"
                        />
                      )}
                    </div>
                  </div>
                </div>
                {/* BUTTONS */}
                <div
                  className={`${styles.button} !mt-6 !rounded !h-11 flex items-center`}
                >
                  <span className="text-white flex items-center">
                    Add to cart <AiOutlineShoppingCart />{" "}
                  </span>
                </div>

                {/* SEND MESSAGE */}
                <div className="flex items-center pt-8 ">
                  <img
                    src={data.shop.shop_avatar.url}
                    alt=""
                    className="w-[50px] h-[50px] rounded-full mr-2"
                  />
                  <div className="pr-8">
                    <h3 className={`${styles.shop_name} pt-1`}>
                      {data.shop.name}
                    </h3>
                    <h5 className="pb-3 text-[15px]">
                      ({data.shop.ratings})Ratings
                    </h5>
                  </div>
                  <div
                    className={`${styles.button} bg-[#6443d1] !rounded !h-11`}
                    onClick={handleMessageSubmit}
                  >
                    <span className="text-white flex items-center">
                      Send Message <AiOutlineMessage className="ml-1 mt-1" />
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* BOTTOM COMPONENT && MORE  INFORMATION ABOUT PRODUCT */}
          <ProductDetailsInfo data={data} />
          <br />
          <br />
        </div>
      ) : null}
    </div>
  );
};

const ProductDetailsInfo = ({ data }) => {
  const [active, setActive] = useState(1);

  return (
    <div className="bg-[#f5f6fb] px-3 800px:px-10 py-2 rounded h-full">
      {/* HEADINGS */}
      <div className="w-full flex justify-between border-b pt-10 pb-2">
        <div className="relative">
          <h5
            className=" text-[#000] text-[18px] px-1 leading-5 font-[600] cursor-pointer 800px:text-xl]"
            onClick={() => setActive(1)}
          >
            Product Detail
          </h5>

          {active === 1 ? (
            <div className={`${styles.active_indicator}`} />
          ) : null}
        </div>
        <div className="relative">
          <h5
            className=" text-[#000] text-[18px] px-1 leading-5 font-[600] cursor-pointer 800px:text-xl]"
            onClick={() => setActive(2)}
          >
            Product Reviews
          </h5>

          {active === 2 ? (
            <div className={`${styles.active_indicator}`} />
          ) : null}
        </div>
        <div className="relative">
          <h5
            className=" text-[#000] text-[18px] px-1 leading-5 font-[600] cursor-pointer 800px:text-xl]"
            onClick={() => setActive(3)}
          >
            Seller Information
          </h5>

          {active === 3 ? (
            <div className={`${styles.active_indicator}`} />
          ) : null}
        </div>
      </div>
      {/* HEADINGS DETAILS */}
      {active === 1 ? (
        <>
          <p className="py-2 text-[18px] leading-8 pb-10 whitespace-pre-line">
            Products details are critical parts of any websites or online
            marketplace These helps potential customers to make and informed
            decision Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Enim debitis ratione necessitatibus sequi! Numquam et culpa, a odio
            nisi rem quasi porro perferendis, necessitatibus sequi assumenda
            quos voluptatem, itaque nam! Lorem, ipsum dolor sit amet consectetur
            adipisicing elit. Doloremque odio mollitia animi deserunt?
            Repellendus, odio! Eos et quisquam deserunt eligendi natus. Aliquid
            eligendi nihil velit aut autem perspiciatis temporibus modi?
          </p>
          <p className=" py-2 text-[18px] leading-8 pb-10 whitespace-pre-line">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatum
            reiciendis maxime excepturi enim earum quae. Assumenda itaque
            explicabo eveniet quos deleniti. Quae repellat voluptatum, ea alias
            id provident minima dolore. Lorem ipsum, dolor sit amet consectetur
            adipisicing elit. Nisi, atque. Dolores officia eum repellendus nam
            voluptas iusto culpa, aliquam sint at atque repellat voluptatem, aut
            iste ratione eaque ducimus aperiam.
          </p>
          <p className=" py-2 text-[18px] leading-8 pb-10 whitespace-pre-line">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatum
            reiciendis maxime excepturi enim earum quae. Assumenda itaque
            explicabo eveniet quos deleniti. Quae repellat voluptatum, ea alias
            id provident minima dolore. Lorem ipsum, dolor sit amet consectetur
            adipisicing elit. Nisi, atque. Dolores officia eum repellendus nam
            voluptas iusto culpa, aliquam sint at atque repellat voluptatem, aut
            iste ratione eaque ducimus aperiam.
          </p>
        </>
      ) : null}
      {active === 2 ? (
        <p className="text-center my-14">No Reviews yet</p>
      ) : null}
      {active === 3 && (
        <div className="w-full sm:flex justify-between 800px:flex p-5">
          <div className="w-full block 800px:w-[50%]">
            <div className="flex items-center">
              <img
                src={data.shop.shop_avatar.url}
                className="w-[50px] h-[50px] rounded-full"
                alt=""
              />
              <div className="pl-3">
                <h3 className={`${styles.shop_name}`}>{data.shop.name}</h3>
                <h4 className="pb-3 text-[15px]">
                  ({data.shop.ratings}) Ratings
                </h4>
              </div>
            </div>
            <p className="pt-3 ">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rem,
              odit non. Tempora voluptatum odio corrupti hic doloremque et
              labore praesentium neque excepturi eos mollitia exercitationem
              natus tenetur, perspiciatis, quasi deserunt.
            </p>
          </div>
          <div className=" 800px:w-[50p%] mt-5 800px:mt-0 800px:flex flex-col items-center">
            <div className="text-left">
              <h5 className="font-[700]">
                {" "}
                Joined on: <span className="font-[500]">29 august,2025</span>
              </h5>
              <h5 className="font-[700] pt-3">
                {" "}
                Total Products: <span className="font-[500]">1,100</span>
              </h5>
              <h5 className="font-[700] pt-3">
                {" "}
                Total Reviews: <span className="font-[500]">100</span>
              </h5>
              <Link to="/">
                <div className={`${styles.button} rounded !h-[40px] mt-3`}>
                  <h4 className="text-white font-semibold text-[18px]">Visit Shop</h4>
                </div>
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductDetails;
