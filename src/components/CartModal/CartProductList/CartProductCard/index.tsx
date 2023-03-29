import { MdDelete } from 'react-icons/md';

import { useContext } from 'react';
import { StyledCartProductCard } from './style';
import { StyledTitle } from '../../../../styles/typography';
import { ICartProduct } from '../../../../providers/@types';
import { ShopContext } from '../../../../providers/ShopContext';

interface IProductCartProps {
  product: ICartProduct;
}

const CartProductCard = ({ product }: IProductCartProps) => {
  const { removeCartItem } = useContext(ShopContext);

  return (
    <StyledCartProductCard>
      <div className='imageBox'>
        <img src={product.img} alt={product.name} />
      </div>
      <div className='contentBox'>
        <StyledTitle tag='h3' $fontSize='three'>
          {product.name}
        </StyledTitle>
        <button
          type='button'
          aria-label='Remover'
          onClick={() => removeCartItem(product.id)}
        >
          <MdDelete size={24} />
        </button>
      </div>
    </StyledCartProductCard>
  );
};

export default CartProductCard;
