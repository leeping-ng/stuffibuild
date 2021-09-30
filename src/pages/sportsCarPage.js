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
				icon={<Icon fontSize="large"/>} />
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
		url: "https://dm2304files.storage.live.com/y4mULEzawX7p8Pv9VvGOm0rHWlwn-vy6D40NUmKOjtsIJpDleg2y7phsnbxwNK-oqSmvIHnM7H05wjZQ1Mov_T6mUXoH81oYuHsnrcW0Ov-CGLiXCpmPlI_TTQNDQ9y8V6fndxsSvcOW-ZJwYVobxqpVuGZq0a6kQUxmqQdwW9rexCgLAxJQb4G7Hj_lSEp5hos?width=2816&height=2112&cropmode=none",
		descr: "The front end is loosely based on one of my favourite cars - the Nissan R34 GTR."
	},
	{
		name: "Rear",
		type: "Photo",
		url: "https://dm2304files.storage.live.com/y4mxD9z2hZKMcd4nz5TBNoB_xAKZ5zDqYiX1dCa2dPYYhFW86TbbWw9T4MQcXchnHlVFFMzVSjbLouDWlQWpwOFaKSkQIdMPq5ohOgGtbe4Wlh3Hbj81ZcSyCDGwWT7_ijyzXakSIE8QREgJs1kllFtbUE7elLDGnCBEEhU5xUwYmzd5U54MaZPVmbyFk9uNUMd?width=2816&height=2112&cropmode=none",
		descr: "The 4 round tail lights were also inspired by the Nissan R34 GTR, as well as the Ferrari 360 Modena."
	},
	{
		name: "Gullwing Doors",
		type: "Photo",
		url: "https://dm2304files.storage.live.com/y4mUQUcSLBwW0RVYoxtzFUo9qs_B5kWVW1-hC_0P5Ky0MBEdrwaDieIpQqyMcjvPCu96i28abH9M8k9xptUGt1b4uAVrCULPKDSOc0gVi1nYCj0TVyk9IAO_BL1w6P6WrcKmtKdLqJ8k-jFEyUK0L2wCkzErvOqBY6oE7UtEDu5DnX1UXvL2O78b6TvBE-RF5T_?width=2816&height=2112&cropmode=none",
		descr: "I included gullwing doors because I thought they were cool, and I was interested to incorporate a spring-loaded mechanism for opening them."
	},
	{
		name: "Lego Technic figures",
		type: "Photo",
		url: "https://dm2304files.storage.live.com/y4mWIFffTnFCvubYmFOspaIAXMqP1jQ0RbRdSh7mV2Sz9vuGsWSLa5tW1xWImomyput8NWOye1sDnvHlIANDf-hFPXAXYWo7CTmd4WekHDftDHsTueLV53T4qjTc93YEcGNtlZrklWXIwhYeaLSZPyXCN6b-45SHmrd1FpX1CEX-pxnH_cHIdTcBqtvAf_V8bI4?width=2816&height=2112&cropmode=none",
		descr: "The car was designed to fit the standard LEGO Technic human figures."
	},
	{
		name: "Steering",
		type: "Photo",
		url: "https://dm2304files.storage.live.com/y4mMaYmJNRuDWarUeKcC3X41VGfW65Dg5k0HTlsolxKFYcR___FUiMtVp-dDZwuj00JWCE-T3pv1nn2CnEqPcbN6TShPv4zWj6CrkqI3ZNWzwWTfx8yal9BM93bIWBnThxF_m4Url6w5P3jusXcTA5CStbwRGhDxIv9oEhHf1RHHko1xnwWgRTzA5RLvMTQ3GgQ?width=2816&height=2112&cropmode=none",
		descr: "The front axle has steerable wheels, and suspension using coil springs."
	},
	{
		name: "Rack and pinion",
		type: "Photo",
		url: "https://dm2304files.storage.live.com/y4mp7AIMncpNLmb-FmIudOetWQ-t3ZIix6GpUL7md7-HvkquVgnAt1MUz0_sa91039zdHlNUTSSKK63x4yU7YVFV1IbhDDjPUpCSvUB5vLhrBSfxq1lyQshZk8ntGxM2XSpEiwjR33JhduFEUWXksMXn-ZYkHPkvEZt4dbala9KwkxTE1iYEzZI_6lmsWHCmsWn?width=2816&height=2112&cropmode=none",
		descr: "Steering works by a rack and pinion system, with a set of bevel gears allowing me to steer it from the top."
	},
	{
		name: "Suspension",
		type: "Photo",
		url: "https://dm2304files.storage.live.com/y4m9eNpwS6u3hm1CQv9rZAw06pA0NfaiCD9_IR8IPrOUx3vsK4J880AnQUoPUcNOR2ME0xY8qk7NVm9yseWZXRaIGtPUvV-DcBgL4M9sl8809I-ACElVWNEcuwE4zCrj1fM3xX5OeEExajP51O3dhC-6G2Y5caPC361sWtuBqGJtSTQS4_D7nlvAZt9UFBOrTSR?width=2816&height=2112&cropmode=none",
		descr: "Both front and rear axles have suspension. I must admit that the size of the wheels look disproportionate to the car body, and this was something I wanted to improve on in future builds."
	},
	{
		name: "Engine",
		type: "Photo",
		url: "https://dm2304files.storage.live.com/y4mvcy6URHd9nIagQ2KRQ4Phk0q6g8aaxH6I2_wSoFveahFfZlgb-8ZXyKv-PYY_7p-8nWDE9oWQw0ZN2RuytYiq4iRmwbJXVF2ap5gYNUPtQXhL7dhkMFtc7au-wk77zMWnwoOe5-WXXcgtcXubmtReMUNCUE6PNmA9kgweaqWYrhdmiARxinMdh5pLkpw03G6?width=2816&height=2112&cropmode=none",
		descr: "The rear axle drives the yellow pistons in this V4 engine block."
	},
	{
		name: "Drivetrain",
		type: "Photo",
		url: "https://dm2304files.storage.live.com/y4mb2PFGLke6z9YL-9krcsGGNHoG8uyuZwsuBg2ekxZ6mmxcoZj2Mrr2gLuxqoTbNB672E-ky1i9pNwxkoZFHRFiITj7zUjSH8XCDQ84rGhV9k4ad0VUhRGeWFsoZ16JpSdB-J15Vo8zKzOSgzAlNqu2uyTh_LMoI68CFvdnPXvQrQuub4z1hqK1ZHAAjTyykTW?width=2816&height=2112&cropmode=none",
		descr: "This shows the drivetrain connecting the rear axle to the engine block."
	},
	{
		name: "Final",
		type: "Photo",
		url: "https://dm2304files.storage.live.com/y4mcwfMyj7dbOOrwOySGn5B0goqyAE94MNRLoSvEZ4zXmFzPxre1b4tHnEuw6hnKUqF8YOVFuZnvH4FeAJEA_beVr6Hs7TNGYo5RSO-7XP-8jDxR8_AOoGKE6HKxkh8aFNkDm7JfxUgNqTa0A0KSnpl2bIJhZK9Y1xSjTy-JNw8SHpkrX1YZ4VX3PCemHU4OpQp?width=2816&height=2112&cropmode=none",
		descr: "Front view with two drivers, to complete the showcase for this build. I decided that my next challenge would be adding remote control functionality to a car of a similar scale."
	}

];
