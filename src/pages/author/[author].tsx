import HomePage from "@/container/HomePage";
import getAllPosts from "@/data/posts/get-all-posts";
import { AllPosts } from "@/domain/posts/posts";
import { GetServerSideProps } from "next";

export type DynamicPostProps = {
    posts: AllPosts;
    author: string;
};

export default function DynamicPost({ posts, author }: DynamicPostProps) {
    return <HomePage posts={posts} title={"Autor: " + author} />;
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
    const url = `&filters[author][name][$eq]=${ctx.params?.author}`;
    const posts = await getAllPosts(url);
    return {
        props: { posts, author: ctx.params?.author },
    };
};
