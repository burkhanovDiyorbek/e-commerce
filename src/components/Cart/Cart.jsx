import { Link } from "react-router-dom";
import { CartItem } from "../CartItem/CartItem";
import { Button } from "../Button/Button";
import "./cart.css";

export const Cart = () => {
  return (
    <section className="container outlet section-cart">
      <p className="pathname">
        <Link to>Home </Link>
        <b> / Cart</b>
      </p>
      <div className="cart-items">
        <ul className="cart-title">
          <li>Product</li>
          <li className="price">Price</li>
          <li className="item-input">Quantity</li>
          <li className="subtotal">Subtotal</li>
        </ul>
        <CartItem />
        <ul className="cart-btns">
          <li>
            <Link to={"/"}>
              <Button content={"Return To Shop"} classname={"google"} />
            </Link>
            <Link to={"/"}>
              <Button content={"Update Cart"} classname={"google"} />
            </Link>
          </li>
        </ul>
      </div>
      <ul>
        <li className="cupon">
          <input type="text" placeholder="Coupon Code" />
          <Button content={"Apply Coupon"} classname={"primary"} />
        </li>
        <li className="total">
          <h2>Cart Total</h2>
          <ul>
            <li>
              <p>Subtotal:</p>
              <b>$1750</b>
            </li>
            <li>
              <p>Shipping:</p>
              <b>Free</b>
            </li>
            <li>
              <p>Total:</p>
              <b>$1750</b>
            </li>
          </ul>
          <Button content={"Procees to checkout"} classname={"primary"} />
        </li>
      </ul>
    </section>
  );
};
