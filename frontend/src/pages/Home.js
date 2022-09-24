import { useEffect } from 'react';
import ProductDetails from '../component/ProductDetails';
import ProductForm from '../component/ProductForm';
import { useProductsContext } from '../hooks/useProductsContext';
import { useAuthContext } from '../hooks/useAuthContext';

const Home = () => {
  const { products, dispatch } = useProductsContext();
  const { user } = useAuthContext();

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch('api/products', {
        method: 'GET',
        headers: { Authorization: `Bearer ${user.token}` },
      });

      const json = await response.json();

      if (response.ok) {
        dispatch({ type: 'SET_PRODUCTS', payload: json });
      }
    };
    if (user) {
      fetchProducts();
    }
  }, [dispatch, user]);

  return (
    <div className='m-2 flex'>
      <div className='grid grid-cols-3'>
        {products &&
          products.map((product) => {
            return <ProductDetails key={product._id} product={product} />;
          })}
      </div>
      <div className='ml-auto mr-4'>
        <ProductForm />
      </div>
    </div>
  );
};

export default Home;
