import React from "react";
import Navigation from "./components/navigation";
import List from './components/navigation-list';

export default class App extends React.Component {

	constructor(props) {
		super(props);
		console.log(this.props);
	}

	render() {
		const list = ["List1", "List2", "List3"];
		return (
			<>
				<Navigation />
				<List list={list} />
			</>
		);
	}
}