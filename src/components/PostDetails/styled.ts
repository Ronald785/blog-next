import Link from "next/link";
import styled, { css } from "styled-components";

export const Container = styled.div`
    ${({ theme }) => css`
        color: ${theme.colors.gray};
        margin: ${theme.spacings.small} 0;
        font-size: ${theme.font.sizes.medium};
        font-style: italic;
    `}
`;

export const Details = styled.p``;

export const Date = styled.span``;

export const Author = styled(Link)``;

export const Category = styled(Link)``;
