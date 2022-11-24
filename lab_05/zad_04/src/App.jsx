import { useState, useEffect } from 'react';
import ProductForm from './components/ProductForm';
import ProductList from './components/ProductList';

function App() {
  const [products, setProducts] = useState([]);

  // Fetch products from fakestoreapi
  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    const response = await fetch('https://fakestoreapi.com/products');
    const data = await response.json();
    setProducts(data);
  };

  const addProduct = (product) => {
    fetch('https://fakestoreapi.com/products', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(product),
    })
      .then((res) => {
        if (res.status === 200) {
          console.log(res.status);
          res.json().then((data) => {
            data.id = products.length + 1;
            setProducts([data, ...products]);
          });
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className='container'>
      <ProductForm handleAdd={addProduct} />
      <ProductList products={products} />
    </div>
  );
}

export default App;
