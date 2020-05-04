import React, { Component } from "react";
import "../styles/Home.css";
import { Link } from "react-router-dom";

class Home extends React.Component {
	render() {
		return (
			<div>
				<ul>
					<li>
						<Link exact to="/shortCode">
							<div>
								<h2>Punto 1</h2>
								<p>Crear url reducida</p>
							</div>
						</Link>
					</li>
					<li>
						<Link to="/redirectUrl">
							<div>
								<h2>Punto 2</h2>
								<p>Redireccionar url </p>
							</div>
						</Link>
					</li>
				</ul>
			</div>
		);
	}
}
export default Home;
