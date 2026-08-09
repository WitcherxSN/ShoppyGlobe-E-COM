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
    <div>
    <img
      src={item.thumbnail}
      alt={item.title}
      width="120"
      loading="lazy"
    />

    <h3>{item.title}</h3>

    <p>
      ₹{Math.round(item.price * 90).toLocaleString("en-IN")}
    </p>

    <div>
      <button
        onClick={() => dispatch(decreaseQuantity(item.id))}
      >
        -
      </button>

      <span>
        {item.quantity}
      </span>

      <button
        onClick={() => dispatch(increaseQuantity(item.id))}
      >
        +
      </button>
    </div>

    <button
      onClick={() => dispatch(removeFromCart(item.id))}
    >
      Remove
    </button>
  </div>
  );
}

export default CartItem;