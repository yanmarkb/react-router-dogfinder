import React, { useState } from "react";
import {
	BrowserRouter as Router,
	Routes,
	Route,
	Navigate,
} from "react-router-dom";
import ColorList from "./ColorList";
import ColorDetails from "./ColorDetails";
import NewColorForm from "./NewColorForm";

function App() {
	const initialColors = [
		{ name: "Red", hex: "#FF0000" },
		{ name: "Green", hex: "#00FF00" },
		{ name: "Blue", hex: "#0000FF" },
	];

	const [colors, setColors] = useState(initialColors);

	const addColor = (newColor) => {
		setColors([...colors, newColor]);
	};

	return (
		<Router>
			<Routes>
				<Route path="/colors" element={<ColorList colors={colors} />} />
				<Route
					path="/colors/new"
					element={<NewColorForm addColor={addColor} />}
				/>
				<Route
					path="/colors/:color"
					element={<ColorDetails colors={colors} />}
				/>
				<Route path="*" element={<Navigate to="/colors" />} />
			</Routes>
		</Router>
	);
}

export default App;
