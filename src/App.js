import React from "react";
import { Switch, Route } from "react-router-dom";

import "./App.scss";
import Home from "./pages/Home/Home";

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
				<Route exact path="/" component={Home} />
				<Route path="/hats" component={HatsPage} />
				<Route exact path="/topics" component={TopicsList} />
				<Route path="/topics/:topicId" component={TopicDetail} />
			</Switch>
		</div>
	);
}

export default App;
