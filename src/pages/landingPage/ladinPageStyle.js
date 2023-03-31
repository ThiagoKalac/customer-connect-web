import styled from "styled-components";

const ContainerLandingPage = styled.div`
	background-color: var(--color-bg);
	width: 100vw;
	min-height: 100vh;
	`

const Header = styled.header`
	width: 100%;
	max-width: 1200px;
	margin: 0 auto;

	display: flex;
	justify-content: center;
	position: relative;
	

	figure{
		display: flex;
		align-items: center;
		flex-direction: column;
		padding: 16px 4px;
		gap: 8px;

		& > img{
			height: 100px;
		}

		& > p {
			font-family: var(--f-logo-1);
			font-size: 24px;
			letter-spacing: 16px;
			color: var(--gray-5)
		}

		& > span{
			font-family: var(--f-logo-2);
			font-size: 20px;
			letter-spacing: 8px;
			color: var(--brand-color);
		}
		
	}

	button{
		display: flex;
		width: 50px;
		flex-direction: column;
		align-items: center;
		background-color: transparent;
		border-radius: 50%;
		border-style: none;
		position: absolute;
		right: 16px;
		top: 16px;
		gap: 4px;

		color: var(--gray-5);
		font-weight: var(--f-weight-2);
		font-family: var(--text);

		& > svg {
			color : var(--color-btn-dark);
			
			font-size: 24px;
		}
	}

	
`

const Main = styled.main`
	width: 100%;
	margin: 0 auto;

	& > section{
		width: 100%;
		height: 500px;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		background-color:${({ dark }) => (dark ? "#212529" : "#828282")}; 
		box-shadow: 2px 3px 5px 1px var(--color-shadow-landinpage);
		
		img{
			width: 100%;
			max-width: 400px;
		}

		.carousel-indicators{
			bottom: -49px;
		}

		.carousel-caption{
			color: var();
			font-size: 20px;
		}
	}

	.containerBtns{
		display: flex;
		flex-direction: column;
		align-items: center;
		padding: 32px 16px;
		gap: 12px;

		button{
			background-color: var(--brand-color);
			filter: brightness(0.8);
			border-style: none;
			border-radius: 4px;
			padding: 10px;
			width: 180px;
			font-family: var(--text);
			font-weight: var(--f-weight-2);
			color: #171717;
			letter-spacing: 2px;
			margin: 16px 0;
			cursor: pointer;
		}

		button:hover{
			filter: brightness(1);
			transition: 0.2s ease-in;
		}

		span{
			font-size: 16px;
			font-family: var(--text);
			font-weight: var(--f-weight-3);
			color: var(--gray-5);
			letter-spacing: 2px;
		}
	}
	
`

export {ContainerLandingPage, Header , Main}