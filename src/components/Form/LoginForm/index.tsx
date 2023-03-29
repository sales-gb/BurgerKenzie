/* eslint-disable @typescript-eslint/no-unused-vars */
import { useContext } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { LoginFormSchema } from './LoginFormSchema';
import { ILoginFormValue } from '../../../providers/@types';
import { UserContext } from '../../../providers/UserContext';
import { StyledButton } from '../../../styles/button';
import { StyledForm } from '../../../styles/form';
import Input from '../Input';

const LoginForm = () => {
  const { userLogin } = useContext(UserContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ILoginFormValue>({
    resolver: yupResolver(LoginFormSchema),
  });

  const submit: SubmitHandler<ILoginFormValue> = (formData) => {
    userLogin(formData);
    reset();
  };

  return (
    <StyledForm onSubmit={handleSubmit(submit)}>
      <Input
        label='Email'
        register={register('email')}
        type='email'
        error={errors.email}
      />

      <Input
        label='Senha'
        register={register('password')}
        type='password'
        error={errors.password}
      />
      <StyledButton type='submit' $buttonSize='default' $buttonStyle='green'>
        Entrar
      </StyledButton>
    </StyledForm>
  );
};

export default LoginForm;
