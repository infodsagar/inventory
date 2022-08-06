import { useProductsContext } from '../hooks/useProductsContext';
import formatDistanceToNow from 'date-fns/formatDistanceToNow';

const ProductDetails = ({ product }) => {
  const { dispatch } = useProductsContext();

  const handleClick = async () => {
    const response = await fetch('/api/products/' + product._id, {
      method: 'DELETE',
    });
    const json = await response.json();

    if (response.ok) {
      dispatch({ type: 'DELETE_PRODUCT', payload: json });
    }
  };

  return (
    <div>
      <h4>{product.title}</h4>
      <p>{product.desc}</p>
      <p>Qty: {product.qty}</p>
      <p>Price: ${product.price}</p>
      <p>
        {formatDistanceToNow(new Date(product.createdAt), { addSuffix: true })}
      </p>
      <button onClick={handleClick}>Delete</button>
    </div>
  );
};

export default ProductDetails;
