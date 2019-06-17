import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import Trafficlight from "./trafficlight.js";

//create your first component
export default class Home extends React.Component {
	render() {
		return (
			<div>
				<div>
					<Trafficlight />
				</div>
			</div>
		);
	}
}
