import React from "react";
import ProductCard from "../components/ProductCard";
import { useSelector } from "react-redux";

const Cart = () => {
  const state = useSelector(state=>state);
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 max-w-7xl gap-14 mx-auto my-10'>
      {state?.cart.map((product,index) => (
      <ProductCard key={index} product={product} />
    ))}
    </div>
  );
};

export default Cart;
