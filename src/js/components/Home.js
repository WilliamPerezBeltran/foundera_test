import React, { Component } from "react";
import "../styles/Home.css";
import { Link } from "react-router-dom";

class Home extends React.Component {
	render() {
		return (
			<div className="app-container">
				<div className="app-title">
					<h2>Prueba foundera</h2>
				</div>

				<ul className="app-menu">
					<Link exact to="/shortCode">
						<li className="card-menu">
							<div>
								<h2>Punto 1</h2>
								<p>Crear url reducida</p>
							</div>
						</li>
					</Link>
					<Link to="/redirectUrl">
						<li className="card-menu">
							<div>
								<h2>Punto 2</h2>
								<p>Redireccionar url </p>
							</div>
						</li>
					</Link>
				</ul>
			</div>
		);
	}
}
export default Home;
