import styled from "styled-components";

export const BodyContainer = styled.div`
    min-height: 100vh;
    display: grid;
    grid-template-rows: auto 1fr auto;
`;

export const Container = styled.section`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(28rem, 1fr));
    gap: ${({ theme }) => theme.spacings.large};
`;

export const Title = styled.h2`
    text-align: center;
    padding-bottom: ${({ theme }) => theme.spacings.medium};
    font-size: ${({ theme }) => theme.font.sizes.large};
    font-weight: 900;
`;
