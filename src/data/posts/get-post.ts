import { POST_URL } from "@/config/app-config";
import { AllPosts } from "@/domain/posts/posts";
import { fetchJson } from "@/utils/fetch-json";

export default async function getPost(
    id: string | string[] | undefined,
): Promise<AllPosts> {
    const idString = Array.isArray(id) ? id[0] : id;
    const url = `${POST_URL}&filters[id][$eq]=${idString}`;
    const post = await fetchJson<AllPosts>(url);
    return post;
}
