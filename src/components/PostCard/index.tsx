import { Container, PostCardCover, PostCardHeading } from "./styled";
import Link from "next/link";

export type PostCardProps = {
    title: string;
    slug: string;
    cover: string;
};

export const PostCard = ({ title, slug, cover }: PostCardProps) => {
    return (
        <Container>
            <Link href="/post/[slug]" as={`/post/${slug}`}>
                <PostCardCover>
                    <img src={cover} alt={title} />
                </PostCardCover>
                <PostCardHeading>{title}</PostCardHeading>
            </Link>
        </Container>
    );
};
