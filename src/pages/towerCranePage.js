import React from 'react';
import TemplatePage from './templatePage';

import Icon from '@material-ui/icons/Settings';

function towerCranePage() {

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

export default towerCranePage;

const pageName = "Tower Crane";
const creationDate = "Feb 2014";
const creationDescr = <div>About 6 months ago, a like-minded colleague and myself each built LEGO weapons, and pointed them at each other's cubicle as a lark. I designed the <a href="/gallery/twingatlingguns">twin gatling guns</a> for this, and we had a lot of fun messing with each other and showing off our creations to colleagues. We decided to do it again, but this time, the theme was: tower cranes! And therefore I started designing again...</div>;
const creationChips = ["Power Functions", "Gearbox"];
const info = [
	{
		name: "YouTube",
		type: "Video",
		url: "https://www.youtube.com/embed/le647a17z6s",
		descr: "A video of the motorised tower crane in action. The challenge I set for myself was: to only use a single motor to operate the entire tower crane, via a complex gearbox housed within the crane mast."
	},
	{
		name: "Display",
		type: "Photo",
		url: "https://1drv.ms/i/c/88f9e5f4a517d194/UQSU0Rel9OX5IICIoCQAAAAAAN4nnB5YIGBLTQc",
		descr: "With real tower cranes in the background."
	},
	{
		name: "Construction in the Background",
		type: "Photo",
		url: "https://1drv.ms/i/c/88f9e5f4a517d194/UQSU0Rel9OX5IICIoSQAAAAAAImsM8AruZaSfWk",
		descr: "Zoomed out - this photo was taken from the corridor outside my colleague's apartment. The crane was perched on top of a stool and storage box for this and the previous shot."
	},
	{
		name: "Gearbox",
		type: "Photo",
		url: "https://1drv.ms/i/c/88f9e5f4a517d194/UQSU0Rel9OX5IICIpCQAAAAAABYNAhAvuDGXzeU",
		descr: "The red selector is responsible for selecting which part of the crane is moved by the motor - the hook, trolley or jib. It took a lot of trial and error to design an arrangement where the gears and shafts fit within the 5x5 stud mast cross-section."
	},
	{
		name: "Hook Displacement",
		type: "Photo",
		url: "https://1drv.ms/i/c/88f9e5f4a517d194/UQSU0Rel9OX5IICInCQAAAAAAF4xWLDUAncvP5k",
		descr: "The hook is attached to a string, and can be moved up and down."
	},
	{
		name: "Trolley Displacement",
		type: "Photo",
		url: "https://1drv.ms/i/c/88f9e5f4a517d194/UQSU0Rel9OX5IICIoiQAAAAAAE6dg5jCfZN6AUc",
		descr: "The black trolley can be moved along the jib."
	},
	{
		name: "Trolley Mechanism",
		type: "Photo",
		url: "https://1drv.ms/i/c/88f9e5f4a517d194/UQSU0Rel9OX5IICIoyQAAAAAAJre_0PkUCt3NIA",
		descr: "Movement of the trolley is governed by a series of gears from the gearbox, and a rack and pinion gearset on the jib."
	},
	{
		name: "Jib Rotation",
		type: "Photo",
		url: "https://1drv.ms/i/c/88f9e5f4a517d194/UQSU0Rel9OX5IICImiQAAAAAAPyGSssqlq2jcUI",
		descr: "The jib can also be rotated."
	},
	{
		name: "Full Length Shot",
		type: "Photo",
		url: "https://1drv.ms/i/c/88f9e5f4a517d194/UQSU0Rel9OX5IICInSQAAAAAAOaVFONYlLkNgPw",
		descr: "The full length of the tower crane. The heavy battery pack is placed at the bottom for stability, and the driving motor at the bottom of the mast."
	},
	{
		name: "Disassembled",
		type: "Photo",
		url: "https://1drv.ms/i/c/88f9e5f4a517d194/UQSU0Rel9OX5IICIpSQAAAAAAEov1P_9uoUQIz8",
		descr: "The tower crane can be easily disassembled (this was how I managed to bring it to work)."
	},


];
