import React, { useState } from "react";

const TrafficLight = () => {
	const [color, setColor] = useState("");

	return (
		<>
			<div className="traffictop"></div>
			<div className="container">
				<div
					onClick={() => setColor("red")}
					className={
						"red light" + (color === "red" ? " selected" : "")
					}></div>
				<div
					onClick={() => setColor("yellow")}
					className={
						"yellow light" + (color === "yellow" ? " selected" : "")
					}></div>
				<div
					onClick={() => setColor("green")}
					className={
						"green light" + (color === "green" ? " selected" : "")
					}></div>
			</div>
		</>
	);
};

export default TrafficLight;
