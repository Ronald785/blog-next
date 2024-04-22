import { formatDate } from "@/utils/format-date";
import { Author, Category, Container, Date, Details } from "./styled";

type PostDetailsProps = {
    date: string;
    category: string;
    author: string;
};
export const PostDetails = ({ date, category, author }: PostDetailsProps) => {
    return (
        <Container>
            <Details>
                Publicado em <Date>{formatDate(date)}</Date> por{" "}
                <Author href={`author/${author}`}>{author}</Author> em{" "}
                <Category href={`/category/${category}`}>{category}</Category>
            </Details>
        </Container>
    );
};
