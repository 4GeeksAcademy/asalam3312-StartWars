import React from 'react';
import { Link } from "react-router-dom";

export const Navbar = () => {
    return (
		<nav className="navbar navbar-light bg-light mb-3">
			<Link to="/">
				<span className="navbar-brand mb-0 h1">Star Wars</span>
			</Link>
			<div className="dropdown">
				<a className="btn btn-secondary dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
					Dropdown link
				</a>
				<ul className="dropdown-menu" aria-labelledby="dropdownMenuLink">
					<li><a className="dropdown-item" href="#">Action</a></li>
					<li><a className="dropdown-item" href="#">Another action</a></li>
					<li><a className="dropdown-item" href="#">Something else here</a></li>
				</ul>
			</div>
		</nav>
	);
}