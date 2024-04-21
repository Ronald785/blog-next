import styled from "styled-components";

export const Container = styled.section`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(28rem, 1fr));
    gap: ${({ theme }) => theme.spacings.large};
`;
