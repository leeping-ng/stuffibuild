import React from 'react';
import TemplatePage from './templatePage';

import Icon from '@material-ui/icons/DriveEta';

function sportsCarPage() {

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

export default sportsCarPage;



const pageName = "Sports Car";
const creationDate = "Dec 2011";
const creationDescr = "This was my first LEGO design as an adult - designed in Dec 2011, during my final year in college. When I was a kid, I enjoyed building small, functional car models, using rubber bands for suspensions. As I grew up, I went through a decade of LEGO “Dark Ages” where I stopped touching LEGO bricks. My interest in LEGO was piqued again as an adult, when I started noticing high quality LEGO Technic sets coming out in the late 2000s. I decided to design this black sports car with the limited bricks I had at that time, to see how much better I got at designing as an adult, and with some training as a vehicle mechanic and from studying mechanical engineering.";
const creationChips = [];
const info = [
	{
		name: "Front",
		type: "Photo",
		url: "https://1drv.ms/i/c/88f9e5f4a517d194/UQSU0Rel9OX5IICIIiQAAAAAAGObUmSwZRYSeqM?width=660",
		descr: "The front end is loosely based on one of my favourite cars - the Nissan R34 GTR."
	},
	{
		name: "Rear",
		type: "Photo",
		url: "https://1drv.ms/i/c/88f9e5f4a517d194/UQSU0Rel9OX5IICIVCAAAAAAABPsfBubXZmgbrc?width=660",
		descr: "The 4 round tail lights were also inspired by the Nissan R34 GTR, as well as the Ferrari 360 Modena."
	},
	{
		name: "Gullwing Doors",
		type: "Photo",
		url: "https://1drv.ms/i/c/88f9e5f4a517d194/UQSU0Rel9OX5IICIViAAAAAAACX2BHEj7TM4RKE?width=660",
		descr: "I included gullwing doors because I thought they were cool, and I was interested to incorporate a spring-loaded mechanism for opening them."
	},
	{
		name: "Lego Technic figures",
		type: "Photo",
		url: "https://1drv.ms/i/c/88f9e5f4a517d194/UQSU0Rel9OX5IICIIyQAAAAAAOM9z3kThzMEv6k?width=660",
		descr: "The car was designed to fit the standard LEGO Technic human figures."
	},
	{
		name: "Steering",
		type: "Photo",
		url: "https://1drv.ms/i/c/88f9e5f4a517d194/UQSU0Rel9OX5IICIUyAAAAAAAF-N6w4ztzoz9VE?width=660",
		descr: "The front axle has steerable wheels, and suspension using coil springs."
	},
	{
		name: "Rack and pinion",
		type: "Photo",
		url: "https://1drv.ms/i/c/88f9e5f4a517d194/UQSU0Rel9OX5IICITyAAAAAAACRsNHMVLUzdI6A?width=660",
		descr: "Steering works by a rack and pinion system, with a set of bevel gears allowing me to steer it from the top."
	},
	{
		name: "Suspension",
		type: "Photo",
		url: "https://1drv.ms/i/c/88f9e5f4a517d194/UQSU0Rel9OX5IICIUCAAAAAAAO9GXN5qjaIawAU?width=660",
		descr: "Both front and rear axles have suspension. I must admit that the size of the wheels look disproportionate to the car body, and this was something I wanted to improve on in future builds."
	},
	{
		name: "Engine",
		type: "Photo",
		url: "https://1drv.ms/i/c/88f9e5f4a517d194/UQSU0Rel9OX5IICIWSAAAAAAADmtXsp8mbDQg8Y?width=660",
		descr: "The rear axle drives the yellow pistons in this V4 engine block."
	},
	{
		name: "Drivetrain",
		type: "Photo",
		url: "https://1drv.ms/i/c/88f9e5f4a517d194/UQSU0Rel9OX5IICIWyAAAAAAACZm61GVgJtvrBU?width=660",
		descr: "This shows the drivetrain connecting the rear axle to the engine block."
	},
	{
		name: "Final",
		type: "Photo",
		url: "https://1drv.ms/i/c/88f9e5f4a517d194/UQSU0Rel9OX5IICIVyAAAAAAAIWeGYsFmmxtp-E?width=660",
		descr: "Front view with two drivers, to complete the showcase for this build. I decided that my next challenge would be adding remote control functionality to a car of a similar scale."
	}

];
