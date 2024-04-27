import HomePage from "@/container/HomePage";
import getAllPosts from "@/data/posts/get-all-posts";
import { AllPosts } from "@/domain/posts/posts";
import { GetServerSideProps } from "next";

export type DynamicPostProps = {
    posts: AllPosts;
    category: string;
};

export default function DynamicPost({ posts, category }: DynamicPostProps) {
    return <HomePage posts={posts} title={"Categoria: " + category} />;
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
    const url = `&filters[category][name][$eq]=${ctx.params?.category}`;
    const posts = await getAllPosts(url);
    return {
        props: { posts, category: ctx.params?.category },
    };
};
