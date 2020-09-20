import React from "react";
import { Navbar } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

function NavBar() {
	return (
		<div>
			<Navbar className="navBar" bg="dark" variant="dark">
				<Navbar.Brand href="#home">Platinum Notifier</Navbar.Brand>
			</Navbar>
		</div>
	);
}

export default NavBar;
