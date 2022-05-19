import React from 'react';
import { useSelector } from 'react-redux';

function CurrentItemsInCart() {
  const { cartItems } = useSelector((state) => state);

  return (
    <button className="btn btn-warning">
      Cart items:
      <i className="fa-solid fa-cart-shopping"></i>({cartItems.length})
    </button>
  );
}

export default CurrentItemsInCart;
