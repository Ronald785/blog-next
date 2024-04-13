import { AllPosts } from "@/domain/posts/posts";
import Container from "@/styles/container";

export type HomePageProps = {
    posts: AllPosts;
};

export default function HomePage({ posts }: HomePageProps) {
    return (
        <Container>
            {posts.data.map((post) => (
                <p key={post.id}>{post.attributes.title}</p>
            ))}
        </Container>
    );
}
