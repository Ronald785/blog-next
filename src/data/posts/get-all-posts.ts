import { POST_URL } from "@/config/app-config";
import { AllPosts } from "@/domain/posts/posts";
import { fetchJson } from "@/utils/fetch-json";

export default async function getAllPosts(): Promise<AllPosts> {
    const posts = await fetchJson<AllPosts>(POST_URL);
    return posts;
}
