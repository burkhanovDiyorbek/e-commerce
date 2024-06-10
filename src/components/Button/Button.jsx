import PropTypes from "prop-types";
import style from "./button.module.css";

export const Button = ({ img = "", classname, content, onclick = null }) => {
  return (
    <button className={style[classname]} onClick={() => onclick}>
      {img && <img src={img} alt="button img" />}
      <p>{content}</p>
    </button>
  );
};

Button.propTypes = {
  classname: PropTypes.string,
  img: PropTypes.string,
  content: PropTypes.string,
  onclick: PropTypes.func,
};
