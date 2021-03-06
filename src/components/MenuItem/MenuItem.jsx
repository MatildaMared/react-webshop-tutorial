import React from "react";
import { withRouter } from "react-router-dom";
import "./MenuItem.scss";

const MenuItem = ({ title, imageUrl, linkUrl, size, history, match }) => {
	console.log(match);
	return (
		<div className={`${size} menu-item`} onClick={() => history.push(`${match.url}${linkUrl}`)}>
			<div
				style={{
					backgroundImage: `url(${imageUrl})`,
				}}
				className="background-image"></div>
			<div className="content">
				<h1 className="title">{title.toUpperCase()}</h1>
				<span className="subtitle">Shop Now</span>
			</div>
		</div>
	);
};

export default withRouter(MenuItem);
