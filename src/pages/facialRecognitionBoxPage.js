import React from 'react';
import TemplatePage from './templatePage';

import Icon from '@material-ui/icons/Face';

function facialRecognitionBoxPage() {

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

export default facialRecognitionBoxPage;

const pageName = "Facial Recognition Box";
const creationDate = "Jun 2020";
const creationDescr = <div>2 major events happened since I designed the <a href="/gallery/8x8terrex">8x8 Terrex</a> in 2018: 1) I was ready to propose to my girlfriend; 2) I did a career pivot from mechanical engineering to AI. I decided to combine these by creating a LEGO box with facial recognition software for the proposal, which would open up to reveal the engagement ring when my girlfriend's face was detected. Wait a minute - LEGO has facial recognition?? Well, not really - I concealed a camera and a tiny Raspberry Pi computer running open-source facial recognition software within the LEGO box. The code for this project and details about the software can be found at my <a href="https://github.com/leeping-ng/LEGO-Facial-Recognition-Box" target="_blank" rel="noreferrer">GitHub repo</a>. Did she say YES? Read on to find out (:</div>;
const creationChips = ["AI", "Computer Vision", "Raspberry Pi"];
const info = [
	{
		name: "YouTube",
		type: "Video",
		url: "https://www.youtube.com/embed/y3Ve4oOTlAE",
		descr: "This video shows how it works, the electronics within the box, and gives a high level overview of how facial recognition technology works."
	},
	{
		name: "Facial recognition",
		type: "Photo",
		url: "https://raw.githubusercontent.com/leeping-ng/LEGO-Facial-Recognition-Box/master/images/RPi_stream.gif",
		descr: "The box only opens for one person in this world! Well, at least that's how it's supposed to work. In reality, facial recognition isn't 100% accurate, especially the open-source package that I used."
	},
	{
		name: "Display",
		type: "Photo",
		url: "https://1drv.ms/i/c/88f9e5f4a517d194/UQSU0Rel9OX5IICIBCUAAAAAAPL0QuKZNklVoxM",
		descr: "I went for a red/gold/brown colour scheme for this build. I spent a lot of effort trying to make the box look attractive, and you may have noticed that this is one of the rare builds where I mostly use non-Technic LEGO bricks! On hindsight, I realised that sub-consciously, I may have used some styling cues from Iron Man's armour..."
	},
	{
		name: "With ring",
		type: "Photo",
		url: "https://1drv.ms/i/c/88f9e5f4a517d194/UQSU0Rel9OX5IICIBiUAAAAAACyJeF9VFZVOGJ8",
		descr: "The ring can be seen right away when the box opens."
	},
	{
		name: "Fits on my palm",
		type: "Photo",
		url: "https://1drv.ms/i/c/88f9e5f4a517d194/UQSU0Rel9OX5IICIBSUAAAAAAA1brkSeCr9Dg60",
		descr: "The box is small enough to fit on the palm of my hand."
	},
	{
		name: "Oriental look",
		type: "Photo",
		url: "https://1drv.ms/i/c/88f9e5f4a517d194/UQSU0Rel9OX5IICIAyUAAAAAABOYeI6nRGFY1_E",
		descr: "I also gave the box a dash of oriental styling."
	},
	{
		name: "Bevel gears",
		type: "Photo",
		url: "https://raw.githubusercontent.com/leeping-ng/LEGO-Facial-Recognition-Box/master/images/bevel_gear.gif",
		descr: "A single servomotor drives a series of bevel gears which open or close both covers simultaneously."
	},
	{
		name: "Camera Exposed",
		type: "Photo",
		url: "https://1drv.ms/i/c/88f9e5f4a517d194/UQSU0Rel9OX5IICIAiUAAAAAAO8-smQ6EebplI4",
		descr: "The Raspberry Pi camera used here is quite flat, which was exactly what I needed."
	},
	{
		name: "Camera Hidden",
		type: "Photo",
		url: "https://1drv.ms/i/c/88f9e5f4a517d194/UQSU0Rel9OX5IICIDiUAAAAAAH2VkDn70T4U37s",
		descr: "The camera, carefully concealed behind LEGO tiles."
	},
	{
		name: "Case removed",
		type: "Photo",
		url: "https://1drv.ms/i/c/88f9e5f4a517d194/UQSU0Rel9OX5IICIByUAAAAAAEY3RKLTSHHJG8U",
		descr: "All the electronics are encased in the bottom half of the box."
	},
	{
		name: "Electronics",
		type: "Photo",
		url: "https://1drv.ms/i/c/88f9e5f4a517d194/UQSU0Rel9OX5IICICCUAAAAAAB5lR8162dECUr4",
		descr: <div>I chose a Raspberry Pi 3A+ computer because it has a square cross-section, and designed the box around it. Other electronics include a LOBOT servomotor with a LEGO output spline, a camera, battery HAT on top of the Pi with rechargeable battery, and a USB adaptor. More details can be found on my <a href="https://github.com/leeping-ng/LEGO-Facial-Recognition-Box" target="_blank" rel="noreferrer">GitHub page</a>.</div>
	},
	{
		name: "Calibration",
		type: "Photo",
		url: "https://1drv.ms/i/c/88f9e5f4a517d194/UQSU0Rel9OX5IICICSUAAAAAAPPw7Ysl6oso6hA",
		descr: "The servomotor had to be calibrated, and I used this setup to figure out the rotation angle at different duty cycles."
	},
	{
		name: "Marriage",
		type: "Photo",
		url: "https://1drv.ms/i/c/88f9e5f4a517d194/UQSU0Rel9OX5IICIDCUAAAAAACgSaESbz592n98",
		descr: "She said YES! Fast forward to 2021, we are now married (: This photo with her engagement ring was taken at our solemnisation ceremony."
	}
];
