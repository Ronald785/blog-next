import { Header } from "@/components/Header";
import { AllPosts } from "@/domain/posts/posts";

export type HomePageProps = {
    posts: AllPosts;
};

export default function HomePage({ posts }: HomePageProps) {
    return (
        <>
            <Header />
            {posts.data.map((post) => (
                <p key={post.id}>{post.attributes.title}</p>
            ))}
        </>
    );
}
