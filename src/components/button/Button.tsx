import classNames from "classnames";
import loader from "src/assets/icons/loader.svg";
import "./button.scss";

interface Props {
    text: string;
    onClick: () => void;
    isDisabled: boolean;
    isLoading: boolean;
}

const Button = ({text, isLoading, isDisabled, onClick}: Props) => {
    return (
        <button
            className={classNames("ui-button", {
                "ui-button_disabled": isDisabled || isLoading,
            })}
            disabled={isDisabled}
            onClick={() => onClick()}
        >
            {isLoading ? (
                <img className="ui-button__loader" src={loader} alt="" />
            ) : (
                text
            )}
        </button>
    );
};

export default Button;
