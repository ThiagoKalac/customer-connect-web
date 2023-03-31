import styled from "styled-components";
import register from "../../assets/forms/register.svg"

const RegisterBackground = styled.div`
	background-color: var(--color-bg);
	width: 100vw;
	min-height: 100vh;
`

const Container = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
	width: 100%;
	max-width: 1200px;
	height: 100%;
	margin: 0 auto;

	& > div {
		display: flex;
		justify-content: space-between;
		align-items: baseline;
		width: 100%;
		max-width: 800px;
		padding: 16px;
		animation: backInLeft 0.8s ease-out;
		

		& > button {
			padding: 8px 12px;
			border:none;
			border-radius: 4px;
			color: #171717;
			font-family: var(--text);
			background-color: var(--color-bg-button);
			filter:brightness(0.9);
			cursor: pointer;
			text-align: center;

			&:hover,&:focus,&:active{
				filter:brightness(1.1);
				transition: 0.2s ease-in-out;
			}

		}

		& > img {
			width:80px;
			height: 70px;
		}
	}
	
`


const RegisterForm = styled.form`
	width: 100%;
	max-width: 1000px;
	height: 100%;
	display: flex;
	flex-direction: column;
	gap:7px;
	padding: 16px;
	border-radius: 4px;
	background-color: var(--color-bg-section);
	position: relative;

	& > h2{
		font-family:var(--text);
		font-size: 18px;
		font-weight: var(--f-weight-1);
		letter-spacing: 1.5px;
		color: var(--gray-5);
		text-align: center;
		margin: 8px auto;
	}

	& > .registerForm_bg {
		background-image: url(${register});
		background-repeat: no-repeat;
		background-size: 100%;
		background-position: center;
		position: absolute;
		width: 80%;
		height: 100%;
		top: 0px;
		left: 11%;
		z-index: 0;
	}

	& > .registerForm_content{
		width: 100%;
		background-color: ${({ dark }) => (dark ? "#2b3136b3" : "#535658c7")};
		border-radius: 6px;
		display: flex;
		flex-direction: column;
		padding: 16px 8px;
		gap: 6px;
		z-index: 1;

		& > label{
			font-family: var(--text);
			color: ${({ dark }) => (dark ? "#a5a5a5" : "#171717")};
			font-weight: var(--f-weight-2);
			margin-bottom: 6px;
		}
		
		& > p {
			font-family: var(--text);
			font-weight: var(--f-weight-3);
			font-size: 14px;
			margin: 6px 0px;
			color: var(--brand-color);
			margin-top: -5px;
			margin-bottom: 12px;
		}

		& > button {
			background-color: var(--color-bg-button);
			border-style: none;
			height: 30px;
			border-radius: 4px;
			font-family: var(--text);
			font-weight: var(--f-weight-1);
		}
	}
	@media(min-width: 650px){
		&{
			& > .registerForm_bg{
				width: 500px;
				left: 23%;
			}
		}
	}

	@media(min-width: 800px){
		&{
			padding-left: 8px;

			& > .registerForm_bg{
				left: unset;
				right: 0px;
			}

			& > .registerForm_content{
			    max-width: 500px;
			    background-color: var(--color-bg-form);
			}
		}
	}

`

export {RegisterBackground, Container,RegisterForm}