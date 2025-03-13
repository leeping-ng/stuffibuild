import React from 'react';
import TemplatePage from './templatePage';

import Icon from '@material-ui/icons/CameraAlt';

function peekingDuckPage() {

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

export default peekingDuckPage;


const pageName = "PeekingDuck";
const creationDate = "Aug 2021";
const creationDescr = <div>I had successfully pivoted my career from mechanical engineering to AI, and was now working at AI Singapore. I eventually went on to lead the computer vision team there, and was tasked to develop an open-source AI tool that could help businesses and hobbyists to utilise computer vision easily. My team conceived and developed PeekingDuck, and to this day I'm still proud of what we've achieved!</div>;
const creationChips = [];
const info = [
	{
		name: "Github",
		type: "Photo",
		url: "https://1drv.ms/i/c/88f9e5f4a517d194/IQSBg-15P9HOT740uZEqH4PfAT6YzO86z1JQiKZ5YQsyD3Y?width=660",
		descr: <div><a href="https://github.com/aisingapore/PeekingDuck" target="_blank" rel="noreferrer">GitHub</a></div>
	},
	{
		name: "Webinar",
		type: "Photo",
		url: "https://1drv.ms/i/c/88f9e5f4a517d194/IQSYIRz3-peLSKMIBCpwrH28Acjg2xNeabTy8kGDXAtuvQ4?width=660",
		descr: <div>I conducted a webinar on Zoom to share about using PeekingDuck, and this was later uploaded to <a href="https://youtu.be/-w-3amUVHeg?si=vO8KWYDHeUvoDSXF" target="_blank" rel="noreferrer">YouTube</a>.</div>
	},
	{
		name: "Brainstorming",
		type: "Photo",
		url: "https://1drv.ms/i/c/88f9e5f4a517d194/IQR_k2DvLhLUQYZciv34se8mAaFAGV-u-Y5KXfSGmp0M_6c?width=660",
		descr: <div>One of the early brainstorming sessions on a whiteboard.</div>
	},
	{
		name: "PeekingDuck team",
		type: "Photo",
		url: "https://1drv.ms/i/c/88f9e5f4a517d194/IQR78pII-5KtR5wLo4QSMx-JAZ1k4farcz9QgluLs049nn0?width=660",
		descr: <div>The core developers behind PeekingDuck. We went for a celebratory dinner at a Peking Duck restaurant when we released it to public!</div>
	},

];
