import React from 'react';
import { useState } from 'react';

function ProductForm({ handleAdd }) {
  const [newProduct, setNewProduct] = useState({
    title: '',
    price: 0,
    description: '',
    category: '',
    image: '',
  });

  function handleTextChange(event) {
    const { name, value } = event.target;
    setNewProduct((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    handleAdd(newProduct);
    setNewProduct({
      title: '',
      price: 0,
      description: '',
      category: '',
      image: '',
    });
  };

  return (
    <form onSubmit={handleSubmit} className='form-flex'>
      <input
        onChange={handleTextChange}
        type='text'
        name='title'
        placeholder='title'
        value={newProduct.title}
      />
      <input
        onChange={handleTextChange}
        type='text'
        name='price'
        placeholder='price'
        value={newProduct.price}
      />
      <input
        onChange={handleTextChange}
        type='text'
        name='description'
        placeholder='description'
        value={newProduct.description}
      />
      <input
        onChange={handleTextChange}
        type='text'
        name='category'
        placeholder='category'
        value={newProduct.category}
      />
      <input
        onChange={handleTextChange}
        type='text'
        name='image'
        placeholder='image'
        value={newProduct.image}
      />
      <button type='submit'>ADD PRODUCT</button>
    </form>
  );
}

export default ProductForm;
