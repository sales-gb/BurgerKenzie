/* eslint-disable no-console */
import { MdClose } from 'react-icons/md';
import { useContext } from 'react';
import CartProductList from './CartProductList';

import { StyledCartModalBox } from './style';
import { StyledParagraph, StyledTitle } from '../../styles/typography';
import { ShopContext } from '../../providers/ShopContext';

const CartModal = () => {
  const { isModalOpen, toggleModal, cartProduct } = useContext(ShopContext);

  if (!isModalOpen) {
    return null;
  }

  return (
    <StyledCartModalBox>
      <dialog open={isModalOpen}>
        <header>
          <StyledTitle tag='h2' $fontSize='three'>
            Carrinho de compras
          </StyledTitle>
          <button type='button' aria-label='Fechar' onClick={toggleModal}>
            <MdClose size={21} />
          </button>
        </header>
        <div className='cartBox'>
          {cartProduct && cartProduct.length > 0 ? (
            <CartProductList />
          ) : (
            <div className='emptyBox'>
              <StyledTitle tag='h3' $fontSize='three' textAlign='center'>
                Sua sacola está vazia
              </StyledTitle>
              <StyledParagraph textAlign='center'>
                Adicione itens
              </StyledParagraph>
            </div>
          )}
        </div>
      </dialog>
    </StyledCartModalBox>
  );
};

export default CartModal;
