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
