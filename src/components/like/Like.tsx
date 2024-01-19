import classNames from "classnames";
import "./like.scss";

interface Props {
    isLike: boolean;
    isDisabled: boolean;
    amount: number;
    onChange: (isChecked: boolean) => void;
}

const Like = ({isLike, amount, isDisabled, onChange}: Props) => {
    return (
        <label
            className={classNames("ui-like", {
                "ui-like_liked": isLike,
                "ui-like_disabled": isDisabled,
            })}
        >
            <input
                className="ui-like__field"
                type="checkbox"
                checked={isLike}
                onChange={(e) => {
                    onChange(e.target.checked);
                }}
            />
            <span className="ui-like__text">{amount}</span>
        </label>
    );
};

export default Like;
