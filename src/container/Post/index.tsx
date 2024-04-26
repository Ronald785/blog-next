import { Header } from "@/components/Header";
import { PostAttributes } from "@/domain/posts/posts";
import { BodyContainer } from "../HomePage/styles";
import { MainContainer } from "@/components/MainContainer";
import { Footer } from "@/components/Footer";
import { Heading } from "@/components/Heading";
import { PostImg } from "./styled";
import { PostDetails } from "@/components/PostDetails";
import { PostContent } from "@/components/PostContent";
import { Comments } from "@/components/Comments";

export type PostProps = {
    post: PostAttributes;
};

export default function Post({ post }: PostProps) {
    const title = post.title;
    const slug = post.slug;
    const content = post.content;
    const date = post.createdAt;
    const imgURL = post.cover.data.attributes.formats.large.url;
    const category = post.category.data.attributes.name;
    const author = post.author.data.attributes.name;

    return (
        <>
            <BodyContainer>
                <Header />
                <MainContainer>
                    <Heading>{title}</Heading>
                    <PostImg src={imgURL} alt={title} />
                    <PostDetails
                        date={date}
                        category={category}
                        author={author}
                    />
                    <PostContent content={content} />
                    <Comments title={title} slug={slug} />
                </MainContainer>
                <Footer />
            </BodyContainer>
        </>
    );
}
