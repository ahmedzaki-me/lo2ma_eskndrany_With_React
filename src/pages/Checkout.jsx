import "../components/checkout.css";
import useCart from "../hooks/useCart";
import Form from "../components/CheckoutForm";
export default function Checkout() {
  const {
    cartItems,
    subTotal,
    increaseCount,
    decreaseCount,
    removeFromCart,
  } = useCart();

  const itemsInCart = cartItems
    ? cartItems.map((item) => {
        return (
          <div className="item" key={item.id}>
            <img
              src={`https://www.appsheet.com/template/gettablefileurl?appName=loqmaEskandrany-279100735&tableName=test&fileName=${item.Image}`}
              alt="iamge"
            />
            <div className="text">
              <h4>
                {item.name} <br />
              </h4>
              <div className="quantity">
                <span>العدد: </span>
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
              <span className="price">{item.price} EGP</span>
            </div>
            <div className="trash" onClick={() => removeFromCart(item.id)}>
              <i className="fa-solid fa-trash-can"></i>
            </div>
          </div>
        );
      })
    : "";

  return (
    <div className="order">
      <div className="container">
        <div className="items-in-cart-page">
          <h3>إتمام الطلب</h3>
          <div className="items">{itemsInCart}</div>
          <div className="feet">
            <span>الإجمالي: </span>{" "}
            <span className="total">{subTotal} EGP</span>
          </div>
        </div>
        <div className="contact-info">
          <Form />
        </div>
      </div>
    </div>
  );
}
