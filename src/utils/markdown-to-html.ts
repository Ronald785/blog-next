import { unified } from "unified";
import remarkParse from "remark-parse";
import remarkHtml from "remark-html";
import { VFile } from "vfile";

export const markdownToHtml = async (content: string): Promise<string> => {
    const processor = unified().use(remarkParse).use(remarkHtml);
    const data: VFile = await processor.process(content);
    return data.toString();
};
