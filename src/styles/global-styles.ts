import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        outline: none;
    }

    html {
        font-size: 62.5%;
        scroll-behavior: smooth;
    }

    body {
        font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        font-size: ${({ theme }) => theme.font.sizes.medium};
    }

    a {
        color: ${({ theme }) => theme.colors.secondary};
        text-decoration: none;
        transition: opacity 300ms ease-in-out;

        &:hover {
            opacity: .6;
        }
    }

    h1,h2,h3 {
        margin: ${({ theme }) => theme.spacings.small} 0;
    }

    ol, ul {
        margin: ${({ theme }) => theme.spacings.small};
        margin-left: ${({ theme }) => theme.spacings.large};
    }
`;
