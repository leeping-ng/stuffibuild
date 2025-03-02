import React from 'react';
import TemplatePage from './templatePage';

import Icon from '@material-ui/icons/DriveEta';

function droneTransporterPage() {

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

export default droneTransporterPage;

const pageName = "Drone Transporter";
const creationDate = "Sep 2015";
const creationDescr = <div>LEGO Technic released the excellent <a href="https://www.lego.com/en-us/service/buildinginstructions/42043" target="_blank" rel="noreferrer">Mercedes-Benz Arocs</a> truck in Aug 2015, and shortly after that, announced a Mercedes-Benz themed competition. The objective: design a Mercedes-Benz truck for the year 2045. My concept was a drone transporter truck, where the drone would be used to track erratic weather patterns caused by global warming. I also imagined a fully electric powertrain with in-hub motors, powered by batteries and ultracapacitors, with autonomous driving capabilities. This was my second LEGO competition after a successful first attempt with the <a href="/gallery/4x4crawler">4x4 crawler</a>, and although I didn't win any prizes this time, it was still an enjoyable build!</div>;
const creationChips = ["Power Functions", "Contest Submission", "Gearbox"];
const info = [
	{
		name: "YouTube",
		type: "Video",
		url: "https://www.youtube.com/embed/aerEUvTyEEQ",
		descr: "A video of the drone transporter in action. I also included some pictures of the design process."
	},
	{
		name: "Display",
		type: "Photo",
		url: "https://1drv.ms/i/c/88f9e5f4a517d194/UQSU0Rel9OX5IICIqSQAAAAAAMY5cvIfsQa3_Tw?width=1024",
		descr: "The drone is ready to be launched!"
	},
	{
		name: "Front View",
		type: "Photo",
		url: "https://1drv.ms/i/c/88f9e5f4a517d194/UQSU0Rel9OX5IICIqCQAAAAAAGt4YBXLU4nGQuY?width=1024",
		descr: "I fitted a huge silver Mercedes-Benz three-pointed star in the front of the truck. I used a rather unconventional approach - this part is actually a wheel rim with tire removed."
	},
	{
		name: "Rims",
		type: "Photo",
		url: "https://1drv.ms/i/c/88f9e5f4a517d194/UQSU0Rel9OX5IICItSQAAAAAAFrXeXsSLaNYNbc?width=1024",
		descr: "The same rim was used for all 4 wheels."
	},
	{
		name: "Headlights",
		type: "Photo",
		url: "https://1drv.ms/i/c/88f9e5f4a517d194/UQSU0Rel9OX5IICIqiQAAAAAAJ4NGTcRqSYqXCY?width=1024",
		descr: "Head lights."
	},
	{
		name: "Tail Light",
		type: "Photo",
		url: "https://1drv.ms/i/c/88f9e5f4a517d194/UQSU0Rel9OX5IICIrCQAAAAAAKWmTbAJ8wblPbk?width=1024",
		descr: "Tail lights."
	},
	{
		name: "Side View",
		type: "Photo",
		url: "https://1drv.ms/i/c/88f9e5f4a517d194/UQSU0Rel9OX5IICIqyQAAAAAAHryS-QNxz1vpGg?width=1024",
		descr: "Side view, with the drone stowed."
	},
	{
		name: "Top View",
		type: "Photo",
		url: "https://1drv.ms/i/c/88f9e5f4a517d194/UQSU0Rel9OX5IICIrSQAAAAAAPfwWin2ClNfsZE?width=1024",
		descr: "Drone ready for launch."
	},
	{
		name: "Hidden Controls",
		type: "Photo",
		url: "https://1drv.ms/i/c/88f9e5f4a517d194/UQSU0Rel9OX5IICIriQAAAAAALzzQCpcQoL8Abc?width=1024",
		descr: "The on/off switch for the battery box and the 4 levers for the gearbox are all hidden from plain sight by default."
	},
	{
		name: "Drone Deployment",
		type: "Photo",
		url: "https://1drv.ms/i/c/88f9e5f4a517d194/UQSU0Rel9OX5IICIryQAAAAAANALgH95A9XQ7tg?width=1024",
		descr: "It takes 4 steps to un-stow the drone and prepare it for launch. 1) Deploy outriggers; 2) Raise the launcher; 3) Open drone wings; 4) Rotate launcher."
	},
	{
		name: "Drone Take-off",
		type: "Photo",
		url: "https://1drv.ms/i/c/88f9e5f4a517d194/UQSU0Rel9OX5IICIsCQAAAAAANRK5cd_XlJ21jQ?width=1024",
		descr: "The drone can be detached from the truck when launched."
	},
	{
		name: "Drone Mechanism",
		type: "Photo",
		url: "https://1drv.ms/i/c/88f9e5f4a517d194/UQSU0Rel9OX5IICIsiQAAAAAACj8V8sDdmoAgko?width=1024",
		descr: "The stowed drone extends its wings for deployment. I used 4-bar linkage mechanisms on both wings."
	},
	{
		name: "Launcher Mechanism",
		type: "Photo",
		url: "https://1drv.ms/i/c/88f9e5f4a517d194/UQSU0Rel9OX5IICIsSQAAAAAAMP9YqpU2uq7g6M?width=1024",
		descr: "Mechanism of the launcher that is responsible for raising the drone, rotating it, and extending its wings."
	},
	{
		name: "Gearbox",
		type: "Photo",
		url: "https://1drv.ms/i/c/88f9e5f4a517d194/UQSU0Rel9OX5IICItCQAAAAAACn_fMwLU26X90o?width=1024",
		descr: "The gearbox that uses the output of a single motor to perform 4 different tasks."
	},
	{
		name: "Driver",
		type: "Photo",
		url: "https://1drv.ms/i/c/88f9e5f4a517d194/UQSU0Rel9OX5IICItiQAAAAAAPK-iWsGg5S1DNA?width=1024",
		descr: "I assume that a truck in 2045 would be autonomous, and the driver can just chill in his seat except for emergency situations."
	},
	{
		name: "Final",
		type: "Photo",
		url: "https://1drv.ms/i/c/88f9e5f4a517d194/UQSU0Rel9OX5IICIuCQAAAAAAN50ez87MHuWYtM?width=1024",
		descr: "Final view of the truck, with the drone and launcher platform removed."
	},

];
