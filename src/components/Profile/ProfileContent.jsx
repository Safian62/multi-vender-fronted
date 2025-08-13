import React, { useState } from "react";
import {
  AiOutlineArrowRight,
  AiOutlineCamera,
  AiOutlineDelete,
} from "react-icons/ai";
import { useSelector } from "react-redux";
import styles from "../../styles/style";
import { Avatar } from "../../assests/asset";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { MdOutlineTrackChanges } from "react-icons/md";
import { backend_url } from "../../server";

const ProfileContent = ({ active }) => {
  const { user } = useSelector((state) => state.user);
  const avatarUrl = user?.avatar?.url;
  const fullAvatarUrl =
    avatarUrl && !avatarUrl.startsWith("http")
      ? `${backend_url}${avatarUrl.startsWith("/") ? "" : "/"}${avatarUrl}`
      : avatarUrl || Avatar;
  const [name, setName] = useState(user && user.name);
  const [email, setEmail] = useState(user && user.email);
  const [phoneNumber, setPhoneNumber] = useState(null);
  const [zipCode, setZipCode] = useState(0);
  const [address1, setAddress1] = useState("");
  const [address2, setAddress2] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="w-full ">
      {/* PROFILE UPDATE CHANGE */}
      {active === 1 && (
        <>
          <div className=" flex justify-center w-full ">
            <div className="relative">
              <img
                src={fullAvatarUrl}
                onError={(e) => {
                  e.target.src = Avatar;
                }}
                className="w-36 h-36 border-green-700 rounded-full border-3"
                alt="User Avatar"
              />
              <div className="w-[30px] h-[30px]  bg-[#E3E9EE] rounded-full flex items-center justify-center cursor-pointer absolute bottom-1 right-1">
                <AiOutlineCamera />
              </div>
            </div>
          </div>
          <br />
          <br />
          <div className="w-full px-5">
            <form onSubmit={handleSubmit}>
              {/*  PERSOND ABOUT DETAILS */}
              <div className="w-full 800px:flex pb-3">
                <div className=" w-full 800px:w-[50%]">
                  <label className="block pb-2">full Name</label>
                  <input
                    type="text"
                    className={`${styles.input} !w-[95%] mb-4 800px:mb-0`}
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
                <div className=" w-full 800px:w-[50%]">
                  <label className="block pb-2">Email Address</label>
                  <input
                    type="text"
                    className={`${styles.input} !w-[95%] 800px:mb-0`}
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
              </div>
              <div className="w-full 800px:flex pb-3">
                <div className=" w-full 800px:w-[50%]">
                  <label className="block pb-2">Phone Number</label>
                  <input
                    type="number"
                    className={`${styles.input} !w-[95%] mb-4 800px:mb-0`}
                    required
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                  />
                </div>
                <div className=" w-full 800px:w-[50%]">
                  <label className="block pb-2">Zip Code</label>
                  <input
                    type="text"
                    className={`${styles.input} !w-[95%]  800px:mb-0`}
                    required
                    value={zipCode}
                    onChange={(e) => setZipCode(e.target.value)}
                  />
                </div>
              </div>
              <div className="w-full 800px:flex pb-3">
                <div className="w-full 800px:w-[50%]">
                  <label className="block pb-2">Address 1</label>
                  <input
                    type="text"
                    className={`${styles.input} !w-[95%] mb-4 800px:mb-0`}
                    required
                    value={address1}
                    onChange={(e) => setAddress1(e.target.value)}
                  />
                </div>
                <div className="w-full 800px:w-[50%]">
                  <label className="block pb-2">Address 2</label>
                  <input
                    type="text"
                    className={`${styles.input} !w-[95%] mb-4 800px:mb-0`}
                    required
                    value={address2}
                    onChange={(e) => setAddress2(e.target.value)}
                  />
                </div>
              </div>
              <input
                type="submit" // fix: lowercase "submit"
                value="Update"
                required
                className="w-[250px] h-[40px] border border-[#3a24db] text-center text-[#3a24db] rounded-[3px] mt-8 cursor-pointer"
              />
            </form>
          </div>
        </>
      )}

      {/* ORDERS PAGE  */}
      {active === 2 && (
        <div>
          <AllOrders />
        </div>
      )}

      {/* REFUND PAGE */}
      {active === 3 && (
        <div>
          <AllRefundOrders />
        </div>
      )}

      {/* TRACK ORDER PAGE */}
      {active === 5 && (
        <div>
          <TrackOrder />
        </div>
      )}

      {/* PAYMENT METHOD PAGE */}
      {active === 6 && (
        <div>
          <PaymentMethod />
        </div>
      )}

      {/* USER ADDRESS PAGE */}
      {active === 7 && (
        <div>
          <Address />
        </div>
      )}
    </div>
  );
};

