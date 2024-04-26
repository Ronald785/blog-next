import { DiscussionEmbed } from "disqus-react";
import { Container } from "./styled";
import { SITE_URL } from "@/config/app-config";

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
                    url: `${SITE_URL}/post/${slug}`,
                    identifier: slug,
                    title,
                    language: "pt_BR",
                }}
            />
        </Container>
    );
};
