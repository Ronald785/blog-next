import { Header } from "@/components/Header";
import { MainContainer } from "@/components/MainContainer";
import { AllPosts } from "@/domain/posts/posts";
import { BodyContainer, Container } from "./styles";
import { PostCard } from "@/components/PostCard";
import { Footer } from "@/components/Footer";
import Head from "next/head";
import { SITE_NAME } from "@/config/app-config";

export type HomePageProps = {
    posts: AllPosts;
};

export default function HomePage({ posts }: HomePageProps) {
    console.log("posts: ", posts);
    return (
        <>
            <Head>
                <title>{SITE_NAME}</title>
                <meta name="description" content="Meu blog de tecnologia" />
                <link rel="icon" href="/blog.svg" />
            </Head>
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
                                    post.attributes.cover.data.attributes
                                        .formats.small.url
                                }
                            />
                        ))}
                    </Container>
                </MainContainer>
                <Footer />
            </BodyContainer>
        </>
    );
}
