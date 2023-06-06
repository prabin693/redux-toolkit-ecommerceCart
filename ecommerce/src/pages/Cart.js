import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { remove } from "../store/cartSlice";

const Cart = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.cart);

  const handleRemove = (product) => {
    dispatch(remove(product));
  };

  return (
    <div>
      <h3>Cart</h3>
      <div className="cartWrapper">
        {products.map((product) => (
          <div className="cartCard" key={product.id}>
            <img src={product.image} alt="" />
            <h4>{product.title}</h4>
            <h5>{product.price}$</h5>
            <button className="btn" onClick={() => handleRemove(product)}>
              Remove
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cart;
