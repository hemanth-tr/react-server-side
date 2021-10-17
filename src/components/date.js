import React from 'react';

export default class CurrentDate extends React.Component {

	constructor(props) {
		super(props);
		this.state = { date: new Date() };
	}

	render() {
		const clock = this.state.date.toDateString();
		return (
			<span>
				{clock}
			</span>
		)
	}
}