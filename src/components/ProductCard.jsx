import "./home.css";
import useCart from "../hooks/useCart";
export default function ProductCard({ product }) {
  const { cartItems, setCartItems, setShowCart, increaseCount } = useCart();

  function handleCartItems(item) {
    const isExist = cartItems.find((i) => i.id === item.id);
    if (isExist) {
      increaseCount(item.id);
    } else {
      setCartItems((prev) => [...prev, { ...item, count: 1 }]);
    }
    setShowCart(true);
  }

  return (
    <div className="item-box">
      <div className="item-img">
        {product.Image ? (
          <img
            src={`https://www.appsheet.com/template/gettablefileurl?appName=loqmaEskandrany-279100735&tableName=test&fileName=${product.Image}`}
            alt={product.name}
          />
        ) : (
          ""
        )}
      </div>
      <div className="text">
        <h3>{product.name}</h3>
        <p>{product.description}</p>
        <div className="box-feet">
          <span className="price">{product.price} EGP</span>
          <button
            className="add-item"
            id={product.id}
            onClick={() => {
              handleCartItems(product);
            }}
          >
            <i className="fa-regular fa-square-plus"></i>
          </button>
        </div>
      </div>
    </div>
  );
}
