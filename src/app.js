import React from "react";
import Navigation from "./components/nav";

export default class App extends React.Component {

	constructor(props) {
		super(props);
	}

	render() {
		return (
			<Navigation />
		);
	}
}