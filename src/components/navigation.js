import React from "react";
import { Nav, Navbar, Container } from "react-bootstrap";
import CurrentDate from "./date";
import 'bootstrap/dist/css/bootstrap.min.css';

export default class Navigation extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<Navbar bg="light" expand="lg">
				<Container>
					<Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
					<Navbar.Collapse id="basic-navbar-nav">
						<Nav className="me-auto">
							<Nav.Link href="#home">Home</Nav.Link>
						</Nav>
					</Navbar.Collapse>
					<CurrentDate />
				</Container>
			</Navbar>
		);
	}
}