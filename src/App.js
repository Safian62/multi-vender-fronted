import React, { useEffect } from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ProtectedRout from "./protectedRout/ProtectedRout.js";
import {
  LoginPage,
  SignUpPage,
  ActivationPage,
  HomePage,
  ProductsPage,
  BestSellingPage,
  EventsPage,
  FaqPage,
  ProductDetailsPage,
  ProfilePage,
  ShopCreatePage,
  SellerActivationPage,
  ShopLoginPage,
  OrderSuccessPage,
  PaymentPage,
  CheckoutPage,
} from "./protectedRout/Routes.js";
import {
  ShopDashboardPage,
  ShopHomePage,
  ShopCreateProduct,
  ShopAllProducts,
  ShopCreateEvents,
  ShopAllEvents,
  ShopAllCupons
} from "./protectedRout/ShopRout.js";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Store from "./redux/store";
import { loadUser } from "./redux/actions/user.js";
import { loadShop } from "./redux/actions/user.js";

import { useSelector } from "react-redux";
import SellerProtectedRout from "./protectedRout/SellerProtecredRout.js";
import Loader from "./components/layout/loader.jsx";

const App = () => {
  const { loading, isAuthenticated } = useSelector((state) => state.user);
  const { isLoading, isSeller } = useSelector((state) => state.seller);
  useEffect(() => {
    Store.dispatch(loadUser());
    Store.dispatch(loadShop());
  }, []);
  return (
    <>
      {loading || isLoading ? (
        <Loader />
      ) : (
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/sign-up" element={<SignUpPage />} />
            <Route
              path="/activation/:activation_token"
              element={<ActivationPage />}
            />
            <Route
              path="/seller/activation/:activation_token"
              element={<SellerActivationPage />}
            />
            <Route path="/products" element={<ProductsPage />} />
            <Route path="/product/:name" element={<ProductDetailsPage />} />
            <Route path="/best-selling" element={<BestSellingPage />} />
            <Route path="events" element={<EventsPage />} />
            <Route path="/faq" element={<FaqPage />} />
            <Route
              path="/checkout"
              element={
                <ProtectedRout>
                  <CheckoutPage />
                </ProtectedRout>
              }
            />
            <Route path="/payment" element={<PaymentPage />} />
            <Route path="/order/success/:id" element={<OrderSuccessPage />} />
            <Route
              path="/profile"
              element={
                <ProtectedRout isAuthenticated={isAuthenticated}>
                  <ProfilePage />
                </ProtectedRout>
              }
            />
            {/* SHOP ROUTE */}
            <Route path="/shop-create" element={<ShopCreatePage />} />
            <Route path="/shop-login" element={<ShopLoginPage />} />
            <Route
              path="/shop/:id"
              element={
                <SellerProtectedRout isSeller={isSeller}>
                  <ShopHomePage />
                </SellerProtectedRout>
              }
            />
            <Route
              path="/dashboard"
              element={
                <SellerProtectedRout isSeller={isSeller}>
                  <ShopDashboardPage />
                </SellerProtectedRout>
              }
            />
            <Route
              path="/dashboard-create-product"
              element={
                <SellerProtectedRout isSeller={isSeller}>
                  <ShopCreateProduct />
                </SellerProtectedRout>
              }
            />
            <Route
              path="/dashboard-products"
              element={
                <SellerProtectedRout isSeller={isSeller}>
                  <ShopAllProducts />
                </SellerProtectedRout>
              }
            />
            <Route
              path="/dashboard-create-event"
              element={
                <SellerProtectedRout isSeller={isSeller}>
                  <ShopCreateEvents />
                </SellerProtectedRout>
              }
            />
             
            <Route
              path="/dashboard-events"
              element={
                <SellerProtectedRout isSeller={isSeller}>
                  <ShopAllEvents />
                </SellerProtectedRout>
              }
            />
            <Route
              path="/dashboard-cupons"
              element={
                <SellerProtectedRout isSeller={isSeller}>
                  <ShopAllCupons />
                </SellerProtectedRout>
              }
            />
          </Routes>
          <ToastContainer
            position="bottom-center"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="dark"
          />
        </BrowserRouter>
      )}
    </>
  );
};

export default App;
