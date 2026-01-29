import { useEffect, useState } from "react";
import { ProductsContext } from "./ProductsContext";
import { getProducts } from "../services/api";

export function ProductsProvider({ children }) {
  const [products, setProducts] = useState([]);
  const [categoriesList, setCategoriesList] = useState([]);
  const [activeCategory, setActiveCategory] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getProducts().then((data) => {
      setProducts(data);

      const categories = [...new Set(data.map((item) => item.type))];
      setCategoriesList(categories);

      setLoading(false);
    });
  }, []);

  return (
    <ProductsContext.Provider
      value={{
        products,
        categoriesList,
        activeCategory,
        setActiveCategory,
        loading,
      }}
    >
      {children}
    </ProductsContext.Provider>
  );
}
