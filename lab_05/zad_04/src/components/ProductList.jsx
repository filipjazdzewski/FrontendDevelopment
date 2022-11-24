import React from 'react';
import ProductItem from './ProductItem';

function ProductList({ products }) {
  if (!products || products.length === 0) {
    return <p>No Products Yet</p>;
  }

  return (
    <div>
      {products.map((item) => (
        <ProductItem
          key={item.id}
          title={item.title}
          price={item.price}
          description={item.description}
          category={item.category}
          image={item.image}
        />
      ))}
    </div>
  );
}

export default ProductList;
