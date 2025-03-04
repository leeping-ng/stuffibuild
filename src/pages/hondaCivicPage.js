import React from 'react';
import TemplatePage from './templatePage';

import Icon from '@material-ui/icons/DriveEta';

function hondaCivicPage() {

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

export default hondaCivicPage;


const pageName = "Honda Civic";
const creationDate = "May 2012";
const creationDescr = <div>After building the <a href="/gallery/sportscar">sports car</a> a few months ago, I was keen to design another one – this time with remote-controlled functionality using LEGO Power Functions. I decided to model it after the Honda Civic EG6 hatchback, as I grew fond of Civics from learning to drive in one, and from playing Need For Speed Underground. I had just finished my final exams in college, and had a few weeks to spare before my grad trip, and so I started building…</div>;
const creationChips = ["Remote Control", "Power Functions"];
const info = [
	{
		name: "Front LEGO",
		type: "Photo",
		url: "https://1drv.ms/i/c/88f9e5f4a517d194/UQSU0Rel9OX5IICIJSQAAAAAAIF52lvrqYQ-qiQ?width=660",
		descr: "Front of the car - I made the hood black to look like carbon fibre."
	},
	{
		name: "Front Original",
		type: "Photo",
		url: "https://1drv.ms/i/c/88f9e5f4a517d194/UQSU0Rel9OX5IICIPCQAAAAAAIHXKp6AUazYm4c?width=660",
		descr: <div>Front end of an actual Honda Civic EG6 (photo credits <a href="https://www.9tro.com/media/cars/honda-civic-eg6-hope-for-honda?page={{pg.value}}" target="_blank" rel="noreferrer">9tro</a>).</div>
	},
	{
		name: "Rear LEGO",
		type: "Photo",
		url: "https://1drv.ms/i/c/88f9e5f4a517d194/UQSU0Rel9OX5IICIKCQAAAAAADSehrJONJlMo14?width=660",
		descr: "Rear of the car - it has a 'carbon fibre' spoiler. The rear corner with tail lights could look better, but I had to make do with limited LEGO bricks at that point in time. In fact, you'll notice 2 different shades of grey - some of the older looking bricks were from my childhood!"
	},
	{
		name: "Rear Original",
		type: "Photo",
		url: "https://1drv.ms/i/c/88f9e5f4a517d194/UQSU0Rel9OX5IICIPSQAAAAAALuAehg4woWQJEY?width=660",
		descr: <div>Rear end of an actual Honda Civic EG6 (photo credits <a href="https://www.9tro.com/media/cars/honda-civic-eg6-hope-for-honda?page={{pg.value}}" target="_blank" rel="noreferrer">9tro</a>).</div>
	},
	{
		name: "Side",
		type: "Photo",
		url: "https://1drv.ms/i/c/88f9e5f4a517d194/UQSU0Rel9OX5IICIKiQAAAAAABuF-dwRg4yS0WI?width=660",
		descr: <div>One of the major aesthetic improvements over the previous <a href="/gallery/sportscar">sports car</a> was to make the wheel size more proportional, by increasing the tire diameter from 30mm to 43mm. I was also pleased with the clean lines of the front wheel arches and the striking gold rims.</div>
	},
	{
		name: "Bottom",
		type: "Photo",
		url: "https://1drv.ms/i/c/88f9e5f4a517d194/UQSU0Rel9OX5IICINiQAAAAAAIci0RTZB2_FSUA?width=660",
		descr: "Bottom view - the biggest challenge of this build was to fit the large LEGO battery box that holds 6 AA batteries, and arrange the other components around it."
	},
	{
		name: "Top",
		type: "Photo",
		url: "https://1drv.ms/i/c/88f9e5f4a517d194/UQSU0Rel9OX5IICIKyQAAAAAAOQNvwkDwllB6bg?width=660",
		descr: "Top view - the IR antenna for remote control was disguised as part of the black sunroof."
	},
	{
		name: "Opened Doors",
		type: "Photo",
		url: "https://1drv.ms/i/c/88f9e5f4a517d194/UQSU0Rel9OX5IICILCQAAAAAAMLQO7rm_CBK0EY?width=660",
		descr: "The hood, trunk, and both doors can be opened."
	},
	{
		name: "Rack and pinion",
		type: "Photo",
		url: "https://1drv.ms/i/c/88f9e5f4a517d194/UQSU0Rel9OX5IICILiQAAAAAAIxRXU-limlmiuc?width=660",
		descr: "Rack and pinion steering, controlled by a Medium motor. I didn't have a Servomotor yet, so I created the yellow-red mechanism with rubber bands to centre the steering at neutral position. Also, note the large width of tires - the wheel arches had to be quite large to accommodate them when steered."
	},
	{
		name: "Drivetrain",
		type: "Photo",
		url: "https://1drv.ms/i/c/88f9e5f4a517d194/UQSU0Rel9OX5IICIMCQAAAAAAPOmRyGmOknOMMw?width=660",
		descr: "A Medium motor directly drives the rear axle through a series of spur gears."
	},
	{
		name: "Blueprint",
		type: "Photo",
		url: "https://1drv.ms/i/c/88f9e5f4a517d194/UQSU0Rel9OX5IICINCQAAAAAAOEWIuQAXdkz0DM?width=660",
		descr: "Using a blueprint of the actual car, I first decided on the wheel size, then proportioned the rest of the car accordingly."
	},
	{
		name: "Remote",
		type: "Photo",
		url: "https://1drv.ms/i/c/88f9e5f4a517d194/UQSU0Rel9OX5IICILSQAAAAAAFqEsJmyGa7RdnY?width=660",
		descr: "The remote control - the stick on the left is for drive, while the steering wheel on the right is for steering."
	}

];
