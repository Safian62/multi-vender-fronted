import React from 'react'
import DashboardHeader from '../../components/shop/Layout/DashboardHeader'
import DashboardSideBar from '../../components/shop/Layout/DashboardSideBar'
import AllCupons from '../../components/shop/Layout/AllCupons'
const ShopAllCupons = () => {
  return (
    <div>
      <DashboardHeader />
      <div className="flex justify-between w-full">
        <div className=" w-[80px]  800px:w-[280px] ">
          <DashboardSideBar active={9} />
        </div>
        <div className="w-full justify-center flex">
          <AllCupons/>
        </div>
      </div>
    </div>
  )
}

export default ShopAllCupons
