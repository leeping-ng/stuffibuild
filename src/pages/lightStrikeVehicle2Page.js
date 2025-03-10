import React from 'react';
import TemplatePage from './templatePage';

import Icon from '@material-ui/icons/DriveEta';

function lightStrikeVehicle2Page() {

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

export default lightStrikeVehicle2Page;


const pageName = "Light Strike Vehicle II";
const creationDate = "Aug 2013";
const creationDescr = <div>In May 2013, I finished designing the <a href="/gallery/lightstrikevehicle1">Light Strike Vehicle I</a> (Mk I) in black, which was in service with the Singapore Army since 1998. It would be replaced by the new <a href="https://en.wikipedia.org/wiki/Light_Strike_Vehicle_(Singapore)" target="_blank" rel="noreferrer">Light Strike Vehicle II</a> (Mk II) in 2013, which in my opinion, looked even more fun and aggressive. I could not resist the temptation to style the new vehicle, thus I tore down my Mk I design and started building Mk II...</div>;
const creationChips = ["Remote Control", "Power Functions", "Military"];
const info = [
	{
		name: "LEGO LSV II",
		type: "Photo",
		url: "https://1drv.ms/i/c/88f9e5f4a517d194/UQSU0Rel9OX5IICIfSQAAAAAAOdJad5qUOiua0c?width=660",
		descr: "I enjoyed weaving green and black body panels into this build, attempting to replicate the original look as much as possible."
	},
	{
		name: "Actual LSV II",
		type: "Photo",
		url: "https://1drv.ms/i/c/88f9e5f4a517d194/UQSU0Rel9OX5IICIeyQAAAAAABN_ZPB0uRBnzhI?width=660",
		descr: <div>An actual Light Strike Vehicle II (photo credits <a href="https://defense-studies.blogspot.com/2013/06/the-saf-newcomer-will-make-its-public.html?m=1" target="_blank" rel="noreferrer">Defense Studies</a>). I think it looks amazing!</div>
	},
	{
		name: "Actual LSV I versus LSV II",
		type: "Photo",
		url: "https://1drv.ms/i/c/88f9e5f4a517d194/UQSU0Rel9OX5IICIiCQAAAAAANKaVoGgjyD4Vcw?width=660",
		descr: <div>The original Light Strike Vehicle Mk I on the left, with the new Mk II on the right (photo credits <a href="https://www.flickr.com/photos/xtemujin/9224140004" target="_blank" rel="noreferrer">Flickr</a>).</div>
	},
	{
		name: "LEGO LSV I versus LSV II",
		type: "Photo",
		url: "https://1drv.ms/i/c/88f9e5f4a517d194/UQSU0Rel9OX5IICIiyQAAAAAAKs9gplUYf53GSQ?width=660",
		descr: <div>A comparison of my Mk I (left) and Mk II (right) designs. Check out more details of my LEGO Mk I <a href="/gallery/lightstrikevehicle1">here</a>.</div>
	},
	{
		name: "Front",
		type: "Photo",
		url: "https://1drv.ms/i/c/88f9e5f4a517d194/UQSU0Rel9OX5IICIgSQAAAAAAHRMdu3_b4cU9mo?width=660",
		descr: "Close-up of the front end."
	},
	{
		name: "Close-Up of Tail Light",
		type: "Photo",
		url: "https://1drv.ms/i/c/88f9e5f4a517d194/UQSU0Rel9OX5IICIgCQAAAAAAHNV92rKOQU8BJU?width=660",
		descr: "Close-up of a tail light."
	},
	{
		name: "Rear",
		type: "Photo",
		url: "https://1drv.ms/i/c/88f9e5f4a517d194/UQSU0Rel9OX5IICIfCQAAAAAAEl2SYApVRe2bSg?width=660",
		descr: "The spare tire is mounted between the tail lights."
	},
	{
		name: "Seats 6",
		type: "Photo",
		url: "https://1drv.ms/i/c/88f9e5f4a517d194/UQSU0Rel9OX5IICIfyQAAAAAAGMmO8fvRd9Ki6Q?width=660",
		descr: "It can seat 6, and front seats have a layout that's similar to a McLaren F1 - with a central steering wheel and driver seat positioned more forward."
	},
	{
		name: "Bottom",
		type: "Photo",
		url: "https://1drv.ms/i/c/88f9e5f4a517d194/UQSU0Rel9OX5IICIgyQAAAAAAK1AhUwwS2ZY8ik?width=660",
		descr: "The grey Power Functions battery box is mounted right in the middle of the chassis, and the servomotor used for steering is right in front of the box."
	},
	{
		name: "Chassis",
		type: "Photo",
		url: "https://1drv.ms/i/c/88f9e5f4a517d194/UQSU0Rel9OX5IICIhCQAAAAAAD8ekvSorHmdF7A?width=660",
		descr: "The chassis on its own."
	},
	{
		name: "Front Suspension",
		type: "Photo",
		url: "https://1drv.ms/i/c/88f9e5f4a517d194/UQSU0Rel9OX5IICIhSQAAAAAAPGImaZjOdJIAPI?width=660",
		descr: "Double wishbones for front suspension."
	},
	{
		name: "Rear Suspension",
		type: "Photo",
		url: "https://1drv.ms/i/c/88f9e5f4a517d194/UQSU0Rel9OX5IICIhiQAAAAAAHERU8hKax2ulCc?width=660",
		descr: "Trailing arm suspension for rear wheels. A XL-motor is used to drive the rear wheels."
	},
	{
		name: "Remote",
		type: "Photo",
		url: "https://1drv.ms/i/c/88f9e5f4a517d194/UQSU0Rel9OX5IICIgiQAAAAAANSSshizjBlyPJk?width=660",
		descr: "With the remote control - the stick on the left is for drive, while the large gear on the right is for steering."
	},
	{
		name: "Driver",
		type: "Photo",
		url: "https://1drv.ms/i/c/88f9e5f4a517d194/UQSU0Rel9OX5IICIhyQAAAAAAKTtv-a03xmrDj0?width=660",
		descr: "One last look."
	},
];
