export interface IAuthor {
    id: number;
    name: string;
    avatar: string;
}

export interface ICommentItem {
    id: number;
    created: string;
    text: string;
    authorName?: string;
    avatar?: string;
    likes: number;
    isLike: boolean;
    onLike: (isLike: boolean) => void;
}

export type ICommentListItem = ICommentItem & {
    replies: ICommentListItem[];
    author: number;
};
