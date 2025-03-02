import React from 'react';
import TemplatePage from './templatePage';

import Icon from '@material-ui/icons/DriveEta';

function lightStrikeVehicle1Page() {

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

export default lightStrikeVehicle1Page;


const pageName = "Light Strike Vehicle I";
const creationDate = "May 2013";
const creationDescr = <div>I served in the Singapore Army from 2006-2007 as a mechanic, repairing vehicles such as Land Rovers and MAN trucks. I didn't get a chance to work on the <a href="https://www.army-technology.com/projects/spider_light_strike/" target="_blank" rel="noreferrer">Light Strike Vehicle 1</a> which was used for hit-and-run raids and scouting missions, but I've always liked how aggressive it looked. This would be the first of my military vehicle builds, and it even got featured on the <a href="https://thelegocarblog.com/2013/05/21/gun-rack/" target="_blank" rel="noreferrer">LEGO Car Blog</a> where they called it a 'ridiculously fun looking buggy'!</div>;
const creationChips = ["Remote Control", "Power Functions", "Military", "Gearbox"];
const info = [
	{
		name: "Front",
		type: "Photo",
		url: "https://1drv.ms/i/c/88f9e5f4a517d194/UQSU0Rel9OX5IICIZSQAAAAAABpqo1oiV_bmrGQ?width=1024",
		descr: "Front of the vehicle. A grey machine gun is mounted on the bonnet, while the cannons on the roof are anti-tank missile launchers."
	},
	{
		name: "Actual LSV 1",
		type: "Photo",
		url: "https://1drv.ms/i/c/88f9e5f4a517d194/UQSU0Rel9OX5IICIZCQAAAAAAL7dF4fPg9JASxU?width=1024",
		descr: <div>An actual Light Strike Vehicle I, also known as the Spider LSV (photo credits <a href="https://www.army-technology.com/projects/spider_light_strike/" target="_blank" rel="noreferrer">Army Technology</a>).</div>
	},
	{
		name: "Rear",
		type: "Photo",
		url: "https://1drv.ms/i/c/88f9e5f4a517d194/UQSU0Rel9OX5IICIZiQAAAAAAGJKCwzkiSvp87o?width=1024",
		descr: "Rear view, with spare tire."
	},
	{
		name: "Top",
		type: "Photo",
		url: "https://1drv.ms/i/c/88f9e5f4a517d194/UQSU0Rel9OX5IICIZyQAAAAAAHJAli5-hp_auIY?width=1024",
		descr: "Top view."
	},
	{
		name: "Suspension Movement",
		type: "Photo",
		url: "https://1drv.ms/i/c/88f9e5f4a517d194/UQSU0Rel9OX5IICIaCQAAAAAAOjAs8jOVzwxXV8?width=1024",
		descr: "Suspension travel is quite significant for this build, to tackle rough terrain."
	},
	{
		name: "Suspension Details",
		type: "Photo",
		url: "https://1drv.ms/i/c/88f9e5f4a517d194/UQSU0Rel9OX5IICIaSQAAAAAAEAurdi62VQOSQg?width=1024",
		descr: "I used double wishbone suspension for the front wheels, and trailing arm suspension for the rear wheels. To my knowledge, this is a faithful representation of the actual vehicle."
	},
	{
		name: "Gearbox",
		type: "Photo",
		url: "https://1drv.ms/i/c/88f9e5f4a517d194/UQSU0Rel9OX5IICIbSQAAAAAAFY5zFpfgmEqtkk?width=1024",
		descr: "I also squeezed in a 2 speed gearbox for high-low range. One limitation, however, is that the gear change has to be manually actuated by the red lever instead of via remote."
	},
	{
		name: "Bottom",
		type: "Photo",
		url: "https://1drv.ms/i/c/88f9e5f4a517d194/UQSU0Rel9OX5IICIbyQAAAAAAIVfDMBGGh4lLlc?width=1024",
		descr: "Bottom of the vehicle - the grey servomotor used for steering is mounted longitudinally, while the motor for driving the rear axle is mounted transversely."
	},
	{
		name: "Chassis",
		type: "Photo",
		url: "https://1drv.ms/i/c/88f9e5f4a517d194/UQSU0Rel9OX5IICIbiQAAAAAAN-Ka0Ep3sVfgpg?width=1024",
		descr: "Vehicle chassis - the battery pack is mounted upright behind the blue seats, while the IR receiver is mounted in front beside the steering wheel."
	},
	{
		name: "Space Frame",
		type: "Photo",
		url: "https://1drv.ms/i/c/88f9e5f4a517d194/UQSU0Rel9OX5IICIbCQAAAAAAJpsdHO8SLOLk-Q?width=1024",
		descr: "One of the distinguishing features of this vehicle is the tubular space frame, which provides rigidity while keeping the weight low."
	},
	{
		name: "Remote",
		type: "Photo",
		url: "https://1drv.ms/i/c/88f9e5f4a517d194/UQSU0Rel9OX5IICIayQAAAAAAMGafFQcFjSM_CU?width=1024",
		descr: "With the remote control - the stick on the left is for drive, while the large gear on the right is for steering."
	},
	{
		name: "Light Strike Vehicle II",
		type: "Photo",
		url: "https://1drv.ms/i/c/88f9e5f4a517d194/UQSU0Rel9OX5IICIgiQAAAAAANSSshizjBlyPJk?width=1024",
		descr: <div>UPDATE: 3 months later, I went on to design an improved Mk II. Apart from the obvious changes in styling, I completely re-designed the chassis as well. You can read more about it <a href="/gallery/lightstrikevehicle2">here</a>!</div>
	}

];
