import * as yup from 'yup';

export const RegisterFormSchema = yup.object({
  name: yup.string().required('Inserir um nome é obrigatório!'),
  email: yup
    .string()
    .required('Inserir um e-mail obrigatório!')
    .email('O e-mail digitado é invalido'),

  password: yup
    .string()
    .required('Senha obrigatória!')
    .matches(/(\d)/, 'Deve conter pelo menos um número')
    .matches(/[a-z]/, 'Deve conter pelo menos uma letra minuscula')
    .matches(/[A-Z]/, 'Deve conter pelo menos uma letra maiúscula')
    .matches(/.{6,}/, 'Deve conter pelo menos 6 caracteres'),
});
