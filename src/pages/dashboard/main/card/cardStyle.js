import styled from "styled-components";

const CardBackground = styled.div`
	width: 100%;
	max-width: ${({ section }) => section !== "Meus Contatos" ? "800px" : "400px"};
	height: 100%;
	background-color: var(--gray-1);
	border-radius: 5px;
	margin: 0 auto;
	margin-top: ${({ section }) => section !== "Meus Contatos" ? "none" : "100px"};
	padding: 16px;

	& > h2 {
			text-align: center;
			font-family: var(--text);
			font-weight: var(--f-weight-1);
			font-size: 22px;
			color: var(--gray-4);
			padding-bottom: 4px;
	}
`

const CardForm = styled.form`
	display: flex;
	flex-direction: column;
	border: 2px solid var(--gray-3);
	padding: 16px;
	border-radius: 6px;
	width:  100%;
	height: 643px;
	overflow: auto;

	label {
			font-family: var(--text);
			font-weight: var(--f-weight-1);
			color: var(--gray-4);
			padding: 8px 0px;
			font-size: 16px;
	}

	input {
			background-color: var(--gray-3);
			color: var(--gray-1);
			margin: 4px 0px
	}

	span{
			color: var(--color-text-errors);
			font-family: var(--text);
			font-weight: var(--f-weight-1);
			font-size: 14px;
			margin: 8px 0px;
	}

	& > .add{
			background-color: #6c757d;
			border-style: none;
			padding: 8px;
			font-family: var(--text);
			font-weight: var(--f-weight-2);
			border-radius: 6px;
			max-width: 200px;
			margin: 10px 0px;
			color: #e0e0e0;

			&:hover,&:active{
				filter: brightness(1.3);
				transition: 0.5 ease-in;
			}
	}



	& > div {
			display: flex;
			flex-direction: column;
			align-items: flex-start;
			width:  100%;

			& > .containerExtra{
				display: flex;
				align-items: center;
				width: 100%;

				& > input {
						width:  95%;
						border-bottom-right-radius: unset;
						border-top-right-radius: unset;
				}
				& > button {
						width: 44px;
						height: 37px;
						border-style: none;
						border-bottom-right-radius: 4px;
						border-top-right-radius: 4px;
						background-color: var(--gray-3);
						cursor: pointer;

						& > svg{
								color: #e74c3c;
								cursor: pointer;

								&:hover,&:active{
									filter: brightness(1.3);
									transition: 0.5 ease-in;
								}
						}
				}


			}
	}

	.actions {
			display: flex;
			flex-direction: row;
			justify-content: space-around;
			gap: 10px;

			button{
				padding: 8px;
				border-style: none;
				font-family: var(--text);
				font-weight: var(--f-weight-1);
				font-size: 14px;
				width: 150px;
				border-radius: 4px;
				filter: brightness(0.8);
			}

			button:hover{
				filter: brightness(1.3);
				transition: 0.5 ease-in;
				color: #e0e0e0;
			}

			& > .action__btn__edit{
				background-color: #20c997;
			}
			& > .action__btn__del{
				display: ${({ section }) => section === "Criar Contato" && "none" };
				background-color: #e74c3c;
			}
	}



`

export { CardBackground, CardForm }