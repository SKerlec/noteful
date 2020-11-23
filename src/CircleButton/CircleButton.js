import React from "react";
import PropTypes from "prop-types";
import "./CircleButton.css";

function CircleButton(props) {
	const { tag, className, children, ...otherProps } = props;
	return React.createElement(
		props.tag,
		{
			className : [
				"Button",
				props.className
			].join(" "),
			...otherProps
		},
		props.children
	);
}

CircleButton.defaultProps = {
	tag : "a"
};

CircleButton.propTypes = {
	className : PropTypes.string.isRequired,
	children  : PropTypes.array.isRequired
};

export default CircleButton;