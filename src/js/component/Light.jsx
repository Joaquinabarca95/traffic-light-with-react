import React from "react";
import PropTypes from "prop-types";

let colors = ["red", "yellow", "green"];

const Light = props => {
	return <div className={props.className} onClick={props.onClick}></div>;
};

Light.propTypes = {
	className: PropTypes.string,
	onClick: PropTypes.func
};
export default Light;
export { colors };
