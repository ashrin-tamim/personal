import React from "react";

export default class HoverCounter extends React.Component {
	render() {
		const { count, incrementCount } = this.props;
		return (
			<div>
				<h1 onMouseOver={incrementCount}>Hover {count} times.</h1>
			</div>
		);
	}
}
