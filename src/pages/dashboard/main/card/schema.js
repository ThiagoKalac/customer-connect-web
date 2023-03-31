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

export { updateSchema };