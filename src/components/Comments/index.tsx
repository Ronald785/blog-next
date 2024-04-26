import { DiscussionEmbed } from "disqus-react";
import { Container } from "./styled";

type CommentsProps = {
    title: string;
    slug: string;
};

export const Comments = ({ title, slug }: CommentsProps) => {
    return (
        <Container>
            <DiscussionEmbed
                shortname="blog-next-dev"
                config={{
                    url: `http://localhost:3000/post/${slug}`,
                    identifier: slug,
                    title,
                    language: "pt_BR",
                }}
            />
        </Container>
    );
};
