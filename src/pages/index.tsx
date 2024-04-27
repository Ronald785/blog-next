import HomePage from "@/container/HomePage";
import getAllPosts from "@/data/posts/get-all-posts";
import { AllPosts } from "@/domain/posts/posts";
import { GetStaticProps } from "next";

export type HomeProps = {
    posts: AllPosts;
};

export default function Home({ posts }: HomeProps) {
    return <HomePage posts={posts} />;
}

export const getStaticProps: GetStaticProps = async () => {
    const posts = await getAllPosts(
        "&sort=id:desc&pagination[start]=0&pagination[limit]=10",
    );

    return {
        props: { posts },
    };
};
