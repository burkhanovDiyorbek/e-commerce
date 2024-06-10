import { useState } from "react";

export const CartItem = () => {
  const [quanity, setQuanit] = useState(1);
  return (
    <ul className="item">
      <li className="item-title">
        <img src=".././images/qrcode.png" alt="img" />
        <h2>LCD Monitor</h2>
      </li>
      <li className="price">$650</li>
      <li className="item-input">
        <input
          type="number"
          min={1}
          value={quanity}
          onInput={(e) => setQuanit(e.target.value)}
        />
      </li>
      <li className="subtotal">${650 * quanity}</li>
    </ul>
  );
};
