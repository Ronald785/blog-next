import { POST_URL } from "@/config/app-config";
import { AllPosts } from "@/domain/posts/posts";
import { fetchJson } from "@/utils/fetch-json";

export default async function getAllPosts(query = ""): Promise<AllPosts> {
    const url = `${POST_URL}${query}`;
    const posts = await fetchJson<AllPosts>(url);
    return posts;
}
