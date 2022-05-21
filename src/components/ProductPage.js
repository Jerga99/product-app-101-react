import { useEffect, useState } from "react";
import { ProductItem } from "./ProductItem";
import { fetchProducts } from "../utils/fetchProducts";

export function ProductPage() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const _products = await fetchProducts();
      setProducts(_products);
    }

    fetchData();
  }, [])

  return (
    <div className="page">
      <input
        className="input mb-2"
        style={{width: "200px"}}
        type="text"
        placeholder="Filter by title"
      >
      </input>
      <div className="columns is-multiline">
        { products.map((product) => 
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