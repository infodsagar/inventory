import { useState } from 'react';
import { useProductsContext } from '../hooks/useProductsContext';

const ProductForm = () => {
  const { dispatch } = useProductsContext();

  const [title, setTitle] = useState('');
  const [desc, setDesc] = useState('');
  const [qty, setQty] = useState('');
  const [price, setPrice] = useState('');
  const [error, setError] = useState('');
  const [emptyFields, setEmptyFields] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const product = { title, desc, qty, price };

    const response = await fetch('/api/products', {
      method: 'POST',
      body: JSON.stringify(product),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const json = await response.json();

    if (!response.ok) {
      setError(json.error);
      setEmptyFields(json.emptyFields);
    }
    if (response.ok) {
      setTitle('');
      setDesc('');
      setQty('');
      setPrice('');
      setError(null);
      setEmptyFields([]);
      console.log('new product added');
      dispatch({ type: 'CREATE_PRODUCT', payload: json });
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      style={{ display: 'flex', flexDirection: 'column' }}
    >
      <h3>Add new prodcut</h3>
      <label>Product Title:</label>
      <input
        type='text'
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className={emptyFields.includes('title') ? error : ''}
      ></input>
      <label>Product Desc:</label>
      <input
        type='text'
        value={desc}
        onChange={(e) => setDesc(e.target.value)}
      ></input>
      <label>Product Qty:</label>
      <input
        type='text'
        value={qty}
        onChange={(e) => setQty(e.target.value)}
      ></input>
      <label>Product Price($):</label>
      <input
        type='text'
        value={price}
        onChange={(e) => setPrice(e.target.value)}
      ></input>
      <button type='submit'>Add Product</button>
      {error && <div>{error}</div>}
    </form>
  );
};

export default ProductForm;
