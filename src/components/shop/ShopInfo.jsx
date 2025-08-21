import React, { useEffect, useState } from "react";
import { Avatar } from "../../assests/asset";
import { backend_url } from "../../server";
import styles from "../../styles/style";
import axios from "axios";
import { server } from "../../server";
import { toast } from "react-toastify";
import { useNavigate, useParams } from "react-router-dom";

const ShopInfo = ({ isOwner }) => {
  const [data, setData] = useState({});
  const navigate = useNavigate();
  
  const avatarUrl = data?.avatar?.url;
  const fullAvatarUrl =
    avatarUrl && !avatarUrl.startsWith("http")
      ? `${backend_url}${avatarUrl.startsWith("/") ? "" : "/"}${avatarUrl}`
      : avatarUrl || Avatar;

  const { id } = useParams();
  useEffect(() => {
    axios
      .get(`${server}/shop/get-shop-info/${id}`)
      .then((resp) => {
        setData(resp.data.shop);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const logoutHandler = () => {
    axios
      .get(`${server}/shop/logout`, { withCredentials: true })
      .then((resp) => {
        toast.success(resp.data.message);
        window.location.reload(true);

        navigate("/shop-login");
      })
      .catch((error) => {
        const message = error?.response?.data?.message || "Logout failed";
        toast.warning(message);
      });
  };

  return (
    <div>
      <div className="w-full  py-5 ">
        <div className="w-full flex items-center justify-center">
          <img
            src={fullAvatarUrl}
            alt=""
            className="w-[150px] h-[150px] object-cover rounded-full"
          />
        </div>
        <h3 className="text-center py-2 text-2xl">{data?.name}</h3>
        <p className="text-[16px] text-[#000000a6] p-3 flex items-center">
          {data?.description}
        </p>
      </div>
      <div className="p-3">
        <h5 className="font-[600]"> Address</h5>
        <h4>{data?.address}</h4>
      </div>
      <div className="p-3">
        <h5 className="font-[600]"> Phone Number</h5>
        <h4>{data?.phoneNumber}</h4>
      </div>
      <div className="p-3">
        <h5 className="font-[600]"> Total Products</h5>
        <h4>10</h4>
      </div>
      <div className="p-3">
        <h5 className="font-[600]"> Shop Ratings</h5>
        <h4>4/5</h4>
      </div>
      <div className="p-3">
        <h5 className="font-[600]"> Joined On</h5>
        <h4>{data?.createdAt?.slice(0, 10)}</h4>
      </div>
      {isOwner && (
        <div className="py-3 px-4">
          <div className={`${styles.button} !w-full !h-[44px] !rounded-[5px]`}>
            <span className="text-white ">Edit Shop</span>
          </div>
          <div
            className={`${styles.button} !w-full !h-[44px] !rounded-[5px]`}
            onClick={logoutHandler}
          >
            <span className="text-white ">Log out</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default ShopInfo;
