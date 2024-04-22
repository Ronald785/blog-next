import { Header } from "@/components/Header";
import { PostAttributes } from "@/domain/posts/posts";
import { BodyContainer } from "../HomePage/styles";
import { MainContainer } from "@/components/MainContainer";
import { Footer } from "@/components/Footer";
import { Heading } from "@/components/Heading";
import { PostImg } from "./styled";

export type PostProps = {
    post: PostAttributes;
};

export default function Post({ post }: PostProps) {
    return (
        <>
            <BodyContainer>
                <Header />
                <MainContainer>
                    <Heading>{post.title}</Heading>
                    <PostImg
                        src={post.cover.data.attributes.formats.large.url}
                        alt={post.title}
                    />
                    <div dangerouslySetInnerHTML={{ __html: post.content }} />
                </MainContainer>
                <Footer />
            </BodyContainer>
        </>
    );
}
