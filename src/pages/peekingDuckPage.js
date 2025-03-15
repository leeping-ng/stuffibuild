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
const creationDate = "Jun 2021";
const creationDescr = <div>I had successfully pivoted my career from mechanical engineering to AI, and was now working at AI Singapore. I eventually went on to lead the computer vision team there, and was tasked to develop an open-source AI tool that could help businesses and hobbyists to utilise computer vision easily. As a result, we developed PeekingDuck, a project which I'm proud of till today! <br /> <br /> This blog post is catered for a general audience and doesn't dive into specifics, but if you're interested to find out more, here are links to PeekingDuck's <a href="https://github.com/aisingapore/PeekingDuck" target="_blank" rel="noreferrer">GitHub</a> and <a href="https://peekingduck.readthedocs.io/en/stable/index.html" target="_blank" rel="noreferrer">documentation</a>. Note that this project is no longer being maintained - I left for my studies in the UK in Aug 2022, and ChatGPT was released in late 2022. The team changed focus to work on LLMs for South East Asian languages and released another cool product called <a href="https://sea-lion.ai/" target="_blank" rel="noreferrer">SEA-LION</a>.</div >;
const creationChips = [];
const info = [
	{
		name: "Name and logo",
		type: "Photo",
		url: "https://1drv.ms/i/c/88f9e5f4a517d194/IQSW3Wo2WeMJRqAVfWKCeI1uAQ8lsdttDL99wFwL0OVafAo?width=660",
		descr: <div><b>To begin, why did we call this project PeekingDuck?</b> <br /><br /> Obviously it's a pun because it sounds like "Peking Duck", but there's a deeper meaning behind this - "PeekingDuck" is a play on: "Peeking" because it's related to computer vision; and "Duck" in reference to a programming concept called duck typing. Kudos to my teammates Sidney (for the brilliant name) and Di Wei (for the cute logo).</div>
	},
	{
		name: "Motivation",
		type: "Photo",
		url: "https://github.com/aisingapore/PeekingDuck/blob/main/docs/source/assets/use_cases/ducks_demo.gif?raw=true",
		descr: <div><b>What's the motivation behind PeekingDuck?</b> <br /><br /> Prior to this, my team had built computer vision solutions for different use cases and found that they had many similarities - a video stream needs to be processed, an AI model needs to perform detections on the video, and some form of output needs to be produced. That's a lot of duplicate code and engineering hours across different projects! What if we could reuse this code in a simple and efficient way?</div>
	},
	{
		name: "Nodes",
		type: "Photo",
		url: "https://1drv.ms/i/c/88f9e5f4a517d194/IQThDD5BhrHlQpOiQVRCL_uUAchOEdpIUSDjN1yQUQd6uso?width=660",
		descr: <div>Thus, we came up with the idea of creating building blocks which served different roles and could be connected together in a low-code way to form a complete computer vision solution. Sounds a bit like LEGO, doesn't it? 😊</div>
	},
	{
		name: "Brainstorming",
		type: "Photo",
		url: "https://1drv.ms/i/c/88f9e5f4a517d194/IQR_k2DvLhLUQYZciv34se8mAaFAGV-u-Y5KXfSGmp0M_6c?width=660",
		descr: <div>One of our early brainstorming sessions on passing messages from one building block to another. The general idea is: <br />- "input.live" takes a live video stream and extracts images from it <br />- "model.yolo" is an AI model that performs object detection on these images, and so on.</div>
	},
	{
		name: "Webinar",
		type: "Photo",
		url: "https://1drv.ms/i/c/88f9e5f4a517d194/IQSYIRz3-peLSKMIBCpwrH28Acjg2xNeabTy8kGDXAtuvQ4?width=660",
		descr: <div>I conducted a webinar on Zoom to share about using PeekingDuck, and this was later uploaded to <a href="https://youtu.be/-w-3amUVHeg?si=vO8KWYDHeUvoDSXF" target="_blank" rel="noreferrer">YouTube</a>.</div>
	},

	{
		name: "PeekingDuck team",
		type: "Photo",
		url: "https://1drv.ms/i/c/88f9e5f4a517d194/IQR78pII-5KtR5wLo4QSMx-JAZ1k4farcz9QgluLs049nn0?width=660",
		descr: <div>The core developers behind PeekingDuck. We went for a celebratory dinner at a Peking Duck restaurant when we released it to public!</div>
	},

];
