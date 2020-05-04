import React, { Component } from "react";
import "../styles/Header.css";
import { NavLink } from "react-router-dom";

class Header extends React.Component {
	render() {
		return (
			<div className="header-container">
				<NavLink exact to="/shortCode">
					<div>
						<p>Crear url reducida</p>
					</div>
				</NavLink>

				<NavLink exact to="/redirectUrl">
					<div>
						<p>Redireccionar url</p>
					</div>
				</NavLink>
			</div>
		);
	}
}
export default Header;
