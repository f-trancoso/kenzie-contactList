import * as yup from "yup";

export const CreateUserSchema: any = yup.object().shape({
  name: yup.string().required("Nome é obrigatório"),
  email: yup.string().required("Email é obrigatório"),
  phone: yup.string().required("Telefone é obrigatório").min(11, 'deve conter exatamente onze digitos').max(11, 'deve conter exatamente onze digitos'),
  password: yup
    .string()
    .required("Senha obrigatória")
    .matches(/[a-z]/, "Deve conter ao menos 1 letra minúscula ")
    .matches(/(\d)/, "Deve conter ao menos 1 número")
    .matches(/(\W)|_/, "Deve conter ao menos 1 caracater especial")
    .matches(/.{8,}/, "Deve conter no minimo 8 caracteres"),
  confirmPassword: yup
    .string()
    .required("Por favor confirme sua senha")
    .oneOf([yup.ref("password")], "Senha não confere"),
});

export const userLoginSchema = yup.object({
  email: yup.string().email('Deve ser um email válido').required('Por favor insira seu email'),
  password: yup.string().required('Por favor insira sua senha')
})

export const CreateContactSchema = yup.object().shape({
  name: yup.string().required("Nome é obrigatório"),
  email: yup.string().required("Email é obrigatório"),
  phone: yup.string().required("Telefone é obrigatório").min(11, 'deve conter exatamente onze digitos').max(11, 'deve conter exatamente onze digitos')
})