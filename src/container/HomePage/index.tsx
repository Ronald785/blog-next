import { Header } from "@/components/Header";
import { MainContainer } from "@/components/MainContainer";
import { AllPosts } from "@/domain/posts/posts";
import { Container } from "./styles";
import { PostCard } from "@/components/PostCard";

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
                        <PostCard
                            key={post.id}
                            title={post.attributes.title}
                            slug={String(post.id)}
                            cover={
                                post.attributes.cover.data.attributes.formats
                                    .small.url
                            }
                        />
                    ))}
                </Container>
            </MainContainer>
        </>
    );
}
