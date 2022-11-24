import React from 'react';

function ProductItem({ title, price, description, category, image }) {
  return (
    <div className='product-item'>
      <div className='product-image'>
        <img src={image} alt='product-image' width={300} height={300} />
      </div>
      <div className='product-info'>
        <h2>{title}</h2>
        <h3>category: {category}</h3>
        <p>{description}</p>
        <h1 style={{ textAlign: 'end', color: '#ff6a95' }}>${price}</h1>
      </div>
    </div>
  );
}

export default ProductItem;
