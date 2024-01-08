import React, { useEffect, useState } from "react";
import ProductsTable from "../../components/products-table";
import axios from "axios";
function ProductsPage() {
  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState([]);
  const BASE_URL = "https://northwind.vercel.app/api";
  const getData = async () => {
    try {
      setLoading(true);
      const response = await axios(`${BASE_URL}/products`);
      console.log(response.data);
      setProducts(response.data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      <h1>Products Table</h1>
          {loading ? (
            <h1>LOADING...</h1>
          ) : (
            <ProductsTable products={products} />
          )}
      
    </div>
  );
}

export default ProductsPage;
