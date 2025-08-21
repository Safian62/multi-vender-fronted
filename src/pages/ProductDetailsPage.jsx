import React, { useEffect, useState } from "react";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import ProductDetails from "../components/Products/ProductDetails.jsx";
import { useParams } from "react-router-dom";
import SuggestedProduct from "../components/Products/SuggestedProduct.jsx";
import { useSelector, useDispatch } from "react-redux";
import { getAllProducts } from "../redux/actions/product";

const ProductDetailsPage = () => {
  const dispatch = useDispatch();
  const { allProducts, isLoading } = useSelector((state) => state.products);
  const { id } = useParams();   // ✅ ab yahan `id` milega (product._id)
  const [data, setData] = useState(null);
  console.log(allProducts)
  useEffect(() => {
    if (!allProducts || allProducts.length === 0) {
      dispatch(getAllProducts());
    }
  }, [dispatch, allProducts]);

  useEffect(() => {
    if (allProducts && allProducts.length > 0) {
      const data = allProducts.find((i) => i._id === id); // ✅ find by id
      setData(data);
    }
  }, [allProducts, id]);




  return (
    <div>
      <Header />
      <ProductDetails data={data} />
      {data && <SuggestedProduct data={data} />}
      <Footer className="mb-10 " />
    </div>
  );
};

export default ProductDetailsPage;
