import React from 'react';
import TemplatePage from './templatePage';

import Icon from '@material-ui/icons/Android';

function robotankPage() {

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

export default robotankPage;

const pageName = "RoboTank";
const creationDate = "Jun 2018";
const creationDescr = <div>My previous builds were focused on mechanical engineering, but I started getting interested in robotics and bought a LEGO Mindstorms EV3 set in 2017. At that time, my organisation wanted to expose its workforce to robotics, and asked if I could teach a company-wide 1 day introductory robotics course using LEGO Mindstorms. I ended up teaching over 180 engineers in 15 course runs! I also organised a competition where engineers could put their new skills to the test, by creating robot tanks to traverse an obstacle course and take down targets. I had to build and <a href="https://github.com/leeping-ng/LEGO-Mindstorms-EV3-RoboTank" target="_blank" rel="noreferrer">write code</a> for my own robot tank for test runs before the competition, and this page showcases my design. This was a really fun project and I enjoyed myself immensely!</div>;
const creationChips = ["Robotics", "Mindstorms", "Military"];
const info = [
	{
		name: "YouTube",
		type: "Video",
		url: "https://www.youtube.com/embed/qg3koZGPkho",
		descr: "Check out this video of the RoboTank tackling the obstacle course - it also explains how the different sensors are used at different parts of the course."
	},
	{
		name: "Display",
		type: "Photo",
		url: "https://1drv.ms/i/c/88f9e5f4a517d194/UQSU0Rel9OX5IICI3CQAAAAAAGDHEx-XQbX_lNc",
		descr: "The RoboTank uses a colour sensor, touch sensor, gyro sensor, and ultrasonic sensor to sense its environment, and is propelled by two servomotors in a differential drive system."
	},
	{
		name: "Obstacle Course (Actual)",
		type: "Photo",
		url: "https://1drv.ms/i/c/88f9e5f4a517d194/UQSU0Rel9OX5IICI3iQAAAAAAPFOtl66Tks4-S8",
		descr: "The entire obstacle course. My friend and I found a quiet spot at Nanyang Technological University on a weekend for filming."
	},
	{
		name: "Obstacle Course (Layout)",
		type: "Photo",
		url: "https://1drv.ms/i/c/88f9e5f4a517d194/UQSU0Rel9OX5IICI3yQAAAAAAKVo49Q2Y_-EIZw",
		descr: "Layout of the obstacle course (I created this schematic for the competition guidelines). The first zone involves navigating a curved black line, the second zone requires following a wall and shooting at different targets, and the last zone involves climbing a slope and crossing a trench."
	},
	{
		name: "Robotank Parts",
		type: "Photo",
		url: "https://1drv.ms/i/c/88f9e5f4a517d194/UQSU0Rel9OX5IICI3SQAAAAAAEiWQiN2j0EUTMw",
		descr: "The RoboTank can be built with the standard Mindstorms EV3 set, with a few additional parts for the shooting mechanism."
	},
	{
		name: "Mindstorms Program",
		type: "Photo",
		url: "https://1drv.ms/i/c/88f9e5f4a517d194/UQSU0Rel9OX5IICI5SQAAAAAAC32G5pZ9VKl1co",
		descr: <div>Instead of using the standard drag-drop LEGO Mindstorms software, I programmed the robot in C using the ROBOTC software - the code can be found on my <a href="https://github.com/leeping-ng/LEGO-Mindstorms-EV3-RoboTank" target="_blank" rel="noreferrer">GitHub page</a>.</div>
	},
	{
		name: "Zone 1",
		type: "Photo",
		url: "https://1drv.ms/i/c/88f9e5f4a517d194/UQSU0Rel9OX5IICI1hwAAAAAANxOspMcECC-HD4",
		descr: <div>Zone 1: Follow the black curved line. This is one of the basic tasks of robotics, and can be implemented with a light/colour sensor and a PID controller. This <a href="http://www.inpharmix.com/jps/PID_Controller_For_Lego_Mindstorms_Robots.html" target="_blank" rel="noreferrer">article</a> gives a good overview of how to implement it.</div>
	},
	{
		name: "Colour sensor",
		type: "Photo",
		url: "https://1drv.ms/i/c/88f9e5f4a517d194/UQSU0Rel9OX5IICIyhwAAAAAAIIe7bsKB183WjI",
		descr: "The colour sensor (with red light) points downwards to track the black line, and is nested between the 2 large servomotors used to drive the tracks of the RoboTank."
	},
	{
		name: "Zone 2",
		type: "Photo",
		url: "https://1drv.ms/i/c/88f9e5f4a517d194/UQSU0Rel9OX5IICI4CQAAAAAAJyfbtKwGrlA_fk",
		descr: "Zone 2: The black line ends, and it has to start tracking the wall using the ultrasonic sensor instead. The colour sensor is used to detect red markers on the floor, and if detected, the RoboTank has to rotate by pre-determined angles, using the gyro sensor to check the amount of rotation."
	},
	{
		name: "Ultrasonic sensor",
		type: "Photo",
		url: "https://1drv.ms/i/c/88f9e5f4a517d194/UQSU0Rel9OX5IICI4iQAAAAAAB3NvG-Ldck--DY",
		descr: "The ultrasonic sensor is used to measure distance from an object (in this case, the wall). If the distance from the wall is too great, the PID controller steers the RoboTank back towards the wall, and vice versa. This allows the RoboTank to 'track' the wall."
	},
	{
		name: "Gyro sensor",
		type: "Photo",
		url: "https://1drv.ms/i/c/88f9e5f4a517d194/UQSU0Rel9OX5IICI4yQAAAAAAJpKrh78oNV1_Qc",
		descr: "The gyro sensor (with red curved arrows) is used to check the direction the RoboTank faces. The targets are set at pre-determined angles, thus the RoboTank has to accurately steer/rotate by this amount. The gyro sensor is used to provide feedback - the robot only stop rotating if the angle is reached."
	},
	{
		name: "Shooting mechanism",
		type: "Photo",
		url: "https://1drv.ms/i/c/88f9e5f4a517d194/UQSU0Rel9OX5IICI5CQAAAAAAMrQnK6txSH5rOo",
		descr: "The shooting mechanism is very simple - a motor pushes a plunger against the red ball. The clamp force holding the red ball in the black cage eventually forces the ball to be shot out. This is demonstrated in the YouTube video shown at the beginning of this page."
	},
	{
		name: "Zone 3",
		type: "Photo",
		url: "https://1drv.ms/i/c/88f9e5f4a517d194/UQSU0Rel9OX5IICI4SQAAAAAAMi1Ezm3j8WsKU8",
		descr: "Zone 3: The challenge here lies more with mechanical engineering rather than software. To climb up the slope, enough torque needs to be supplied to the tracks. Additionally, the gap of the trench made it almost mandatory to use tracks over the standard wheels provided in the Mindstorms kit."
	},
	{
		name: "Touch sensor",
		type: "Photo",
		url: "https://1drv.ms/i/c/88f9e5f4a517d194/UQSU0Rel9OX5IICI5iQAAAAAAGMLAWxifx6jWfM",
		descr: "A touch sensor is connected to the front mudguard - once the mudguard touches the final wall, the program would terminate and RoboTank stops."
	},
	{
		name: "Rear",
		type: "Photo",
		url: "https://1drv.ms/i/c/88f9e5f4a517d194/UQSU0Rel9OX5IICIzxwAAAAAAMppG-HikCdOk4g",
		descr: "Final view of RoboTank from the rear."
	},


];
