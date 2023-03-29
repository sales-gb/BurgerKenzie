/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-console */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { createContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
// eslint-disable-next-line import/no-extraneous-dependencies
import { toast } from 'react-toastify';
import {
  IUserContext,
  IDefaultProviderProps,
  IUser,
  IRegisterFormValue,
  ILoginFormValue,
} from './@types';
import { api } from '../services/api';

export const UserContext = createContext({} as IUserContext);

export const UserProvider = ({ children }: IDefaultProviderProps) => {
  const [user, setUser] = useState<IUser | null>(null);
  const navigate = useNavigate();

  const userLoad = async () => {
    const token = localStorage.getItem('@KenziBurger:TOKEN');
    if (token) {
      try {
        const res = await api.get('/products', {
          headers: { Authorization: `Bearer ${token}` },
        });
        setUser(res.data);

        return navigate('/shop');
      } catch (error) {
        console.log(error);
        localStorage.removeItem('@KenziBurger:TOKEN');
        return navigate('/');
      }
    }
    return navigate('/');
  };

  useEffect(() => {
    userLoad();
  }, []);

  const userRegister = async (formData: IRegisterFormValue) => {
    try {
      const res = await api.post('/users', formData);
      navigate('/');
      toast.success('conta criada com sucesso');
    } catch (error: any) {
      console.log(error);
      toast.error(error.response.data);
    }
  };

  const userLogin = async (formData: ILoginFormValue) => {
    try {
      const res = await api.post('/login', formData);
      localStorage.setItem('@KenziBurger:TOKEN', res.data.accessToken);
      setUser(res.data.user);
      navigate('/shop');
      toast.success('Login bem sucedido!');
    } catch (error: any) {
      console.log(error);
      toast.error(error.response.data);
    }
  };

  const userLogout = () => {
    setUser(null);
    localStorage.removeItem('@KenziBurger:TOKEN');
    navigate('/');
  };

  return (
    <UserContext.Provider value={{ userRegister, userLogin, userLogout, user }}>
      {children}
    </UserContext.Provider>
  );
};
