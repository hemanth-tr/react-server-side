import React from 'react';
import { Container, ListGroup } from 'react-bootstrap';

export default class StockList extends React.Component {

	constructor(props) {
		super(props);
	}

	render() {

		const items = this.props.list;
		const listItems = items.map((item) => {
			return <ListGroup.Item>{item}</ListGroup.Item>
		});

		return (
			<Container>
				<ListGroup className='col-4 mt-4'>
					{listItems}
				</ListGroup>
			</Container>
		)
	}

}
