import * as yup from "yup";

const registerSchema = yup.object().shape({
	nickname: yup.string().required("Informe um nickname"),
	fullName: yup.string().required("Informe seu nome completo"),
	telephone: yup
	  .string()
	  .required("Telefone é obrigatório")
	  .matches(/^\(?[0-9]{2}\)?[\s-]?9?[\s-]?[0-9]{4}[\s-]?[0-9]{4}$/,"Telefone invalido"),
	email: yup.string().required("E-mail obrigatório").email("Informe um E-mail valido"),
	password: yup.string()
		.matches(/[A-Z]/, "Deve conter ao menos 1 letra maiúscula")
		.matches(/[a-z]/, "Deve conter ao menos 1 letra minuscula")
		.matches(/(\d)/, "Deve conter ao menos um número")
		.matches(/(\W)|_/, "Deve conter um caracter especial")
		.matches(/.{6,}/, "Deve ter no minimo 6 digitos")
		.required("Senha é obrigatória"),
	confirmPassword: yup.string().oneOf([yup.ref("password")], "Confirmação de senha deve ser igual a senha"),
});

export {registerSchema}