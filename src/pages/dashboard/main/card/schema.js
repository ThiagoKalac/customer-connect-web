import * as yup from 'yup';

const updateSchema = yup.object().shape({
   nickname: yup.string().notRequired(),
   fullName: yup.string().notRequired(),
   telephone: yup
      .string()
      .matches(/^\(?[0-9]{2}\)?[\s-]?9?[\s-]?[0-9]{4}[\s-]?[0-9]{4}$/, "Insira um numero de telefone valido")
      .notRequired(),
   telephonesExtra: yup
      .array()
      .of(yup.string().matches(/^\(?[0-9]{2}\)?[\s-]?9?[\s-]?[0-9]{4}[\s-]?[0-9]{4}$/, "Insira um numero de telefone valido"))
      .notRequired(),
   email: yup.string().email("Insira um email valido").notRequired(),
   emailsExtra: yup.array().of(yup.string().email("Insira um email valido")).notRequired(),     
});

const createdContactSchema = yup.object().shape({
   nickname: yup.string().required("Nome de usuario é obrigatório"),
   fullName: yup.string().required("Nome completo é obrigatório"),
   telephone: yup
      .string()
      .required()
      .matches(/^\(?[0-9]{2}\)?[\s-]?9?[\s-]?[0-9]{4}[\s-]?[0-9]{4}$/,"Insira um numero de telefone valido"),
   telephonesExtra: yup
      .array()
      .of(yup.string().matches(/^\(?[0-9]{2}\)?[\s-]?9?[\s-]?[0-9]{4}[\s-]?[0-9]{4}$/, "Insira um numero de telefone valido"))
      .nullable()
      .notRequired(),
   email: yup.string().email("Insira um email valido").required("Email é obrigatório"),
   emailsExtra: yup.array().of(yup.string().email("Insira um email valido")).nullable().notRequired(),
})


export { updateSchema, createdContactSchema };