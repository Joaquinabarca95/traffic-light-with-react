import React, { useState } from "react";
import Light, { colors } from "./Light.jsx";

const TrafficLight = () => {
	const [selected, setSelected] = useState(false);

	function handleClick(e) {
		setSelected(!selected);
		selected === true ? e.target.classList.toggle("selected") : "";
	}
	if (document.querySelectorAll(".selected").length > 1) {
		document.querySelector(".selected").classList.toggle("selected");
	}

	return (
		<>
			<div className="traffictop"></div>
			<div className="container">
				<Light className={colors[0] + " light"} onClick={handleClick} />
				<Light className={colors[1] + " light"} onClick={handleClick} />
				<Light className={colors[2] + " light"} onClick={handleClick} />
			</div>
		</>
	);
};

export default TrafficLight;
