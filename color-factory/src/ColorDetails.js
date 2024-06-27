import React from "react";
import { useParams, Link } from "react-router-dom";

function ColorDetails({ colors }) {
	const { color } = useParams();
	const selectedColor = colors.find(
		(c) => c.name.toLowerCase() === color.toLowerCase()
	);

	if (!selectedColor) return <h2>Color not found!</h2>;

	return (
		<div>
			<h1>{selectedColor.name}</h1>
			<div
				style={{
					backgroundColor: selectedColor.hex,
					height: "100px",
					width: "100px",
				}}></div>
			<Link to="/colors">Go back</Link>
		</div>
	);
}

export default ColorDetails;
