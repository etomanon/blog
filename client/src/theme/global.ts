import { createGlobalStyle, css } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  html {
    font-size: 62.5%;
  }
	html,
	body {
		position: relative;
		margin: 0;
		padding: 0;
		text-rendering: optimizeLegibility;
		font-family: 'Montserrat', 'Roboto', sans-serif;
		-webkit-font-smoothing: antialiased;
    overflow-x: hidden;
		min-height: 100vh;
		color: ${({ theme }) => theme.colors.text}
	}
  body {
    font-size: 1.6rem;
  }

	h1,
	h2,
	h3,
	h4,
	h5,
	h6 {
		line-height: 1;
	}

	ul {
		margin-top: 0;
		margin-bottom: 0;
	}

	::placeholder {
		color: ${({ theme }) => theme.colors.text};
		font-family: 'Montserrat', 'Roboto', sans-serif;
	}
`;
