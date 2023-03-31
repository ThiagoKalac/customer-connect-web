import { useContext, useState } from "react";
import { Input } from "../../../../styles/Input";
import { CardBackground, CardForm } from "./cardStyle";
import { FaTrash as Trash } from "react-icons/fa";
import { updateSchema } from "./schema";
import * as yup from "yup";
import { ClientContext } from "../../../../context/clientContext";
import { ContactContext } from "../../../../context/contactContext";

const Card = ({section,id,nickname,fullName, email,telephone, telephonesExtra,emailsExtra}) => {
  	const [values, setValues] = useState({
    	nickname,
		fullName,
		email,
		telephone,
		telephonesExtra,
		emailsExtra,
	});
	
  	const [validationErrors, setValidationErrors] = useState({});
  	const { clientUpdate, clientDelete } = useContext(ClientContext);
	const { updateContact, deleteContact } = useContext(ContactContext);
	
	const handleSubmit = async (data, section) => {
		try {
			const validate = await updateSchema.validate(data, {
			abortEarly: false,
			});
			const token = localStorage.getItem("@CustomerConnectToken");

			if (section === "Meu Perfil") {
				clientUpdate(token, validate);
			} else if (section === "Meus Contatos") {
				updateContact(validate, token, id)
			}
		} catch (error) {
			if (error instanceof yup.ValidationError) {
			const ErrorsMessage = {};
			error.inner.forEach((err) => {
				if (err.path === "nickname") {
					ErrorsMessage.nickname = err.message;
				} else if (err.path === "fullName") {
					ErrorsMessage.fullName = err.message;
				} else if (err.path === "email") {
					ErrorsMessage.email = err.message;
				} else if (err.path === "telephone") {
					ErrorsMessage.telephone = err.message;
				} else if (err.path.startsWith("telephonesExtra")) {
					const index = err.path.indexOf("[") + 1;
					const indexTelephone = err.path.slice(index, index + 1);
					ErrorsMessage.telephonesExtra = ErrorsMessage.telephonesExtra || {};
					ErrorsMessage.telephonesExtra[indexTelephone] = err.message;
				} else if (err.path.startsWith("emailsExtra")) {
					const index = err.path.indexOf("[") + 1;
					const indexEmail = err.path.slice(index, index + 1);
					ErrorsMessage.emailsExtra = ErrorsMessage.emailsExtra || {};
					ErrorsMessage.emailsExtra[indexEmail] = err.message;
				}
			});
			setValidationErrors(ErrorsMessage);
			}
		}
	};

	const handleDelete = () => {
		const token = localStorage.getItem("@CustomerConnectToken");
		section === "Meu Perfil"? clientDelete(token) : deleteContact(token,id)
	};

  	return (
		<CardBackground section={section}>
			<h2>{section}</h2>
			<CardForm onSubmit={(e) => e.preventDefault()} section={section}>
			<label>Nome de usuario:</label>
			<Input
				value={values.nickname}
				onChange={(e) => setValues({ ...values, nickname: e.target.value })}
			/>
			<span>{validationErrors?.nickname}</span>

			<label>Nome Completo</label>
			<Input
				value={values.fullName}
				onChange={(e) => setValues({ ...values, fullName: e.target.value })}
			/>
			<span>{validationErrors?.fullName}</span>

			<label>Email:</label>
			<Input
				value={values.email}
				onChange={(e) => setValues({ ...values, email: e.target.value })}
			/>
			<span>{validationErrors?.email}</span>

			<label>Telefone:</label>
			<Input
				value={values.telephone}
				onChange={(e) => setValues({ ...values, telephone: e.target.value })}
			/>
			<span>{validationErrors?.telephone}</span>

			<button
				onClick={() =>
					setValues({
					...values,
					telephonesExtra: [...values.telephonesExtra, ""],
					})
				}
				className="add"
			>
				Adicionar telefone
			</button>

			{values.telephonesExtra?.map((telephone, i) => (
				<div key={i}>
					<label>Telefone {i + 2}:</label>
					<div className="containerExtra">
					<Input
						value={telephone}
						onChange={(e) => {
							const newTelephonesExtra = [...values.telephonesExtra];
							newTelephonesExtra[i] = e.target.value;
							setValues({ ...values, telephonesExtra: newTelephonesExtra });
						}}
					/>
					<button
						onClick={() => {
							const newTelephonesExtra = [...values.telephonesExtra];
							newTelephonesExtra.splice(i, 1);
							setValues({ ...values, telephonesExtra: newTelephonesExtra });
						}}
					>
						<Trash />
					</button>
					</div>
					<span>
						{validationErrors?.telephonesExtra && validationErrors?.telephonesExtra[i]}
					</span>
				</div>
			))}

			<button
				onClick={() =>
					setValues({ ...values, emailsExtra: [...values.emailsExtra, ""] })
				}
				className="add"
			>
				Adicionar e-mail
			</button>

			{values.emailsExtra?.map((telephone, i) => (
				<div key={i}>
					<label>Email {i + 2}:</label>
					<div className="containerExtra">
					<Input
						value={telephone}
						onChange={(e) => {
							const newEmailsExtra = [...values.emailsExtra];
							newEmailsExtra[i] = e.target.value;
							setValues({ ...values, emailsExtra: newEmailsExtra });
						}}
					/>
					<button
						onClick={() => {
							const newEmailsExtra = [...values.emailsExtra];
							newEmailsExtra.splice(i, 1);
							setValues({ ...values, emailsExtra: newEmailsExtra });
						}}
					>
						<Trash />
					</button>
					</div>
					<span>
						{validationErrors?.emailsExtra && validationErrors?.emailsExtra[i]}
					</span>
				</div>
			))}

			<div className="actions">
				<button
					onClick={() => handleSubmit(values, section)}
					className="action__btn__edit"
				>
					Editar
				</button>
				<button onClick={() => handleDelete(section)} className="action__btn__del">
					Apagar conta
				</button>
			</div>
			</CardForm>
		</CardBackground>
	);
};

export { Card };
