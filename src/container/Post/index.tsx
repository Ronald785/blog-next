import { Header } from "@/components/Header";
import { PostAttributes } from "@/domain/posts/posts";
import { BodyContainer } from "../HomePage/styles";
import { MainContainer } from "@/components/MainContainer";
import { Footer } from "@/components/Footer";
import { Heading } from "@/components/Heading";

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
                    <div dangerouslySetInnerHTML={{ __html: post.content }} />
                </MainContainer>
                <Footer />
            </BodyContainer>
        </>
    );
}
