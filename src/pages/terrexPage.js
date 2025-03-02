import React from 'react';
import TemplatePage from './templatePage';

import Icon from '@material-ui/icons/DriveEta';

function terrexPage() {

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

export default terrexPage;

const pageName = "8x8 Terrex";
const creationDate = "Dec 2018";
const creationDescr = <div>I first laid eyes on the <a href="https://en.wikipedia.org/wiki/Terrex_ICV" target="_blank" rel="noreferrer">Terrex</a> in 2012 and really wanted to build a LEGO version, but I didn't have enough parts then. After 6 years of collecting more Technic parts and gaining experience in other builds, I finally felt ready to design it in 2018. By then, a newer version called the Terrex 2 had been developed for trials with the U.S. Marine Corps, and I thought it looked even cooler, and decided to base my design on this. This was the most mechanically complex vehicle I had ever designed - with 8 wheel drive, 2 steerable axles, full suspension, 8 motors for different functions, and remote control capability using my phone!</div>;
const creationChips = ["Remote Control", "Power Functions", "Military"];
const info = [
	{
		name: "YouTube",
		type: "Video",
		url: "https://www.youtube.com/embed/9VBkYQ4imDo",
		descr: "Check out this video of the Terrex and its multiple features. This was filmed at West Coast Park in Singapore - my friend Freddie took the photos and videos while I controlled the Terrex."
	},
	{
		name: "Side View",
		type: "Photo",
		url: "https://1drv.ms/i/c/88f9e5f4a517d194/UQSU0Rel9OX5IICI8iQAAAAAAEKRtki5eP6Lm-c?width=1024",
		descr: "Side view of the 8x8 Terrex. '8x8' means that it has 8 wheels, and all 8 wheels are powered by the engine/motor."
	},
	{
		name: "Actual Terrex 2",
		type: "Photo",
		url: "https://1drv.ms/i/c/88f9e5f4a517d194/UQSU0Rel9OX5IICI7CQAAAAAABkNzx_yK8SmqQM?width=1024",
		descr: <div>An actual Terrex 2 (photo credits <a href="http://www.military-today.com/apc/terrex_2.htm" target="_blank" rel="noreferrer">Military Today</a>). I really like how it looks, it gives me the impression of a shark from this angle!</div>
	},
	{
		name: "LEGO Terrex 2",
		type: "Photo",
		url: "https://1drv.ms/i/c/88f9e5f4a517d194/UQSU0Rel9OX5IICI8CQAAAAAAMFPMxdaAl-ASbc?width=1024",
		descr: "My interpretation in LEGO. Some aesthetics of the actual vehicle were difficult to replicate at this scale, thus I had to trade off authenticity for a better overall look in some areas."
	},
	{
		name: "Remote",
		type: "Photo",
		url: "https://1drv.ms/i/c/88f9e5f4a517d194/UQSU0Rel9OX5IICI7iQAAAAAAM-8ZBU_Gz9v5v4?width=1024",
		descr: <div>Instead of using the standard Power Functions IR receiver and remote, I opted to use a third-party Bluetooth receiver from <a href="https://sbrick.com/" target="_blank" rel="noreferrer">SBrick</a> for 2 reasons: firstly, I could use an SBrick app on my phone to control the motors (my custom app template shown above); and secondly, Bluetooth works much better under sunlight compared to infrared.</div>
	},
	{
		name: "Electronics",
		type: "Photo",
		url: "https://1drv.ms/i/c/88f9e5f4a517d194/UQSU0Rel9OX5IICI7SQAAAAAAAG8CfdYh4LojCk?width=1024",
		descr: "I used a whopping total of 8 motors for this build - the battery box, bluetooth receivers and motors are all shown here."
	},
	{
		name: "Rear",
		type: "Photo",
		url: "https://1drv.ms/i/c/88f9e5f4a517d194/UQSU0Rel9OX5IICI6SQAAAAAAG17ZZXjE9g7vwo?width=1024",
		descr: "Rear of the Terrex. It has propellers at the back as it's an amphibious vehicle."
	},
	{
		name: "Ramp door opened",
		type: "Photo",
		url: "https://1drv.ms/i/c/88f9e5f4a517d194/UQSU0Rel9OX5IICI-SQAAAAAALOZVyMB84GT63Q?width=1024",
		descr: "The rear ramp door can be opened by remote to allow troops to dismount."
	},
	{
		name: "Top deck",
		type: "Photo",
		url: "https://1drv.ms/i/c/88f9e5f4a517d194/UQSU0Rel9OX5IICI_SQAAAAAAMk3LncGagF_oMo?width=1024",
		descr: "Top deck of the Terrex. The grille for the engine intake and exhaust is located beside the driver and commander hatches, and the trooper hatch is located behind the turret."
	},
	{
		name: "Drivetrain",
		type: "Photo",
		url: "https://1drv.ms/i/c/88f9e5f4a517d194/UQSU0Rel9OX5IICI8SQAAAAAADkVEbtlfipqJl4?width=1024",
		descr: "I'm quite proud of this drivetrain - it has 8 wheel drive with working differentials, full suspension, and 2 steerable axles. I didn't want the Terrex to be too big, and it was very challenging to design a drivetrain with all the desired features within this compact width."
	},
	{
		name: "Suspension",
		type: "Photo",
		url: "https://1drv.ms/i/c/88f9e5f4a517d194/UQSU0Rel9OX5IICI9SQAAAAAANFZ3atkW5J-MmA?width=1024",
		descr: "The suspension travel is quite significant, as shown here."
	},
	{
		name: "Coil spring",
		type: "Photo",
		url: "https://1drv.ms/i/c/88f9e5f4a517d194/UQSU0Rel9OX5IICI9iQAAAAAAJzPtC3MYoCaKrw?width=1024",
		descr: "One of the coil springs used for the rear axle."
	},
	{
		name: "Opened up",
		type: "Photo",
		url: "https://1drv.ms/i/c/88f9e5f4a517d194/UQSU0Rel9OX5IICI7yQAAAAAAAqm4mo9qzeCyaA?width=1024",
		descr: "The Terrex body opened up, to reveal the electronics within."
	},
	{
		name: "Linear actuators",
		type: "Photo",
		url: "https://1drv.ms/i/c/88f9e5f4a517d194/UQSU0Rel9OX5IICIACUAAAAAAM9id4ibU468ZEM?width=1024",
		descr: "The linear actuator here is used to open and close the 'trim vane', which is used to prevent waves from crashing over the front of the Terrex while it is swimming."
	},
	{
		name: "Driving motors",
		type: "Photo",
		url: "https://1drv.ms/i/c/88f9e5f4a517d194/UQSU0Rel9OX5IICI-yQAAAAAABqOcsJcQfV5XN8?width=1024",
		descr: "The Terrex is quite heavy, and I had to connect 2 XL-motors in series to give it a decent travel speed. I really wanted to include a gearbox to allow changing of speeds, but I ran out of space."
	},
	{
		name: "Propeller drive",
		type: "Photo",
		url: "https://1drv.ms/i/c/88f9e5f4a517d194/UQSU0Rel9OX5IICI-iQAAAAAAMhJZDITJ0EaPMI?width=1024",
		descr: "The gears shown here drive the propellers for swimming."
	},
	{
		name: "Turret",
		type: "Photo",
		url: "https://1drv.ms/i/c/88f9e5f4a517d194/UQSU0Rel9OX5IICI-CQAAAAAAPIWjWjewPiceYQ?width=1024",
		descr: "2 motors were used for the turret - one to control the weapon elevation, and one to control the weapon azimuth."
	},
	{
		name: "Cable management",
		type: "Photo",
		url: "https://1drv.ms/i/c/88f9e5f4a517d194/UQSU0Rel9OX5IICI_CQAAAAAAJlhHiXK-6X9DpQ?width=1024",
		descr: "With so many electronic components, cable management became a daunting task!"
	},
	{
		name: "On sand",
		type: "Photo",
		url: "https://1drv.ms/i/c/88f9e5f4a517d194/UQSU0Rel9OX5IICI6iQAAAAAAJuDirRgksUOyYY?width=1024",
		descr: "The LEGO Terrex is also able to move on sand, but at much slower speeds due to higher resistance."
	},
	{
		name: "Final ",
		type: "Photo",
		url: "https://1drv.ms/i/c/88f9e5f4a517d194/UQSU0Rel9OX5IICI6yQAAAAAAC9wTcjNzDMsoFY?width=1024",
		descr: "Final shot of the Terrex. Glad to have checked this off my to-build list after so many years!"
	},


];
