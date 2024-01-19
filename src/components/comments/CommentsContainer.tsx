import Like from "src/components/like";
import CommentsList from "./CommentsList";
import Button from "src/components/button";
import Loader from "src/components/loader";
import hooks from "src/helpers/hooks";
import {getCorrectWord} from "src/lib/grammar";
import "./comments.scss";

const Comments = () => {
    const {authors, isAuthorsLoading} = hooks.useGetAuthors();
    const {
        isFetching,
        setIsFetching,
        error,
        comments,
        commentsAmount,
        likesMap,
        setLikesMap,
        likesAmount,
        setLikesAmount,
        isLastPage,
    } = hooks.useGetComments();

    const onLike = (commentId: number, isLike: boolean) => {
        setLikesMap((likes: Record<string, boolean>) => ({
            ...likes,
            [commentId]: isLike,
        }));
        setLikesAmount((amount) => {
            if (isLike) {
                amount += 1;
            } else {
                amount -= 1;
            }
            return amount;
        });
    };

    if (isFetching && !comments.length) {
        return <Loader />;
    }

    return (
        <div className="comments">
            <div className="comments__header">
                {commentsAmount}{" "}
                {getCorrectWord(commentsAmount, [
                    "комментарий",
                    "комментария",
                    "комментариев",
                ])}
                <Like
                    isLike={false}
                    amount={likesAmount}
                    isDisabled={true}
                    onChange={() => {}}
                />
            </div>
            <div className="comments__content">
                {comments.length ? (
                    <CommentsList
                        comments={comments}
                        likesMap={likesMap}
                        onLike={onLike}
                        authors={authors}
                        isAuthorsLoading={isAuthorsLoading}
                    />
                ) : (
                    <div className="comments__empty">
                        "Комментариев ещё нет"
                    </div>
                )}
            </div>
            <div className="comments__footer">
                {error && <span className="comments__error">{error}</span>}
                <Button
                    isLoading={isFetching}
                    text={isLastPage ? "Это всё, что есть" : "Загрузить ещё"}
                    isDisabled={isLastPage}
                    onClick={() => {
                        setIsFetching(true);
                    }}
                />
            </div>
        </div>
    );
};

export default Comments;
