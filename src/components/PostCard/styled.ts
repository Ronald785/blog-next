import styled, { css } from "styled-components";

export const Container = styled.div`
    transition: opacity 300ms ease-in-out;

    &:hover {
        opacity: 0.9;
    }
`;

export const PostCardCover = styled.div`
    margin-bottom: ${({ theme }) => theme.spacings.small};
    height: 20rem;
    overflow: hidden;
    img {
        width: 100%;
        height: 100%;
        display: block;
        object-fit: cover;
    }
`;

export const PostCardImg = styled.img`
    width: 100%;
    height: 100%;
`;

export const PostCardHeading = styled.h2`
    ${({ theme }) => css`
        font-size: ${theme.font.sizes.medium};

        a {
            color: ${theme.colors.darkGray};
        }
    `}
`;
