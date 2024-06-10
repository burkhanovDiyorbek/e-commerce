import PropTypes from "prop-types";
export const AboutCard = (props) => {
  const { img, title, desc } = props;
  return (
    <div>
      <img src={img} alt="about card img" />
      <h2>{title}</h2>
      <p>{desc}</p>
    </div>
  );
};

AboutCard.propTypes = {
  img: PropTypes.string,
  title: PropTypes.string,
  desc: PropTypes.string,
};
