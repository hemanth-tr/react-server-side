import React from "react";
import Navigation from "./components/navigation";
import StockList from './components/navigation-list';

export default class App extends React.Component {

	constructor(props) {
		super(props);
	}

	render() {
		const list = ["List1", "List2", "List3"];
		return (
			<>
				<Navigation />
				<StockList list={list} />
			</>
		);
	}
}