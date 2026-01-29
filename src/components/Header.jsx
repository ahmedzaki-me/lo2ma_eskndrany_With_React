import "./header.css";
import Logo from "../assets/imgs/logo.png";
import { useState } from "react";
import { Link } from "react-router";
import useCart from "../hooks/useCart";

export default function Header() {
  const [showNav, setShowNav] = useState(false);
  const { showCart, setShowCart, countOfItems } = useCart();

  function handleShowCart() {
    setShowCart(!showCart);
  }
  function handleShowNav() {
    setShowNav(!showNav);
  }
  return (
    <header>
      <div className="container">
        <Link to="/" className="logo">
          <img src={Logo} alt="لقمة إسكندراني" />
        </Link>
        <p>لقمة إسكندراني</p>
        <div className="icons">
          <i
            onClick={() => {
              handleShowCart();
            }}
            className="fa-solid fa-cart-shopping cart-icon"
          >
            <span>{countOfItems}</span>
          </i>
          <i
            className="fa-solid fa-bars nav-icon"
            onClick={() => {
              handleShowNav();
            }}
          ></i>
        </div>

        {showNav ? (
          <nav className="hidden">
            <ul className="header-links">
              <li>
                <Link
                  to={"/"}
                  onClick={() => {
                    handleShowNav();
                  }}
                >
                  الصفحة الرئيسية.
                </Link>
              </li>
              <li>
                <Link
                  to={"/checkout"}
                  onClick={() => {
                    handleShowNav();
                  }}
                >
                  السلة.
                </Link>
              </li>
              <li>
                <a
                  href="https://maps.app.goo.gl/wcHvHkhausgpLsYE9"
                  target="_blank"
                >
                  موقعنا.
                </a>
              </li>
              <li>
                <a href="#footer">اتصل بنا.</a>
              </li>
            </ul>
          </nav>
        ) : (
          ""
        )}
      </div>
    </header>
  );
}
