import { SubmitHandler, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import { useContext } from 'react';
import { RegisterFormSchema } from './RegisterFormSchema';
import Input from '../Input';
import { StyledButton } from '../../../styles/button';
import { StyledForm } from '../../../styles/form';
import { IRegisterFormValue } from '../../../providers/@types';
import { UserContext } from '../../../providers/UserContext';

const RegisterForm = () => {
  const { userRegister } = useContext(UserContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<IRegisterFormValue>({
    resolver: yupResolver(RegisterFormSchema),
  });

  const submit: SubmitHandler<IRegisterFormValue> = (formData) => {
    userRegister(formData);
    reset();
  };

  return (
    <StyledForm onSubmit={handleSubmit(submit)}>
      <Input
        label='Nome'
        type='text'
        register={register('name')}
        error={errors.name}
      />

      <Input
        label='Email'
        type='email'
        register={register('email')}
        error={errors.email}
      />

      <Input
        label='Senha'
        type='password'
        register={register('password')}
        error={errors.password}
      />

      <StyledButton type='submit' $buttonSize='default' $buttonStyle='gray'>
        Cadastrar
      </StyledButton>
    </StyledForm>
  );
};

export default RegisterForm;
