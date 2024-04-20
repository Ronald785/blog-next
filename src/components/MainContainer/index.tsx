import * as Styled from "./styled";

export type MainContainerProps = {
    children: React.ReactNode; //JSX.Element
};

export const MainContainer = ({ children }: MainContainerProps) => {
    return <Styled.Container>{children}</Styled.Container>;
};
