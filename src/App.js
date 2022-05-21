

import { ProductPage } from "./components/ProductPage";
import { ProductItem } from "./components/ProductItem";
import { useEffect, useState } from "react";
import { fetchProducts } from "./utils/fetchProducts";
import Navbar from "./components/Navbar";

export default function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const _products = await fetchProducts();
      setProducts(_products);
    }

    fetchData();
  }, [])

  
  // JSX!
  return (
    <>
      <Navbar />
      <ProductPage>
        { products.map((product) => 
          <ProductItem 
            key={product.image} 
            product={product}
          />
        )}
      </ProductPage>
    </>
  )
}