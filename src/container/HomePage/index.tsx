import { Header } from "@/components/Header";
import { MainContainer } from "@/components/MainContainer";
import { AllPosts } from "@/domain/posts/posts";
import { BodyContainer, Container } from "./styles";
import { PostCard } from "@/components/PostCard";
import { Footer } from "@/components/Footer";

export type HomePageProps = {
    posts: AllPosts;
};

export default function HomePage({ posts }: HomePageProps) {
    console.log("posts: ", posts);
    return (
        <BodyContainer>
            <Header />
            <MainContainer>
                <Container>
                    {posts.data.map((post) => (
                        <PostCard
                            key={post.attributes.slug}
                            title={post.attributes.title}
                            slug={post.attributes.slug}
                            cover={
                                post.attributes.cover.data.attributes.formats
                                    .small.url
                            }
                        />
                    ))}
                </Container>
            </MainContainer>
            <Footer />
        </BodyContainer>
    );
}
