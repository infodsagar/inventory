import { useProductsContext } from '../hooks/useProductsContext';
import formatDistanceToNow from 'date-fns/formatDistanceToNow';
import { useAuthContext } from '../hooks/useAuthContext';

const ProductDetails = ({ product }) => {
  const { dispatch } = useProductsContext();
  const { user } = useAuthContext();

  const handleClick = async () => {
    if (!user) {
      return;
    }

    const response = await fetch('/api/products/' + product._id, {
      method: 'DELETE',
      headers: { Authorization: `Bearer ${user.token}` },
    });

    const json = await response.json();

    if (response.ok) {
      dispatch({ type: 'DELETE_PRODUCT', payload: json });
    }
  };

  return (
    <div className='border-2 border-blue-100 flex flex-col m-2'>
      <h4 className='py-2 font-bold text-2xl'>{product.title}</h4>
      <p>{product.desc}</p>
      <p className='py-2 '>
        <span className='font-bold'>Qty:</span> {product.qty}
      </p>
      <p>
        <span className='font-bold'>Price: $</span>
        {product.price}
      </p>
      <p>
        {formatDistanceToNow(new Date(product.createdAt), { addSuffix: true })}
      </p>

      <button
        onClick={handleClick}
        className='border-2 border-black rounded-xl my-2'
      >
        Delete
      </button>
    </div>
  );
};

export default ProductDetails;
