import styled, { css } from "styled-components";

export const PostImg = styled.img`
    ${({ theme }) => css`
        margin-bottom: ${theme.spacings.medium};
    `}
    width: 100%;
`;
