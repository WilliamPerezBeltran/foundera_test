import React, { Component } from "react";
import "../styles/RedirectUrl.css";
import Header from "./Header";

class RedirectUrl extends React.Component {
	constructor(props) {
		super(props);
		this.state = { value: "" };

		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleChange(event) {
		this.setState({ value: event.target.value });
	}

	handleSubmit(event) {
		alert("A name was submitted: " + this.state.value);
		event.preventDefault();
	}

	render() {
		return (
			<div>
				<Header />
				<div className="container-short">
					<div className="container-title">
						<h2>Redireccionar url </h2>
					</div>
					<div>
						<form
							className="container-form"
							onSubmit={this.handleSubmit}
						>
							<input
								type="text"
								value={this.state.value}
								onChange={this.handleChange}
								placeholder="Agregue su link "
							/>
							<input type="submit" value="Submit" />
						</form>
					</div>
				</div>
			</div>
		);
	}
}
export default RedirectUrl;
