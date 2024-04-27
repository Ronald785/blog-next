import { Header } from "@/components/Header";
import { PostAttributes } from "@/domain/posts/posts";
import { BodyContainer } from "../HomePage/styles";
import { MainContainer } from "@/components/MainContainer";
import { Footer } from "@/components/Footer";
import { Heading } from "@/components/Heading";
import { PostImg } from "./styled";
import { PostDetails } from "@/components/PostDetails";
import { PostContent } from "@/components/PostContent";
import { Comments } from "@/components/Comments";
import { SITE_NAME } from "@/config/app-config";
import Head from "next/head";
import { removeHtml } from "@/utils/remove-html";

export type PostProps = {
    post: PostAttributes;
};

export default function Post({ post }: PostProps) {
    const title = post.title;
    const slug = post.slug;
    const content = post.content;
    const date = post.createdAt;
    const imgURL = post.cover.data.attributes.formats.large.url;
    const category = post.category.data.attributes.name;
    const author = post.author.data.attributes.name;

    return (
        <>
            <Head>
                <title>
                    {title} - {SITE_NAME}
                </title>
                <meta
                    name="description"
                    content={removeHtml(content).slice(0, 150)}
                />
                <link rel="icon" href="/blog.svg" />
            </Head>
            <BodyContainer>
                <Header />
                <MainContainer>
                    <Heading>{title}</Heading>
                    <PostImg src={imgURL} alt={title} />
                    <PostDetails
                        date={date}
                        category={category}
                        author={author}
                    />
                    <PostContent content={content} />
                    <Comments title={title} slug={slug} />
                </MainContainer>
                <Footer />
            </BodyContainer>
        </>
    );
}
