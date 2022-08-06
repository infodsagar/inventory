import { useEffect } from 'react';
import ProductDetails from '../component/ProductDetails';
import ProductForm from '../component/ProductForm';
import { useProductsContext } from '../hooks/useProductsContext';

const Home = () => {
  const { products, dispatch } = useProductsContext();

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch('api/products');
      const json = await response.json();

      if (response.ok) {
        dispatch({ type: 'SET_PRODUCTS', payload: json });
      }
    };
    fetchProducts();
  }, [dispatch]);

  return (
    <div>
      <div>
        {products &&
          products.map((product) => {
            return <ProductDetails key={product._id} product={product} />;
          })}
      </div>
      <div>
        <ProductForm />
      </div>
    </div>
  );
};

export default Home;
