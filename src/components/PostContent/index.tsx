import { Container } from "./styled";

type PostContentProps = {
    content: string;
};

export const PostContent = ({ content }: PostContentProps) => {
    return <Container dangerouslySetInnerHTML={{ __html: content }} />;
};
