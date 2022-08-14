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
      className='flex flex-col items-center	 border-2 border-black min-w-[30vw] max-w-[500px]'
    >
      <h3 className='py-2 font-bold text-xl'>Add new prodcut</h3>
      <label className='self-start pl-2'>Product Title:</label>
      <input
        type='text'
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className='border-2 border-black min-w-[96%]'
      ></input>
      <label className='self-start pl-2'>Product Desc:</label>
      <input
        type='text'
        value={desc}
        onChange={(e) => setDesc(e.target.value)}
        className='border-2 border-black min-w-[96%]'
      ></input>
      <label className='self-start pl-2'>Product Qty:</label>
      <input
        type='text'
        value={qty}
        onChange={(e) => setQty(e.target.value)}
        className='border-2 border-black min-w-[96%]'
      ></input>
      <label className='self-start pl-2'>Product Price($):</label>
      <input
        type='text'
        value={price}
        onChange={(e) => setPrice(e.target.value)}
        className='border-2 border-black min-w-[96%]'
      ></input>
      <button
        type='submit'
        className='border-2 border-black rounded-xl my-2 min-w-[70%]'
      >
        Add Product
      </button>
      {error && <div>{error}</div>}
    </form>
  );
};

export default ProductForm;
