export interface IDefaultProviderProps {
  children: React.ReactNode;
}

export interface IUser {
  id: string;
  name: string;
  email: string;
}

export interface IRegisterFormValue {
  email: string;
  password: string;
  name: string;
}

export interface ILoginFormValue {
  email: string;
  password: string;
}

export interface IUserContext {
  userRegister: (formData: IRegisterFormValue) => Promise<void>;
  userLogin: (formData: ILoginFormValue) => Promise<void>;
  userLogout: () => void;
  user: IUser | null;
}

export interface IProduct {
  id: number;
  name: string;
  category: string;
  price: number;
  img: string;
}

export interface ICartProduct {
  price: number;
  id: number;
  name: string;
  img: string;
  quantity?: number;
}

export interface IShopContext {
  addToCart: (product: ICartProduct) => void;
  removeCartItem: (currentId: number) => void;
  products: IProduct[];
  setProducts: React.Dispatch<React.SetStateAction<IProduct[]>>;
  cartProduct: ICartProduct[];
  setCartProduct: React.Dispatch<React.SetStateAction<ICartProduct[]>>;
  loadProducts: () => Promise<void>;
  toggleModal: () => void;
  isModalOpen: boolean;
  removeAllCartItem: () => void;
  calculateTotalPrice: (cartProduct: ICartProduct[]) => number;
}
