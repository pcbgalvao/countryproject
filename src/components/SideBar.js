import React, { useState, useEffect, useRef } from "react";
import ListCountries from './ListCountries'

const REGIONS = [
	"Africa",
	"Americas",
	"Asia",
	"Europe",
	"Oceania",
];


const SideBar = (props) => {
	const { region } = props;
	const [country, setCountry] = useState("");

	useEffect(() => {
		const sidebarElement = document.getElementsByClassName('sidebar')[0];
		if (region) {
			sidebarElement.className = "ui visible right sidebar";
		} else {
			sidebarElement.className = "ui right sidebar";
		}

	}, [region]);

	useEffect(() => {

	}, [region])

	return (
		<div className="">
			<div className="ui centered title">
				Region : {region}
				<ListCountries region={region} country={country} />
			</div>
		</div>
	)
}

export default SideBar;