import React from "react";
import "./Cart.css";

const Cart = ({ cart, handleRemoveFromCart }) => {
  let message;
  if (cart.length === 0) {
    message = <p>Please add some products</p>;
  } else {
    message = (
      <div>
        <h3>Thank you for your order</h3>
        <p>
          <small>Thanks for giving your money</small>
        </p>
      </div>
    );
  }
  return (
    <div>
      <h2 className={cart.length === 1 ? "blue" : "red"}>
        Order Summary: {cart.length}
      </h2>
      <p className={`bold bordered ${cart.length === 3 ? "yellow" : "purple"}`}>
        Something
      </p>
      {cart.length > 2 ? (
        <span className="purple">Aro Kino</span>
      ) : (
        <span>fokira</span>
      )}
      {message}
      {cart.map((tshirt) => (
        <p key={tshirt._id}>
          {tshirt.name}{" "}
          <button onClick={() => handleRemoveFromCart(tshirt._id)}>X</button>
        </p>
      ))}
      {cart.length === 2 && <p>Double bonus</p>}
      {cart.length === 3 || <h3>Three product not match</h3>}
    </div>
  );
};

export default Cart;
