/* eslint-disable no-console */
import { createContext, useState } from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { toast } from 'react-toastify';
import {
  ICartProduct,
  IDefaultProviderProps,
  IProduct,
  IShopContext,
} from './@types';
import { api } from '../services/api';

export const ShopContext = createContext({} as IShopContext);

export const ShopProvider = ({ children }: IDefaultProviderProps) => {
  const [products, setProducts] = useState<IProduct[]>([]);
  const [cartProduct, setCartProduct] = useState<ICartProduct[]>([]);
  const [isModalOpen, setModalOpen] = useState<boolean>(false);

  const loadProducts = async () => {
    const token = localStorage.getItem('@KenziBurger:TOKEN');
    try {
      const res = await api.get('/products', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setProducts(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  const addToCart = (product: ICartProduct) => {
    if (!cartProduct.some((item) => item.id === product.id)) {
      setCartProduct((prevCart) => [...prevCart, { ...product, quantity: 1 }]);
      toast.success('Produto adicionado ao carrinho!');
    } else {
      toast.error('Este produto já está no carrinho!');
    }
  };

  const removeCartItem = (currentId: number) => {
    const newCartList = cartProduct.filter((item) => item.id !== currentId);
    setCartProduct(newCartList);
    toast.warning('Produto removido do carrinho!');
  };

  const removeAllCartItem = () => {
    setCartProduct([]);
    toast.warning('Todos os lanchões foram removidos :(');
  };

  const calculateTotalPrice = (productCart: ICartProduct[]) => {
    let totalPrice = 0;
    productCart.forEach((product) => {
      if (product.quantity) {
        totalPrice += product.price * product.quantity;
      }
    });
    return totalPrice;
  };

  const toggleModal = () => {
    setModalOpen(!isModalOpen);
  };

  return (
    <ShopContext.Provider
      value={{
        addToCart,
        removeCartItem,
        products,
        setProducts,
        cartProduct,
        setCartProduct,
        loadProducts,
        toggleModal,
        isModalOpen,
        removeAllCartItem,
        calculateTotalPrice,
      }}
    >
      {children}
    </ShopContext.Provider>
  );
};
