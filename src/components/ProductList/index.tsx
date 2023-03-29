import { useContext, useEffect } from 'react';
import ProductCard from './ProductCard';
import { StyledProductList } from './style';
import { ShopContext } from '../../providers/ShopContext';

const ProductList = () => {
  const { products, loadProducts } = useContext(ShopContext);

  useEffect(() => {
    loadProducts();
  }, []);

  return (
    <StyledProductList>
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </StyledProductList>
  );
};

export default ProductList;
