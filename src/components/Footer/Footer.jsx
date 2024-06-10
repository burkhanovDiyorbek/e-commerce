import { Link } from "react-router-dom";
import "./footer.css";

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container container">
        <ul>
          <h2 className="logo">Exclusive</h2>
          <li>Subscribe</li>
          <li>Get 10% off your first order</li>
          <label>
            <input type="email" placeholder="Enter your email" />
            <img src=".././images/icons/send.svg" alt="send" />
          </label>
        </ul>
        <ul>
          <h2>Support</h2>
          <li>111 Bijoy sarani, Dhaka, DH 1515, Bangladesh.</li>
          <li>exclusive@gmail.com</li>
          <li>+88015-88888-9999</li>
        </ul>
        <ul>
          <h2>Account</h2>
          <li>
            <Link to={"account"}>My Account</Link>
          </li>
          <li>
            <Link to={"auth/login"}>Login / Register</Link>
          </li>
          <li>
            <Link to={"cart"}>Cart</Link>
          </li>
          <li>
            <Link to={"wishlist"}>Wishlist</Link>
          </li>
          <li>
            <Link to={"shop"}>Shop</Link>
          </li>
        </ul>
        <ul className="quic-links">
          <h2>Quick Link</h2>
          <li>Privacy Policy</li>
          <li>Terms Of Use</li>
          <li>FAQ</li>
          <li>Contact</li>
        </ul>
        <ul className="download">
          <h2>Download App</h2>
          <li>
            <span>Save $3 with App New User Only</span>
            <div id="download-div">
              <img
                src=".././images/qrcode.png"
                alt="qrcode"
                className="qrcode"
              />
              <div>
                <img
                  src=".././images/appstore.png"
                  alt="appstore"
                  className="appstore"
                />
                <img
                  src=".././images/googleplay.png"
                  alt="googleplay"
                  className="googleplay"
                />
              </div>
            </div>
          </li>
          <li className="socials">
            <img src=".././images/icons/facebook.svg" alt="facebook" />
            <img src=".././images/icons/twitter.svg" alt="twitter" />
            <img src=".././images/icons/instagram.svg" alt="instagram" />
            <img src=".././images/icons/linkedin.svg" alt="linkedin" />
          </li>
        </ul>
      </div>
      <p>
        © Copyright <Link to={"https://t.me/burkhanov_folio"}>#bUrkHaNov</Link>{" "}
        {new Date().getFullYear()}. All right reserved
      </p>
    </footer>
  );
};
