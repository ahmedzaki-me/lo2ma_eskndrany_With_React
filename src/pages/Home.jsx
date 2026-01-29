import ProductCard from "../components/ProductCard";
import useProducts from "../hooks/useProducts";
import Categories from "../components/categories";
import SideCart from "../components/SideCart";

export default function Home() {
  const { products, activeCategory, loading } = useProducts();
  if (loading) return <p>Loading...</p>;
  const filteredProducts = activeCategory
    ? products.filter((p) => p.type === activeCategory)
    : products;

  return (
    <>
      <Categories />
      <div className="items">
        <div className="container">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
      <SideCart />
    </>
  );
}
