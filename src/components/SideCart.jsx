import useCart from "../hooks/useCart";
import "./sideCart.css";
import { Link } from "react-router";
export default function SideCart() {
  const {
    cartItems,
    subTotal,
    countOfItems,
    showCart,
    setShowCart,
    increaseCount,
    decreaseCount,
    removeFromCart,
  } = useCart();

  function closeCart() {
    setShowCart(false);
  }

  const itemsInCart = cartItems
    ? cartItems.map((item) => {
        return (
          <div className="item-box-in-cart" key={item.id}>
            <img
              src={`https://www.appsheet.com/template/gettablefileurl?appName=loqmaEskandrany-279100735&tableName=test&fileName=${item.Image}`}
              alt="iamge"
            />
            <div className="text">
              <h4>
                {item.name} <br />
                {/* {item.type === "sandwich"
                  ? `<span>+ بطاطس + ${selectedAddition}</span>`
                  : ""} */}
              </h4>
              <span className="price-in-cart">{item.price} EGP</span>
              <div className="number-of-item">
                <button
                  className="decrease"
                  onClick={() => decreaseCount(item.id)}
                >
                  -
                </button>
                <span className="quantity">{item.count || 1}</span>
                <button
                  className="increase"
                  onClick={() => increaseCount(item.id)}
                >
                  +
                </button>
              </div>
            </div>
            <div className="trash" onClick={() => removeFromCart(item.id)}>
              <i className="fa-solid fa-trash-can"></i>
            </div>
          </div>
        );
      })
    : "";

  return (
    <div className={`${showCart ? "show " : ""}cart`}>
      <div className="cart-head">
        <div className="cart-items">
          عدد العناصر:{" "}
          <span className="cart-items-counter">{countOfItems}</span>
        </div>
        <i
          className="fa-regular fa-circle-xmark"
          onClick={() => {
            closeCart();
          }}
        ></i>
      </div>
      <div className="items-in-cart">{itemsInCart}</div>
      <div className="cart-feet">
        <div className="cart-feet-one">
          <span>المجموع:</span>{" "}
          <span className="sub-total">{subTotal} EGP</span>
        </div>
        <div className="cart-feet-two">
          <Link to="/Checkout">
            <button
              className="check-out-in-cart"
              onClick={() => {
                closeCart();
              }}
            >
              إتمام الشراء
            </button>
          </Link>
          <button
            className="shop-more"
            onClick={() => {
              closeCart();
            }}
          >
            شراء المزيد
          </button>
        </div>
      </div>
    </div>
  );
}
