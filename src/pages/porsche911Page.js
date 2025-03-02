import React from 'react';
import TemplatePage from './templatePage';

import Icon from '@material-ui/icons/DriveEta';

function porsche911Page() {

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

export default porsche911Page;

const pageName = "Porsche 911";
const creationDate = "Jul 2016";
const creationDescr = <div>LEGO Technic released the <a href="https://www.lego.com/en-us/service/buildinginstructions/42056" target="_blank" rel="noreferrer">Porsche 911 GT3 RS</a> set in 2016, which was the first 'supercar' set in a while. Along with the launch, LEGO announced another competition - build your own Porsche. I didn't have much time to design a large, complex model, but really wanted to join the contest. Thus, I decided to build a small remote-controlled replica of a 911 Carrera Cabriolet, improving on my earlier <a href="/gallery/hondacivic">Honda Civic</a> design. I managed to get into top 20 - not enough to win a prize, but it still feels good to be recognised!</div>;
const creationChips = ["Remote Control", "Power Functions", "Contest Submission"];
const info = [
	{
		name: "YouTube",
		type: "Video",
		url: "https://www.youtube.com/embed/MtCz02s1YNU",
		descr: "Check out this YouTube video of the Porsche being driven around by remote."
	},
	{
		name: "Display",
		type: "Photo",
		url: "https://1drv.ms/i/c/88f9e5f4a517d194/UQSU0Rel9OX5IICI2SQAAAAAAO5dX9lys-c1pWw?width=1024",
		descr: "Porsches have a very distinct look - I tried to capture this with LEGO bricks as much as possible."
	},
	{
		name: "Front",
		type: "Photo",
		url: "https://1drv.ms/i/c/88f9e5f4a517d194/UQSU0Rel9OX5IICI2iQAAAAAAGzo75TLwuflofs?width=1024",
		descr: "Front view."
	},
	{
		name: "Rear",
		type: "Photo",
		url: "https://1drv.ms/i/c/88f9e5f4a517d194/UQSU0Rel9OX5IICI0iQAAAAAAPlWQN5GZpMxeW8?width=1024",
		descr: "Most Porsches are rear-engined, and the grill in front of the tail lights is for cooling the engine."
	},
	{
		name: "Foldable Top",
		type: "Photo",
		url: "https://1drv.ms/i/c/88f9e5f4a517d194/UQSU0Rel9OX5IICIziQAAAAAANCkPcywKP6YEVc?width=1024",
		descr: "This Porsche is a 'cabriolet', which can be driven with or without a roof. I created a mechanism that allows the roof to be retracted, which was quite challenging due to the small scale of the car."
	},
	{
		name: "Top View",
		type: "Photo",
		url: "https://1drv.ms/i/c/88f9e5f4a517d194/UQSU0Rel9OX5IICI1CQAAAAAAA5MBK808r_4B84?width=1024",
		descr: "Top view of the Porsche, with roof stowed."
	},
	{
		name: "Top View 2",
		type: "Photo",
		url: "https://1drv.ms/i/c/88f9e5f4a517d194/UQSU0Rel9OX5IICI0SQAAAAAANZf0nvTXauH91Q?width=1024",
		descr: "Top view of the Porsche, with roof up."
	},
	{
		name: "Electronics",
		type: "Photo",
		url: "https://1drv.ms/i/c/88f9e5f4a517d194/UQSU0Rel9OX5IICI0yQAAAAAAFVpDgwikBZonc0?width=1024",
		descr: <div>I placed the motors and IR receiver as low as possible, creating more space above, which was especially important as it is an open-top car. The layout of electronics here was a marked improvement over my previous <a href="/gallery/hondacivic" target="_blank" rel="noreferrer">Honda Civic</a> design.</div>
	},
	{
		name: "Blueprints",
		type: "Photo",
		url: "https://1drv.ms/i/c/88f9e5f4a517d194/UQSU0Rel9OX5IICI1SQAAAAAANQt8qVuUPvhhP0?width=1024",
		descr: "My source of inspiration as I designed the LEGO version."
	},
	{
		name: "Top 20",
		type: "Photo",
		url: "https://1drv.ms/i/c/88f9e5f4a517d194/UQSU0Rel9OX5IICI1iQAAAAAAM2pbH_0_pVoLUg?width=1024",
		descr: "Very happy with this outcome!"
	},
];