const AllOrders = () => {
  const orders = [
    {
      _id: "643456789098765434567",
      orderItems: [
        {
          name: "Iphone 15 pro max",
        },
      ],
      totalPrice: 120,
      orderStatus: "processing",
    },
  ];

  const columns = [
    { field: "id", headerName: "Order ID", minWidth: 150, flex: 0.7 },
    {
      field: "status",
      headerName: "status",
      minWidth: 130,
      flex: 0.7,
      // fix: should be cellClassName, not callClassName
      cellClassName: (params) => {
        return params.value === "Delivered" ? "greenColor" : "redColor";
      },
    },
    {
      field: "itemsQty", // fix: use camelCase consistently
      headerName: "ItemsQty",
      type: "number", // fix: use lowercase 'number'
      minWidth: 130,
      flex: 0.7,
    },
    {
      field: "total",
      headerName: "Total",
      type: "number", // fix: lowercase
      minWidth: 130,
      flex: 0.8,
    },

    {
      field: "actions", // fix: empty field name replaced with 'actions'
      headerName: "",
      type: "number",
      minWidth: 150,
      flex: 1,
      sortable: false,
      renderCell: (params) => {
        return (
          <>
            <Link to={`/order/${params.id}`}>
              <Button>
                <AiOutlineArrowRight size={20} />
              </Button>
            </Link>
          </>
        );
      },
    },
  ];

  const rows = [];

  orders &&
    orders.forEach((item) => {
      rows.push({
        id: item._id,
        itemsQty: item.orderItems.length,
        total: "US$" + item.totalPrice,
        status: item.orderStatus,
      });
    });
  return (
    <div className="pl-8 pt-1">
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={10}
        disableSelectionOnClick
        autoHeight
      />
    </div>
  );
};
const AllRefundOrders = () => {
  const orders = [
    {
      _id: "643456789098765434567",
      orderItems: [
        {
          name: "Iphone 15 pro max",
        },
      ],
      totalPrice: 120,
      orderStatus: "processing",
    },
  ];
  const columns = [
    { field: "id", headerName: "Order ID", minWidth: 150, flex: 0.7 },
    {
      field: "status",
      headerName: "status",
      minWidth: 130,
      flex: 0.7,
      cellClassName: (params) => {
        return params.value === "Delivered" ? "greenColor" : "redColor";
      },
    },
    {
      field: "itemsQty",
      headerName: "ItemsQty",
      type: "number",
      minWidth: 130,
      flex: 0.7,
    },
    {
      field: "total",
      headerName: "Total",
      type: "number",
      minWidth: 130,
      flex: 0.8,
    },

    {
      field: "actions",
      headerName: "",
      type: "number",
      minWidth: 150,
      flex: 1,
      sortable: false,
      renderCell: (params) => {
        return (
          <>
            <Link to={`/order/${params.id}`}>
              <Button>
                <AiOutlineArrowRight size={20} />
              </Button>
            </Link>
          </>
        );
      },
    },
  ];
  const rows = [];
  orders &&
    orders.forEach((item) => {
      rows.push({
        id: item._id,
        itemsQty: item.orderItems.length,
        total: "US$" + item.totalPrice,
        status: item.orderStatus,
      });
    });
  return (
    <div className="pl-8 pt-1">
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={10}
        autoHeight
        disableSelectionOnClick
      />
    </div>
  );
};
const TrackOrder = () => {
  const orders = [
    {
      _id: "643456789098765434567",
      orderItems: [
        {
          name: "Iphone 15 pro max",
        },
      ],
      totalPrice: 120,
      orderStatus: "processing",
    },
  ];
  const columns = [
    { field: "id", headerName: "Order ID", minWidth: 150, flex: 0.7 },
    {
      field: "status",
      headerName: "status",
      minWidth: 130,
      flex: 0.7,
      cellClassName: (params) => {
        return params.value === "Delivered" ? "greenColor" : "redColor";
      },
    },
    {
      field: "itemsQty",
      headerName: "ItemsQty",
      type: "number",
      minWidth: 130,
      flex: 0.7,
    },
    {
      field: "total",
      headerName: "Total",
      type: "number",
      minWidth: 130,
      flex: 0.8,
    },

    {
      field: "actions",
      headerName: "",
      type: "number",
      minWidth: 150,
      flex: 1,
      sortable: false,
      renderCell: (params) => {
        return (
          <>
            <Link to={`/order/${params.id}`}>
              <Button>
                <MdOutlineTrackChanges size={20} />
              </Button>
            </Link>
          </>
        );
      },
    },
  ];
  const rows = [];
  orders &&
    orders.forEach((item) => {
      rows.push({
        id: item._id,
        itemsQty: item.orderItems.length,
        total: "US$" + item.totalPrice,
        status: item.orderStatus,
      });
    });
  return (
    <div className="pl-8 pt-1">
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={10}
        autoHeight
        disableSelectionOnClick
      />
    </div>
  );
};
const PaymentMethod = () => {
  return (
    <div className="w-full px-5">
      <div className="w-full px-5 flex items-center justify-between">
        <h1 className="text-xl font-[600] text-[#000000ba]">Payment Methods</h1>
        <div className={`${styles.button} !rounded-md`}>
          <span className="text-white">Add new</span>
        </div>
      </div>
      <br />
      <div className="w-full bg-white h-[70px] rounded-[4px] flex items-center px-3 shadow justify-between pr-10">
        <div className="flex items-center">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnqz0qtXghh1ZHImnO8LmHcfMqTz6c0VILSQ&s"
            alt=""
            className="h-[20px]"
          />
          <h5 className="pl-5 font-[600] text-2xl">Safian</h5>
        </div>
        <div className="pl-8 flex items-center">
          <h6>123 ********** </h6>
          <h5 className="pl-6"> 08/25</h5>
        </div>
        <div className="min-w-[10%] flex items-center justify-between pl-8 ">
          <AiOutlineDelete size={25} className="cursor-pointer" />
        </div>
      </div>
    </div>
  );
};
const Address = () => {
  return (
    <div className="w-full px-5">
      <div className="w-full px-5 flex items-center justify-between">
        <h1 className="text-xl font-[600] text-[#000000ba]">My Address</h1>
        <div className={`${styles.button} !rounded-md`}>
          <span className="text-white">Add new</span>
        </div>
      </div>
      <br />
      <div className="w-full bg-white h-[70px] rounded-[4px] flex items-center px-3 shadow justify-between pr-10">
        <div className="flex items-center">
          <h5 className="pl-5 font-[600] text-2xl">Default Address</h5>
        </div>
        <div className="pl-8 flex items-center">
          <h6>494 Bath Lahore,Pakistan </h6>
        </div>
        <div className="pl-8 flex items-center">
          <h6>1234567890 </h6>
        </div>
        <div className="min-w-[10%] flex items-center justify-between pl-8 ">
          <AiOutlineDelete size={25} className="cursor-pointer" />
        </div>
      </div>
    </div>
  );
};
export default ProfileContent;
