import styled, { css } from "styled-components";

export const Container = styled.main`
    ${({ theme }) => css`
        font-size: ${theme.font.sizes.medium};
        padding: ${theme.spacings.medium};
    `}
    max-width: 96rem;
    width: 100%;
    margin: 0 auto;
`;

export const Page = styled.div``;
