import React, { Component } from "react";
import Home from "./components/Home";
import Header from "./components/Header";
import RedirectShortCode from "./components/RedirectShortCode";
import ShortCode from "./components/ShortCode";

class ConfigRoutes extends React.Component {
	render() {
		return (
			<div>
				<Header />
				<Home />
				<RedirectShortCode />
				<ShortCode />
			</div>
		);
	}
}
export default ConfigRoutes;
