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
				icon={<Icon fontSize="large"/>} />
		</React.Fragment>
	);
	}

export default facialRecognitionBoxPage;

const pageName = "Facial Recognition Box";
const creationDate = "Jun 2020";
const creationDescr = <div>2 major events happened since I designed the <a href="#/gallery/8x8terrex">8x8 Terrex</a> in 2018: 1) I was ready to propose to my girlfriend; 2) I did a career pivot from mechanical engineering to AI. I decided to combine these by creating a LEGO box with facial recognition software for the proposal, which would open up to reveal the engagement ring when my girlfriend's face was detected. Wait a minute - LEGO has facial recognition?? Well, not really - I concealed a camera and a tiny Raspberry Pi computer running open-source facial recognition software within the LEGO box. The code for this project and details about the software can be found at my <a href="https://github.com/leeping-ng/LEGO-Facial-Recognition-Box" target="_blank" rel="noreferrer">GitHub repo</a>. Did she say YES? Read on to find out (:</div>;
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
		url: "https://dm2304files.storage.live.com/y4mJjLKLBKwBlrZh6ciDx0d3iWrH2eH-YGKxEZGZGYdnr56_9rPpmXyqYJxU9AZxWO1sGgr3gJGSN4b6kQDR7WoCP6DluFXVIZkk7Rdn74_ctqvRZ0mm7-tBNop0-JSAaFGmnDgmdUJ2tbNvo13hBybQynDUN_jKWDzNst83Ppc9SyNpUNP2G4capw3Fy8vzBc-?width=4128&height=2322&cropmode=none",
		descr: "I went for a red/gold/brown colour scheme for this build. I spent a lot of effort trying to make the box look attractive, and you may have noticed that this is one of the rare builds where I mostly use non-Technic LEGO bricks! On hindsight, I realised that sub-consciously, I may have used some styling cues from Iron Man's armour..."
	},
    {
		name: "With ring",
		type: "Photo",
		url: "https://dm2304files.storage.live.com/y4m8veIKTYj__fVuuV1E7wV0wg_WDUlgzA5a4c6uu630oza4MuqTKsy4Wwu6wM3FDRO-20AxHvAh4QBxqUzQsP9fJXQ7duRKv_mCGElbgRegZcAMIsAlSuAXsJLQq1vRnxfwd3Nu7j92wJ1gvykBVuohxkyQwhxjW1-p3CjQhBsa_on3J95l0KdoL9dnosxVl42?width=4128&height=2322&cropmode=none",
		descr: "The ring can be seen right away when the box opens."
	},
	{
		name: "Fits on my palm",
		type: "Photo",
		url: "https://dm2304files.storage.live.com/y4mg5x4EWZV-J5WCb4TEYj5g277SYDcZ7xB7gbb6GD6eJ5ySAeRNe1_JSKVA43qPX9vEUroDwud5NuojWxJeSGWEMMqnG8-X9hTZOLz2MGWsYQThMh_YqcJruG2Jlc-bGOcDlaurtjuIwNo9J65AKNLxFs0DbjPpUORpXUjrdUIfidMGEUJYFEuwxhNpmGwix63?width=4128&height=2322&cropmode=none",
		descr: "The box is small enough to fit on the palm of my hand."
	},
    {
		name: "Oriental look",
		type: "Photo",
		url: "https://dm2304files.storage.live.com/y4mPD24dFrVZWflWN426mEZG887DefE7LLGyVnPN881ufSLTPSgouslGX54Z3Fkhma9tetD8qHzgl3iUBsJEe4jJC41zhTzmqLttXDqVR7z8gEVHlHXsGLHsTGTN3XaJGBuiN3qTKc0MAIL_3IiWYSvTw0AFq0FW-pAjKo2mIJvuV-4Sx8446BQ9u3ZQYBjg4pq?width=4128&height=2322&cropmode=none",
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
		url: "https://dm2304files.storage.live.com/y4mIijWP44nE7wKBlhGOm9UqXm_PHq3xFLba7ckiDbQLaFR7las40LPtggGwRTTjnsj9RfKuQ6xewYlhPFGmL-BrNC3lY2F221rLkpBanDxjEYXM4RVew-i1g78jOz2QvF-801Uwvqo8R7Ly0ODggLIIzNqsq0_KBTVmo3NdmEX9kpYmLdMDJd7Xy-STCLtUM11?width=4128&height=2322&cropmode=none",
		descr: "The Raspberry Pi camera used here is quite flat, which was exactly what I needed."
	},
	{
		name: "Camera Hidden",
		type: "Photo",
		url: "https://dm2304files.storage.live.com/y4m3C8AuIaFDqYVn24svDJNQjKVN4mOyh9_RtVgkEkvgtYeHDP2cUosr9-3Q29g94eM7fgil_YVG-zpXaXoNj4zEd-yMa_eEZYvcLc_yTn9I23q1B9BdxoB45Hl5G0vy7JmX1xkc_vCdrzSUdvCJ9IOuwFgH0nz_LMS5DwYeVBTTaBQO8mAl_WQUlx0BiNN9U5l?width=4128&height=2322&cropmode=none",
		descr: "The camera, carefully concealed behind LEGO tiles."
	},
	{
		name: "Case removed",
		type: "Photo",
		url: "https://dm2304files.storage.live.com/y4meuxlO-IJ-m7h9WqSb0AkJU9lrBiObO84IDSvpnHY-h-Fj1kS6lLYS8BFHXBor8ZHVmmjj4b8k5bOQG2otOPCGN6Bh8Vq-c7D2VitjS6EHGlmi7pMyMnyGcvaAjpdf_UgBdwqHFoRpfXdzLyjDs_VuWMc8RO83t4TBUbXusMWN-UbU4tD8Tj60TbtxsMKY4RC?width=4128&height=2322&cropmode=none",
		descr: "All the electronics are encased in the bottom half of the box."
	},
	{
		name: "Electronics",
		type: "Photo",
		url: "https://dm2304files.storage.live.com/y4mYxAz5zlDo4AfgJ1WuiOBRXdtJAs9-6IDLSc6h6WanKKBOuyOOvbmr8Hj0pqOSSEYXagf1Scxvyjz2B9wC1l9V1CJmxcnWlT-9zYqB99ylfFO3NKhw_sPzd0ZfoHiLQz_DXCCrjtBsp8Y8OXWdMHvREWGugB2zTbSJ989YSmxGA8bEkJkl6Piv9QZDdFW-gFg?width=4128&height=2322&cropmode=none",
		descr: <div>I chose a Raspberry Pi 3A+ computer because it has a square cross-section, and designed the box around it. Other electronics include a LOBOT servomotor with a LEGO output spline, a camera, battery HAT on top of the Pi with rechargeable battery, and a USB adaptor. More details can be found on my <a href="https://github.com/leeping-ng/LEGO-Facial-Recognition-Box" target="_blank" rel="noreferrer">GitHub page</a>.</div>
	},
	{
		name: "Calibration",
		type: "Photo",
		url: "https://dm2304files.storage.live.com/y4maTVxu3C3wTdVTIMkJVvz0CZ_YPU31O2n0X_JjTQgy7r0BO3gLDs-8FoLn9evwY86rTwcrHxDQr4GclGw7Xp2ccGiQs80nmUskwTVYIXuh3A7upmY9moQ0hFP2W3ZwWRxzayWDJ-Zjz5p4a2d0OvqL2iZP8AunfDybEM8lih1EEWoQmB3ATn0fWrFHNCdl0zD?width=2996&height=1974&cropmode=none",
		descr: "The servomotor had to be calibrated, and I used this setup to figure out the rotation angle at different duty cycles."
	},
	{
		name: "Marriage",
		type: "Photo",
		url: "https://dm2304files.storage.live.com/y4metO67JEEDH0aBihln3Oj6Eado80-zQZydvUriheazMlPDdZ_ue56tKCtwbzJ9c9hOSpmBropl2Y6DQLSq8N0xmH__GJvDzoOjzCWVM8PGdZfdlbNDtC6XeWJSfvue20Z4nCJgmoisEVOrrSeESQP96Qf4WVbnoCilPKG7yeHF4SamExCKNK69HYfgVJKtU5D?width=4800&height=3200&cropmode=none",
		descr: "She said YES! Fast forward to 2021, we are now married (: This photo with her engagement ring was taken at our solemnisation ceremony."
	}
];
