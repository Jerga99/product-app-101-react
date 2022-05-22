import { useEffect, useState } from "react";
import { ProductItem } from "./ProductItem";
import { fetchProducts } from "../utils/fetchProducts";

export function ProductPage() {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      const _products = await fetchProducts();
      setProducts(_products);
    }

    fetchData();
  }, [])

  const handleSearch = (event) => {
    const {value} = event.target;
    setSearch(value);
  }

  const filterProducts = (product) => {
    const productName = product.name.toLowerCase();
    return productName.includes(search.toLowerCase());
  }

  return (
    <div className="page">
      <input
        onChange={handleSearch}
        className="input mb-2"
        style={{width: "200px"}}
        type="text"
        placeholder="Filter by title"
      >
      </input>
      <div className="columns is-multiline">
        { products
          .filter(filterProducts)
          .map((product) => 
          <div 
            className="column is-4"
            key={product.image} 
          >
            <ProductItem 
              product={product}
            />
          </div>
        )}
      </div>
    </div>
  )
}