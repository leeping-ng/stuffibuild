import React from 'react';
import TemplatePage from './templatePage';

import Icon from '@material-ui/icons/GpsFixed';

function twinGatlingGunsPage() {

	return (
		<React.Fragment>
			<TemplatePage
				pageName={pageName}
				creationDate={creationDate}
				creationDescr={creationDescr}
				creationChips={creationChips}
				info={info}
				icon={<Icon fontSize="large" />} />
		</React.Fragment>
	);
}

export default twinGatlingGunsPage;

const pageName = "Twin Gatling Guns";
const creationDate = "Aug 2013";
const creationDescr = "I had a colleague who is also a big LEGO Technic fan - in the office, his cubicle was directly opposite mine. One day, we came up with the idea of building a LEGO weapon each, and pointing it at each other's cubicle for fun. Drawing inspiration from computer games and TV shows in my childhood, I decided to build twin gatling guns. In the hype that followed, we might have caused other colleagues to start buying their own LEGO Technic sets as well!";
const creationChips = ["Power Functions"];
const info = [
	{
		name: "YouTube",
		type: "Video",
		url: "https://www.youtube.com/embed/yKREBTL2nio",
		descr: "Watch the twin gatling guns in action - the tricky part was making both barrels rotate and reciprocate (in and out) at the same time."
	},
	{
		name: "Front",
		type: "Photo",
		url: "https://1drv.ms/i/c/88f9e5f4a517d194/UQSU0Rel9OX5IICIcSQAAAAAAA5BQHK5IFMnCcs?width=660",
		descr: "The design had to be compact, in order to be mounted on top of the partition of my office cubicle."
	},
	{
		name: "Gattling Cannon from Red Alert 2",
		type: "Photo",
		url: "https://1drv.ms/i/c/88f9e5f4a517d194/UQSU0Rel9OX5IICIdCQAAAAAAGg0EkhZ-tGrHcE?width=660",
		descr: <div>The first source of inspiration for this build was the Gattling Cannon from the PC game Red Alert 2: Yuri's Revenge (photo credits <a href="https://cnc.fandom.com/wiki/Gattling_cannon_(Yuri%27s_Revenge)" target="_blank" rel="noreferrer">Command & Conquer Wiki</a>).</div>
	},
	{
		name: "Red Battlezord from Power Rangers",
		type: "Photo",
		url: "https://1drv.ms/i/c/88f9e5f4a517d194/UQSU0Rel9OX5IICIcyQAAAAAAPUxdFvJ8yj_qvI?width=660",
		descr: <div>The second source of inspiration for this build was the Red Battlezord from the Power Rangers TV series (photo credits <a href="https://www.pinterest.com/pin/642044490620653300/" target="_blank" rel="noreferrer">Pinterest</a>).</div>
	},
	{
		name: "Changing Elevation Angle",
		type: "Photo",
		url: "https://1drv.ms/i/c/88f9e5f4a517d194/UQSU0Rel9OX5IICIciQAAAAAAB1DwOHl1CGx13g?width=660",
		descr: "The elevation angle of the guns could be adjusted to aim at different heights."
	},
	{
		name: "Close-Up of Barrel",
		type: "Photo",
		url: "https://1drv.ms/i/c/88f9e5f4a517d194/UQSU0Rel9OX5IICIdyQAAAAAAKHMAlssdAhGK-0?width=660",
		descr: "Close-up of a barrel."
	},
	{
		name: "Geartrain",
		type: "Photo",
		url: "https://1drv.ms/i/c/88f9e5f4a517d194/UQSU0Rel9OX5IICIdiQAAAAAALgdtFtily5lbDs?width=660",
		descr: "Only 1 motor is used to drive the rotation and reciprocating action of both gatling guns - it does so through this set of bevel gears in the centre."
	},
	{
		name: "Geartrain 2",
		type: "Photo",
		url: "https://1drv.ms/i/c/88f9e5f4a517d194/UQSU0Rel9OX5IICIdSQAAAAAANcExnDRdVqJl9M?width=660",
		descr: "The elevation angle of the guns is adjusted by a worm gearset, which connects to the geared turntables of each gun."
	},
	{
		name: "Mounted on 42009 Set",
		type: "Photo",
		url: "https://1drv.ms/i/c/88f9e5f4a517d194/UQSU0Rel9OX5IICIeSQAAAAAANPvk90rCixdG7s?width=660",
		descr: <div>As I worked on this design, I was concurrently building the official <a href="https://www.lego.com/en-us/service/buildinginstructions/42009" target="_blank" rel="noreferrer">42009 Mobile Crane MkII</a> set that was just released. On a whim, I mounted the twin guns on the back of the vehicle, and it looked right at home there!</div>
	},
	{
		name: "Mounted on 42009 Set 2",
		type: "Photo",
		url: "https://1drv.ms/i/c/88f9e5f4a517d194/UQSU0Rel9OX5IICIeCQAAAAAAAbrG-PYavyfEA4?width=660",
		descr: "Another view of this yellow-grey combination."
	}
];
