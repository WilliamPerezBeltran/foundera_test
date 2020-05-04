import React, { Component } from "react";
import "../styles/ShortCode.css";
import Header from "./Header";

class ShortCode extends React.Component {
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
						<h2>Crear url reducida</h2>
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
								placeholder="redusca su link"
							/>
							<input type="submit" value="Submit" />
						</form>
					</div>
				</div>
			</div>
		);
	}
}
export default ShortCode;
