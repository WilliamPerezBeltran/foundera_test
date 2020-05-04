import React, { Component } from "react";
import Home from "./components/Home";
import Header from "./components/Header";
import RedirectUrl from "./components/RedirectUrl";
import ShortCode from "./components/ShortCode";
import { Switch, Route } from "react-router-dom";

class ConfigRoutes extends Component {
	render() {
		return (
			<Switch>
				<Route exact path="/" render={(props) => <Home />} />
				<Route path="/shortCode" render={(props) => <ShortCode />} />
				<Route
					path="/redirectUrl"
					render={(props) => <RedirectUrl />}
				/>
			</Switch>
		);
	}
}

export default ConfigRoutes;
