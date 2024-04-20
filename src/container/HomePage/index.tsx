import { Header } from "@/components/Header";
import { MainContainer } from "@/components/MainContainer";
import { AllPosts } from "@/domain/posts/posts";

export type HomePageProps = {
    posts: AllPosts;
};

export default function HomePage({ posts }: HomePageProps) {
    return (
        <>
            <Header />
            <MainContainer>
                {posts.data.map((post) => (
                    <p key={post.id}>{post.attributes.title}</p>
                ))}
            </MainContainer>
        </>
    );
}
