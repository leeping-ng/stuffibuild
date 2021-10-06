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
				icon={<Icon fontSize="large"/>} />
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
		url: "https://dm2304files.storage.live.com/y4ma0xMvBXnNNdioQ3_dm5ZDglChSnVHiZ94eI7E39JJrk5oRk-4miW1A2ks-5dJIqVQWINgYt4xHkyCf1X252NCmgbMRSxchwWGGy_P0hL9sW5gYwqBzNv9L7O6MRLOIQsXyhTJ5Wh5dyl0mYOU2Fnv4bHj49RbTNDfTfJDrln00fyVJzo3W9kSqkhDSeOiONc?width=5184&height=3456&cropmode=none",
		descr: "The RoboTank uses a colour sensor, touch sensor, gyro sensor, and ultrasonic sensor to sense its environment, and is propelled by two servomotors in a differential drive system."
	},
	{
		name: "Obstacle Course (Actual)",
		type: "Photo",
		url: "https://dm2304files.storage.live.com/y4msqX50IQtiaKpX2wOZP_dpI5qh-bsnKm0o_vh_Zbpn07hdq8QC7GoalrWZf5yLjUlphHFHggOlJgi-dmnf5BAzafiqn1cRbjLulvZXKUo6aSBNBjkU21uZ4Ziy9bFFFdCySBoyBV80obhEae9OIn-_47LgvGT-uOdEwZmOFUqHAPHqHhM6eeD93VrmqAQswfy?width=4032&height=3024&cropmode=none",
		descr: "The entire obstacle course. My friend and I found a quiet spot at Nanyang Technological University on a weekend for filming."
	},
    {
		name: "Obstacle Course (Layout)",
		type: "Photo",
		url: "https://dm2304files.storage.live.com/y4mml61_XQx4Dll3nxv-YpxONY7vxtywkv8SSoHLp22KYgkMHXrh2xNFWZMNCtXwdE53E87BKUjyqXbYRZ8Y_neZDDQXuPw8k2jACgRuUA3Y4J52hODvvHOUSTsSWJ2QoBcHq_v3KFHBLaLmaLPjgcTcNaHuBz2R4ZdLYIxpyjxE9hXqhgVwznx8z82WTJpuhYW?width=1004&height=669&cropmode=none",
		descr: "Layout of the obstacle course (I created this schematic for the competition guidelines). The first zone involves navigating a curved black line, the second zone requires following a wall and shooting at different targets, and the last zone involves climbing a slope and crossing a trench."
	},
    {
		name: "Robotank Parts",
		type: "Photo",
		url: "https://dm2304files.storage.live.com/y4mBLWdiH0-tYVVtbLHMvanPsRdLRMcxNDe2c6gDuiBVp5k-gUoRcT__G6AmWTQu0w5EClZMsgIEe79xd9BmZLC4qu0E9V8OeIw-7AXgmWqsWX_7HyJ-abxzqgMmPpUrwWI_8Awng7qbHEtxHW6xYjChrL8qk1zM_UslWcMwU7mPUwGFEdLRpESvyxXF3KYnyMS?width=1620&height=1078&cropmode=none",
		descr: "The RoboTank can be built with the standard Mindstorms EV3 set, with a few additional parts for the shooting mechanism."
	},
    {
		name: "Mindstorms Program",
		type: "Photo",
		url: "https://dm2304files.storage.live.com/y4mLFlkul4u7RuaIMs4snaqU3nG9mbuLS3rFZFAyUanEQC9ny6WTTt2rF3t0a9emo6JeEn4WFcd5CCYjzog75E63BpIcJWwde1B4eY9GITihlxX59Ie5XVHsWKcUf9k9uDvvHlyttvT66WAwAz0WUGwqB2qp8gBVB3aF-SZ_oP-sfjKuztpwVtLS1LOQKS1SVAs?width=5184&height=3456&cropmode=none",
		descr: <div>Instead of using the standard drag-drop LEGO Mindstorms software, I programmed the robot in C using the ROBOTC software - the code can be found on my <a href="https://github.com/leeping-ng/LEGO-Mindstorms-EV3-RoboTank" target="_blank" rel="noreferrer">GitHub page</a>.</div>
	},
	{
		name: "Zone 1",
		type: "Photo",
		url: "https://dm2304files.storage.live.com/y4mmYscqCgL009nicmlMqmZaPJYOIws5g72SzVl4CL4cgs5jHn5UKgDkfwgk-L9SyFcwgDyoPOf0MCCTDXd-VZdeMd0ipMGOTEQo0tRK_29-0ZuQpdwifmHPRKgB1yfcRQ5PjGA6Kp-ZZN_ZVjoEqbPSDwuZ6GyUqRKNhPwuUp0djbV8BE4twCqJR7SCM_f75gp?width=4032&height=3024&cropmode=none",
		descr: <div>Zone 1: Follow the black curved line. This is one of the basic tasks of robotics, and can be implemented with a light/colour sensor and a PID controller. This <a href="http://www.inpharmix.com/jps/PID_Controller_For_Lego_Mindstorms_Robots.html" target="_blank" rel="noreferrer">article</a> gives a good overview of how to implement it.</div>
	},
	{
		name: "Colour sensor",
		type: "Photo",
		url: "https://dm2304files.storage.live.com/y4man7qYvqvAVR1aflKCGcXPsBKwpWbShaU3_omw999LiU2gtNbOuVHQkP57QKTJt72TvMKA6RdAOPbCaTnC-opozdGMNqznPfAdb4cNc2dUYazf53NEGRfUUuKU1uPj5esqumn56FSDOCkAsDS4T7iFOaGNDxnSutwv1st6mL6mFoLsveqBLCWrPB9iUX5EhFy?width=5184&height=3456&cropmode=none",
		descr: "The colour sensor (with red light) points downwards to track the black line, and is nested between the 2 large servomotors used to drive the tracks of the RoboTank."
	},
	{
		name: "Zone 2",
		type: "Photo",
		url: "https://dm2304files.storage.live.com/y4mmyg8HnysB4Ik9rnAYp8fsfGEKRmZPbD-25l8SoBygtGRWrFlUWcf_ZzgPptgQzrp52O1MNwvN3w1HjefpZ3UxUoNecSdLSR77WkzWIqgFU0-LlPPSYFHr80u96A9MdgLH7H9aWi2z5GBuv-_9AfW9EM3mM74qyANPqPtTur_9cZl9EmKWptsxmWXnEAlHj2j?width=1012&height=675&cropmode=none",
		descr: "Zone 2: The black line ends, and it has to start tracking the wall using the ultrasonic sensor instead. The colour sensor is used to detect red markers on the floor, and if detected, the RoboTank has to rotate by pre-determined angles, using the gyro sensor to check the amount of rotation."
	},
	{
		name: "Ultrasonic sensor",
		type: "Photo",
		url: "https://dm2304files.storage.live.com/y4mwKP3KWVrNRq867AQTbOzpjfR0AOhzQqvHDvFgkdEGZdRCYEoAzJLx4GpzU_XAHYNbqKvD8cTZrYkEK2YcjLej_MDr0z0B-BqXqaKhJzyrmW9023LW_Hj5FGedoyU_J8Zsgx7Hb3mqdSH1zCVrvL9e4c2IVobR4C2ZQqA1o2TWQPvrXbY9CR4gbeA_QtXls02?width=5184&height=3456&cropmode=none",
		descr: "The ultrasonic sensor is used to measure distance from an object (in this case, the wall). If the distance from the wall is too great, the PID controller steers the RoboTank back towards the wall, and vice versa. This allows the RoboTank to 'track' the wall."
	},
	{
		name: "Gyro sensor",
		type: "Photo",
		url: "https://dm2304files.storage.live.com/y4mFSJhsybSKDZpD2zEp5CVS_Uoh1XsY3qtV9ThpadT10WhtfhK_NBvFr-h8YheHglRS6PC4ubvzGXVk8TiGIZ0sCDgU1ha9e3iBEKUJMvs7MvkMrq3Ph4WdgE0sH8QA4eHDL0nXRA2uHkhj1vM0yTv2IG65oHSgjtAdhrirVYUyEYJ1BrBS8TfKHpa18v3RyKH?width=4032&height=3024&cropmode=none",
		descr: "The gyro sensor (with red curved arrows) is used to check the direction the RoboTank faces. The targets are set at pre-determined angles, thus the RoboTank has to accurately steer/rotate by this amount. The gyro sensor is used to provide feedback - the robot only stop rotating if the angle is reached."
	},
    {
		name: "Shooting mechanism",
		type: "Photo",
		url: "https://dm2304files.storage.live.com/y4m8dr0d_JDSShWzLDwf7QnVG5qk83VHBm4rbhG4X9EzjsQ7wFujRlgCLw1Vngeqoho5a_ilkbo3tBdEGNhH2zb1cVgTHu0gI5rpKraHHRgBwmiY1jXi8uziDcIrShNw1dRFGqD0MUiz-Db0h5ufvnJ73W17ScCwRQfjTSGoZqBqtucLo0Jiu976wlwuMw0M3Bx?width=5184&height=3456&cropmode=none",
		descr: "The shooting mechanism is very simple - a motor pushes a plunger against the red ball. The clamp force holding the red ball in the black cage eventually forces the ball to be shot out. This is demonstrated in the YouTube video shown at the beginning of this page."
	},
    {
		name: "Zone 3",
		type: "Photo",
		url: "https://dm2304files.storage.live.com/y4mt_vAzKtMin3w9fYBgFnMG8rJbbB-EZ1cJa_AmZ-Zowi8E1R7_2a3OZcsZ79YljQDugt_Y3zI0Sa7AYjrvZPHkyo0ckSRQ5oF0hhsZZaZmPQ6Hn9qPr-5jz4iHlvTTxphtySm5eQiFBFzPG1jCMbMxTb0ehKHmDaU5fotDwFih_eHLG4HKfUBbDIxjh_F4lP5?width=682&height=455&cropmode=none",
		descr: "Zone 3: The challenge here lies more with mechanical engineering rather than software. To climb up the slope, enough torque needs to be supplied to the tracks. Additionally, the gap of the trench made it almost mandatory to use tracks over the standard wheels provided in the Mindstorms kit."
	},
    {
		name: "Touch sensor",
		type: "Photo",
		url: "https://dm2304files.storage.live.com/y4miTl8eRg6f-cjeTBz52nR7QbKaXiP4guuNNuFff4Vx8qWSybajuKyq2-6ePpiHpYqFMo4kHQbg0UPF4nggP_z02v3JjYgz_lJXgZ7whU8d6ndYPcFUQsroLIkPVdZq8pAsUPQ0na3QigSQyFx4pmDc9lYmf-iK8p7Pv7uK_tY6VbrTKS2gWzdExmRUMwFCRlX?width=5184&height=3456&cropmode=none",
		descr: "A touch sensor is connected to the front mudguard - once the mudguard touches the final wall, the program would terminate and RoboTank stops."
	},
    {
		name: "Rear",
		type: "Photo",
		url: "https://dm2304files.storage.live.com/y4m64TOB-LnSsbkD3mYxW6rBJ3UG4uSya-jRfnXAwigKOor21zBMEkDn4FaUQHjOVbop96oIlgPP_iOmzggN3HthVDeb9LjZJmfiEr3_7XwclrEVBfv7tk5bUOL6jRYXeuTIeCgjoNDztlyqiecdVGTF_u1_Qm36clW8Amb96gM_yya7RGAX8_-OA8QMJMJ_pK4?width=5184&height=3456&cropmode=none",
		descr: "Final view of RoboTank from the rear."
	},


];
