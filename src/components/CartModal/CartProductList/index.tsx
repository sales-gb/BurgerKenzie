import { useContext } from 'react';
import CartProductCard from './CartProductCard';

import { StyledCartProductList } from './style';
import { StyledButton } from '../../../styles/button';
import { StyledParagraph } from '../../../styles/typography';
import { ShopContext } from '../../../providers/ShopContext';

const CartProductList = () => {
  const { cartProduct, removeAllCartItem, calculateTotalPrice } =
    useContext(ShopContext);

  const totalPrice = calculateTotalPrice(cartProduct);

  return (
    <StyledCartProductList>
      <ul>
        {cartProduct.map((product) => (
          <CartProductCard key={product.id} product={product} />
        ))}
      </ul>

      <div className='totalBox'>
        <StyledParagraph>
          <strong>Total</strong>
        </StyledParagraph>
        <StyledParagraph className='total'>
          R$ {totalPrice.toFixed(2)}
        </StyledParagraph>
      </div>
      <StyledButton
        $buttonSize='default'
        $buttonStyle='gray'
        onClick={removeAllCartItem}
      >
        Remover todos
      </StyledButton>
    </StyledCartProductList>
  );
};

export default CartProductList;
