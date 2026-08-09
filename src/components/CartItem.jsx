import { useDispatch } from "react-redux";

import {
  removeFromCart,
  increaseQuantity,
  decreaseQuantity,
} from "../redux/cartSlice";

function CartItem(props) {
    const dispatch = useDispatch();
  const item = props.item;

  return (
    <div className="cart-item">
    <img
      src={item.thumbnail}
      alt={item.title}
      loading="lazy"
    />

    <div className="cart-item-info">
      <h3>{item.title}</h3>

      <p className="cart-item-price">
        ₹{Math.round(item.price * 90).toLocaleString("en-IN")}
      </p>

      <div className="quantity-control">
        <button
          onClick={() => dispatch(decreaseQuantity(item.id))}
        >
          -
        </button>

        <span>{item.quantity}</span>

        <button
          onClick={() => dispatch(increaseQuantity(item.id))}
        >
          +
        </button>
      </div>
    </div>

    <button
      className="remove-btn"
      onClick={() => dispatch(removeFromCart(item.id))}
    >
      Remove
    </button>
  </div>
  );
}

export default CartItem;