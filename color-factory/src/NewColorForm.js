import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function NewColorForm({ addColor }) {
	const [name, setName] = useState("");
	const [hex, setHex] = useState("#000000");
	const navigate = useNavigate();

	const handleSubmit = (e) => {
		e.preventDefault();
		addColor({ name, hex });
		navigate("/colors");
	};

	return (
		<div>
			<h1>Add a New Color</h1>
			<form onSubmit={handleSubmit}>
				<div>
					<label htmlFor="name">Color Name</label>
					<input
						id="name"
						name="name"
						value={name}
						onChange={(e) => setName(e.target.value)}
					/>
				</div>
				<div>
					<label htmlFor="hex">Color Value</label>
					<input
						id="hex"
						name="hex"
						type="color"
						value={hex}
						onChange={(e) => setHex(e.target.value)}
					/>
				</div>
				<button>Add Color</button>
			</form>
		</div>
	);
}

export default NewColorForm;
