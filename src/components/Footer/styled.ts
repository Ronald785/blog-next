import styled, { css } from "styled-components";

export const Container = styled.footer`
    ${({ theme }) => css`
        background-color: ${theme.colors.primary};
        color: ${theme.colors.white};
        padding: ${theme.spacings.medium};
        font-size: ${theme.font.sizes.large};
    `}
    bottom: 0;
    text-align: center;
`;
