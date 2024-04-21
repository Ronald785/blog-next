import { Header } from "@/components/Header";
import { MainContainer } from "@/components/MainContainer";
import { AllPosts } from "@/domain/posts/posts";
import { Container } from "./styles";

export type HomePageProps = {
    posts: AllPosts;
};

export default function HomePage({ posts }: HomePageProps) {
    console.log("posts: ", posts);
    return (
        <>
            <Header />
            <MainContainer>
                <Container>
                    {posts.data.map((post) => (
                        <p key={post.id}>{post.attributes.title}</p>
                    ))}
                </Container>
            </MainContainer>
        </>
    );
}
