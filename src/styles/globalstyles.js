import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
    * {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
        // Remove the blue highlight everytime we click on something on mobile
        -webkit-tap-highlight-color: transparent;
    }

    html {
        font-size: 62.5%;
        scroll-behavior: smooth;
    }

    body {
        font-family: ${({ theme }) => theme.fontFamily};
    }

    a {
        color: inherit;
        text-decoration: none;
    }

    .main-title {
        font-size: 26px;
        text-align: center;
        text-transform: uppercase;
        font-weight: 400;
        letter-spacing: 0.15em;
        color: ${({ theme }) => theme.blue};
        margin-top: ${({ theme }) => theme.spacingM};
    }

    .main-desc {
        font-size: 1.4rem;
        text-align: center;
        color: ${({ theme }) => theme.grey};
        margin-top: ${({ theme }) => theme.spacingXS};
    }
`
