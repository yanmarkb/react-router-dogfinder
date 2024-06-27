import React from "react";
import {
	BrowserRouter as Router,
	Routes,
	Route,
	Navigate,
} from "react-router-dom";
import DogList from "./DogList";
import DogDetails from "./DogDetails";
import Nav from "./Nav";

function App() {
	const dogs = [
		{
			name: "Whiskey",
			age: 5,
			src: "/whiskey.jpg",
			facts: [
				"Whiskey loves eating popcorn.",
				"Whiskey is a terrible guard dog.",
				"Whiskey wants to cuddle with you!",
			],
		},
		{
			name: "Duke",
			age: 3,
			src: "/duke.jpg",
			facts: [
				"Duke believes that ball is life.",
				"Duke likes snow.",
				"Duke enjoys pawing other dogs.",
			],
		},
		{
			name: "Perry",
			age: 4,
			src: "/perry.jpg",
			facts: [
				"Perry loves all humans.",
				"Perry demolishes all snacks.",
				"Perry hates the rain.",
			],
		},
	];

	return (
		<Router>
			<Nav dogs={dogs} />
			<Routes>
				<Route path="/dogs" element={<DogList dogs={dogs} />} />
				<Route path="/dogs/:name" element={<DogDetails dogs={dogs} />} />
				<Route path="*" element={<Navigate to="/dogs" />} />
			</Routes>
		</Router>
	);
}

export default App;
