import React from "react";
import { Switch, Route } from "react-router-dom";

import "./App.scss";

import HomePage from "./pages/HomePage/HomePage";
import ShopPage from "./pages/ShopPage/ShopPage";

const TopicsList = () => {
	return (
		<div>
			<h1>Hats Page</h1>
		</div>
	);
};
const TopicDetail = () => {
	return (
		<div>
			<h1>Hats Page</h1>
		</div>
	);
};
const HatsPage = () => {
	return (
		<div>
			<h1>Hats Page</h1>
		</div>
	);
};

function App() {
	return (
		<div>
			<Switch>
				<Route exact path="/" component={HomePage} />
				<Route path="/shop" component={ShopPage} />
			</Switch>
		</div>
	);
}

export default App;
