import { createGlobalStyle } from 'styled-components';
import styled from 'styled-components';
import theme from 'styles/theme';

const GlobalStyle = createGlobalStyle`
  html,
  body {
    background-color: ${theme.colors.primary};
    padding: 0;
    margin: 0;
    font-family: 'IT';
    scroll-behavior: smooth;
  }

  main{
    overflow:hidden;
  }
  a {
    color: inherit;
    text-decoration: none;
  }

  * {
    box-sizing: border-box;
  }

  h1, h2, h3, p, h3 {
    margin: 0;
  }

  *a,button:hover{
    cursor: pointer;
  }

  &::-moz-focus-inner {
    border: 0;
    padding: 0;
  }

  .focus{
    *:focus{
      transition: outline-color .2s ease-out;
      outline:3px solid transparent;
    }
  }

  .no-focus{
    *:focus{
      outline:none;
    }
  }
`;

const CorridorsWrapper = styled('div')`
    width: 100vw;
    display: flex;
    align-items: center;
    flex-direction: column;
`;

export default function App({ Component, pageProps }) {
    return (
        <>
            <GlobalStyle />
            <CorridorsWrapper>
                <Component {...pageProps} />
            </CorridorsWrapper>
        </>
    );
}
