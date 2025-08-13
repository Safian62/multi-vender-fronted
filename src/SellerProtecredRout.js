import { Navigate } from "react-router-dom";

const SellerProtectedRout = ({ isSeller, seller, children }) => {
  if (!isSeller) {
    return <Navigate to={`/`} replace />;
  }
  return children;
};

export default SellerProtectedRout;
