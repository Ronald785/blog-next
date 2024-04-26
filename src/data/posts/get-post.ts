import { POST_URL } from "@/config/app-config";
import { AllPosts, PostAttributes } from "@/domain/posts/posts";
import { fetchJson } from "@/utils/fetch-json";
import { markdownToHtml } from "@/utils/markdown-to-html";

export default async function getPost(
    id: string | string[] | undefined,
): Promise<PostAttributes> {
    const idString = Array.isArray(id) ? id[0] : id;
    const url = `${POST_URL}&filters[slug][$eq]=${idString}`;
    const posts = await fetchJson<AllPosts>(url);
    const post = posts.data[0].attributes;
    const content = await markdownToHtml(post.content);
    const finalPost = { ...post, content };
    return finalPost;
}
