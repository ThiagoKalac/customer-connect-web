import * as yup from "yup";

export const loginSchema = yup.object().shape({
	emailOrNickname: yup.string().required("Informa um e-mail cadastrado ou um nickname"),
	password: yup.string().required("senha ou e-mail/nickname invalido")
})