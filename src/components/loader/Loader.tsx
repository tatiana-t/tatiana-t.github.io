import loader from "src/assets/icons/loader.svg";
import "./loader.scss";

const Loader = () => {
    return (
        <div className="ui-loader">
            <img className="ui-loader__pic" src={loader} alt="" />
        </div>
    );
};

export default Loader;
