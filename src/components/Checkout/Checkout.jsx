import { Link } from "react-router-dom";

export const Checkout = () => {
  return (
    <section className="outlet container checkout">
      <p className="pathname">
        <Link>Home </Link>
        <b> / CheckOut</b>
      </p>
      <div className="checkout-container">
        <form>
          <h2>Billing Details</h2>
          <label>
            <p>
              First Name <span>*</span>
            </p>
            <input type="text" />
          </label>
          <label>
            <p>Company Name</p>
            <input type="text" />
          </label>
          <label>
            <p>
              Street Address <span>*</span>
            </p>
            <input type="text" />
          </label>
          <label>
            <p>Apartment, floor, etc. (optional)</p>
            <input type="text" />
          </label>
          <label>
            <p>
              Town/City <span>*</span>
            </p>
            <input type="text" />
          </label>
          <label>
            <p>
              Phone Number <span>*</span>
            </p>
            <input type="number" />
          </label>
          <label>
            <p>
              Email Address <span>*</span>
            </p>
            <input type="email" />
          </label>
          <label className="checkbox">
            <input type="checkbox" />
            <b>Save this information for faster check-out next time</b>
          </label>
        </form>
        <div className="shopping-list">
          <ul>
            <li>
              <div>
                <img src=".././images/qrcode.png" alt="img" />
                <p>LCD Monitor</p>
              </div>
              <p>$650</p>
            </li>
            <li className="total">
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
              {/* <Button content={"Procees to checkout"} classname={"primary"} /> */}
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};
