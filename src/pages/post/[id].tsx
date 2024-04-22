import getAllPosts from "@/data/posts/get-all-posts";
import getPost from "@/data/posts/get-post";
import { PostAttributes } from "@/domain/posts/posts";
import { GetStaticPaths, GetStaticProps } from "next";

export type DynamicPostProps = {
    post: PostAttributes;
};

export default function DynamicPost({ post }: DynamicPostProps) {
    return (
        <>
            <p dangerouslySetInnerHTML={{ __html: post.content }}></p>
        </>
    );
}

export const getStaticPaths: GetStaticPaths = async () => {
    const posts = await getAllPosts();
    return {
        paths: posts.data.map((post) => {
            return {
                params: {
                    id: String(post.id),
                },
            };
        }),
        fallback: false,
    };
};

export const getStaticProps: GetStaticProps = async (ctx) => {
    const post = await getPost(ctx.params?.id);
    return {
        props: { post },
    };
};
