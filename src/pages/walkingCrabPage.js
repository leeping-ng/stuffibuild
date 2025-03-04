import React from 'react';
import TemplatePage from './templatePage';

import Icon from '@material-ui/icons/Pets';

function walkingCrabPage() {

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

export default walkingCrabPage;



const pageName = "Walking Crab";
const creationDate = "Aug 2012";
const creationDescr = <div>After my first foray into LEGO Power Functions with the <a href="/gallery/hondacivic">Honda Civic</a> build, I went on a month long graduation trip to South Korea and Taiwan with my high school friends. In Kaohsiung, Taiwan, I visited Theo Jansen's amazing <a href="https://www.strandbeest.com/" target="_blank" rel="noreferrer">Strandbeest</a> exhibition, and was fascinated by the intricate walking mechanisms. When I got home after the trip, I was inspired to recreate the Strandbeest designs in the form of this walking crab. This was also my first attempt at creating YouTube videos, and this creation even got noticed on <a href="https://www.eurobricks.com/forum/index.php?/forums/topic/72995-lptechnics-lego-technic-pf-12-legged-walking-crab/" target="_blank" rel="noreferrer">Eurobricks</a>.</div>;
const creationChips = ["Remote Control", "Power Functions"];
const info = [
	{
		name: "YouTube",
		type: "Video",
		url: "https://www.youtube.com/embed/8Yi-gxKx4ls",
		descr: "Watch the crab moving by remote control in this video. Why does it have 12 legs? I tried using 8 legs and 16 legs, and 12 legs seemed to be the best compromise between stability and performance."
	},
	{
		name: "Strandbeest",
		type: "Photo",
		url: "https://external-preview.redd.it/7JhSvOsKdMcBde-izkEYCS0rouAGzV8CfS27yZTlMFY.gif?s=505ea577bbaef5ae7dfec322a688d7ecd6babc80",
		descr: <div>The inspiration for my design: Theo Jansen's majestic Strandbeest in action on a beach, powered solely by wind energy (GIF credits <a href="https://www.reddit.com/r/gifs/comments/238vot/strandbeest_wind_power/" target="_blank" rel="noreferrer">Reddit</a>).</div>
	},
	{
		name: "Front",
		type: "Photo",
		url: "https://1drv.ms/i/c/88f9e5f4a517d194/UQSU0Rel9OX5IICIQCQAAAAAAKZGk2WOxGJm-zs?width=660",
		descr: "The crab is rather long, and the outermost legs were heavily cantilevered, requiring stiffeners to be added at strategic places."
	},
	{
		name: "Face",
		type: "Photo",
		url: "https://1drv.ms/i/c/88f9e5f4a517d194/UQSU0Rel9OX5IICIQSQAAAAAAKNxSyyoNlbV2zY?width=660",
		descr: "This was the first time I attempted to design something with a face!"
	},
	{
		name: "LEGO Linkage",
		type: "Photo",
		url: "https://1drv.ms/i/c/88f9e5f4a517d194/UQSU0Rel9OX5IICIQiQAAAAAAOSLcZRuIS_E0QE?width=660",
		descr: "Side view of the legs' linkage mechanism. The nice thing about this mechanism is that it has 1 DOF (Degree of Freedom), and rotation from a single source (e.g. motor) is sufficient to drive the entire leg."
	},
	{
		name: "Actual Linkage",
		type: "Photo",
		url: "https://1drv.ms/i/c/88f9e5f4a517d194/UQSU0Rel9OX5IICIRSQAAAAAANELHIRZRP0lylk?width=660",
		descr: "This picture of the linkage mechanism was taken at the Strandbeest exhibition. I tried to follow the ratios of lengths as closely as I could, within LEGO limitations."
	},
	{
		name: "Driving Mechanism",
		type: "Photo",
		url: "https://1drv.ms/i/c/88f9e5f4a517d194/UQSU0Rel9OX5IICIQyQAAAAAAGPDEW3nxSABobg?width=660",
		descr: "I used one motor for each set of 6 legs on each side. This allowed me to both move and steer the crab by changing the motor rotation directions."
	},
	{
		name: "Battery Box",
		type: "Photo",
		url: "https://1drv.ms/i/c/88f9e5f4a517d194/UQSU0Rel9OX5IICIRyQAAAAAALFu5P-ccbS6VI0?width=660",
		descr: "You may have noticed the crab pitching back and forth as it moves in the video - this was a design flaw because I placed the heavy battery box too low, instead of at the centre of rotation of the legs."
	},
	{
		name: "Rear",
		type: "Photo",
		url: "https://1drv.ms/i/c/88f9e5f4a517d194/UQSU0Rel9OX5IICIRiQAAAAAALDpCDiIiQRWZ8g?width=660",
		descr: "Rear view of the crab."
	},
	{
		name: "Final",
		type: "Photo",
		url: "https://1drv.ms/i/c/88f9e5f4a517d194/UQSU0Rel9OX5IICIRCQAAAAAAMhF62f1m0D24Lo?width=660",
		descr: "My buddies and I at the exhibition with a Strandbeest behind us."
	}

];
