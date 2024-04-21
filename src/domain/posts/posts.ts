export type PostID = number;

export type PostAuthor = {
    data: {
        attributes: {
            id: PostID;
            name: string;
            createdBy: number;
            updatedBy: number;
            createdAt: string;
            updatedAt: string;
        };
    };
};

export type PostCategory = {
    data: {
        attributes: {
            id: PostID;
            name: string;
            createdBy: number;
            updatedBy: number;
            createdAt: string;
            updatedAt: string;
        };
    };
};

export type PostCreatedBy = {
    id: PostID;
    firstname: string;
    lastname: string;
    username: null;
};

export type PostCoverFormat = {
    ext: string;
    url: string;
    hash: string;
    mime: string;
    name: string;
    path: null;
    size: number;
    width: number;
    height: number;
    provider_metadata: {
        public_id: string;
        resource_type: string;
    };
};

export type PostCover = {
    data: {
        id: PostID;
        attributes: {
            alternativeText: string;
            caption: string;
            previewUrl: null;
            provider: string;
            createdBy: number;
            updatedBy: number;
            createdAt: string;
            updatedAt: string;
            formats: {
                thumbnail: PostCoverFormat;
                small: PostCoverFormat;
                medium: PostCoverFormat;
                large: PostCoverFormat;
            };
        };
    };
};

export type PostAttributes = {
    title: string;
    content: string;
    slug: string;
    author: PostAuthor;
    category: PostCategory;
    createdBy: PostCreatedBy;
    updatedBy: PostCreatedBy;
    createdAt: string;
    updatedAt: string;
    cover: PostCover;
};

export type PostData = {
    id: PostID;
    attributes: PostAttributes;
};

export type PostMetadata = {
    pagination: {
        page: number;
        pageSize: number;
        pageCount: number;
        total: number;
    };
};

export type AllPosts = {
    data: Array<PostData>;
    meta: PostMetadata;
};
