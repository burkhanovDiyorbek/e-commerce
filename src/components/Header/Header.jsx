import { Link, NavLink, useLocation } from "react-router-dom";
import "./header.css";
import { useState } from "react";

const navTabs = [
  { id: 0, title: "Home", to: "/" },
  { id: 1, title: "Contact", to: "contact" },
  { id: 2, title: "About", to: "about" },
  { id: 3, title: "Sign Up", to: "auth/sign-up" },
];

const userModal = [
  {
    id: 0,
    title: "Manage My Account",
    to: "/",
    img: ".././images/icons/user.svg",
  },
  {
    id: 1,
    title: "My Order",
    to: "contact",
    img: ".././images/icons/mallbag.svg",
  },
  {
    id: 2,
    title: "My Cancellations",
    to: "about",
    img: ".././images/icons/cancel.svg",
  },
  {
    id: 3,
    title: "My Reviews",
    to: "auth/sign-up",
    img: ".././images/icons/review.svg",
  },
  {
    id: 4,
    title: "Logout",
    to: "auth/login",
    img: ".././images/icons/logout.svg",
  },
];

export const Header = () => {
  const [showModal, setShowModal] = useState(false);
  const { pathname } = useLocation();
  return (
    <header className="header">
      <div className="header-top">
        <p>
          Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!
        </p>
      </div>
      <div className="container header-container">
        <Link to={"/"} className="logo">
          Exclusive
        </Link>
        <ul>
          {navTabs.map((item) => {
            const { id, title, to } = item;
            return (
              <li key={id}>
                <NavLink to={to}>{title}</NavLink>
              </li>
            );
          })}
        </ul>
        <label className="search-inp">
          <input type="text" placeholder="What are you looking for?" />
          <img src=".././images/icons/search.svg" alt="search" />
        </label>
        {!pathname.startsWith("/auth/") && (
          <div className="nav-tab_icons">
            <Link to={"home/wishlist"} className="heart">
              <img src=".././images/icons/heart.svg" alt="heart" />
            </Link>
            <Link to={"home/cart"} className="cart">
              <img src=".././images/icons/cart.svg" alt="cart" />
            </Link>
            {localStorage.getItem("token")?.length && (
              <div className="user" onClick={() => setShowModal(!showModal)}>
                <div className="user-icon">
                  <img src=".././images/icons/user.svg" alt="user" />
                </div>
                {showModal && (
                  <ul className="user-modal">
                    {userModal.map((item) => {
                      const { id, title, to, img } = item;
                      return (
                        <li key={id}>
                          <Link to={to}>
                            <img src={img} alt="" />
                            <p>{title}</p>
                          </Link>
                        </li>
                      );
                    })}
                  </ul>
                )}
              </div>
            )}
          </div>
        )}
      </div>
    </header>
  );
};
