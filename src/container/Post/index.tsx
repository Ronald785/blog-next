import { Header } from "@/components/Header";
import { PostAttributes } from "@/domain/posts/posts";
import { BodyContainer } from "../HomePage/styles";
import { MainContainer } from "@/components/MainContainer";
import { Footer } from "@/components/Footer";

export type PostProps = {
    post: PostAttributes;
};

export default function Post({ post }: PostProps) {
    return (
        <>
            <BodyContainer>
                <Header />
                <MainContainer>
                    <div dangerouslySetInnerHTML={{ __html: post.content }} />
                </MainContainer>
                <Footer />
            </BodyContainer>
        </>
    );
}
