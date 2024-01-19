import {ReactElement} from "react";
import {IAuthor, ICommentListItem} from "src/helpers/types";
import CommentItem from "../commentItem";

interface Props {
    comments: ICommentListItem[];
    likesMap: Record<string, boolean>;
    onLike: (id: number, value: boolean) => void;
    authors: Record<string, IAuthor> | null;
    isAuthorsLoading: boolean;
}

const CommentsList = ({
    comments,
    likesMap,
    onLike,
    authors,
    isAuthorsLoading,
}: Props) => {
    const renderComments = (data: ICommentListItem[]): ReactElement => {
        return (
            <>
                {data.map((item) => {
                    const likes = likesMap[item.id]
                        ? item.likes + 1
                        : item.likes;
                    return (
                        <div className="comments__item" key={item.id}>
                            <CommentItem
                                id={item.id}
                                created={item.created}
                                text={item.text}
                                authorName={authors?.[item.author]?.name}
                                avatar={authors?.[item.author]?.avatar}
                                likes={likes}
                                isLike={likesMap[item.id]}
                                onLike={(value) => onLike(item.id, value)}
                                isAuthorsLoading={isAuthorsLoading}
                            />
                            {item.replies.length
                                ? renderComments(item.replies)
                                : null}
                        </div>
                    );
                })}
            </>
        );
    };

    return renderComments(comments);
};

export default CommentsList;
