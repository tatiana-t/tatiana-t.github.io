import Like from "src/components/like";
import {getHoursAge} from "src/lib/date";
import {ICommentItem} from "src/helpers/types";
import "./commentItem.scss";
import Loader from "../loader/Loader";

interface Props {
    isAuthorsLoading: boolean;
    onChange?: (isChecked: boolean) => void;
}

const CommentItem = (props: Props & ICommentItem) => {
    const date = getHoursAge(props.created);
    return (
        <div className="comment-item">
            <span
                className="comment-item__avatar"
                style={{backgroundImage: `url(${props.avatar})`}}
            >
                {props.isAuthorsLoading && <Loader />}
            </span>
            <div className="comment-item__content">
                <div className="comment-item__header">
                    <div className="comment-item__col">
                        <div className="comment-item__name">
                            {props.isAuthorsLoading
                                ? "Ищем автора..."
                                : props.authorName || "Неизвестный автор"}
                        </div>
                        <div className="comment-item__date">{date}</div>
                    </div>
                    <div className="comment-item__col comment-item__likes">
                        <Like
                            isLike={props.isLike}
                            amount={props.likes}
                            isDisabled={false}
                            onChange={props.onLike}
                        />
                    </div>
                </div>
                <div className="comment-item__text">{props.text}</div>
            </div>
        </div>
    );
};

export default CommentItem;
