import "./header.css";
import useProducts from "../hooks/useProducts";
import { useEffect } from "react";

export default function Categories() {
  const { categoriesList, activeCategory, setActiveCategory, loading } =
    useProducts();

  useEffect(() => {
    if (!loading) setActiveCategory(categoriesList[0]);
  }, [categoriesList]);

  function handleActiveClass(category) {
    setActiveCategory(category);
  }
  return (
    <div className="categories">
      <div className="container">
        {loading ? (
          <p>Loading...</p>
        ) : (
          categoriesList.map((category) => (
            <div
              key={category}
              className={`category ${activeCategory === category ? "active" : ""} `}
              onClick={() => {
                handleActiveClass(category);
              }}
            >
              {category}
            </div>
          ))
        )}
      </div>
    </div>
  );
}
