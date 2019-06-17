import React from "react";

export default class Trafficlight extends React.Component {
	render() {
		return (
			<div>
				<div className="trafficlighttop mx-auto" />
				<div className="trafficlightmain mx-auto">
					<div className="red light mx-auto"> </div>
					<div className="yellow light mx-auto"> </div>
					<div className="green light mx-auto"> </div>
				</div>
			</div>
		);
	}
}
