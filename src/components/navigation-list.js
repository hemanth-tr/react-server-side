import React from 'react';
import { Container, ListGroup } from 'react-bootstrap';

export default class List extends React.Component {

	constructor(props) {
		super(props);
	}

	render() {

		const items = this.props.list;
		const listItems = items.map((item) => {
			return <ListGroup.Item>{item}</ListGroup.Item>
		})

		console.log(listItems);

		return (
			<Container>
				<ListGroup className='col-4'>
					{listItems}
				</ListGroup>
			</Container>
		)
	}

}
