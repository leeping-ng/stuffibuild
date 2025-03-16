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
const creationDescr = <div>I had successfully pivoted my career from mechanical engineering to AI, and was now working at <a href="https://aisingapore.org/" target="_blank" rel="noreferrer">AI Singapore</a>. I eventually went on to lead the computer vision team there, and was tasked to develop an open-source AI tool that could help businesses and hobbyists to utilise computer vision easily. As a result, we developed PeekingDuck, a project which I'm proud of till today! <br /> <br /> This blog post is catered for a general audience and doesn't dive into specifics, but if you're interested to find out more, here are links to PeekingDuck's <a href="https://github.com/aisingapore/PeekingDuck" target="_blank" rel="noreferrer">GitHub</a> and <a href="https://peekingduck.readthedocs.io/en/stable/index.html" target="_blank" rel="noreferrer">documentation</a>. Note that this project is no longer being maintained - I left for my studies in the UK in Aug 2022, and ChatGPT was released in late 2022. The team changed focus to work on LLMs for South East Asian languages and released another cool product called <a href="https://sea-lion.ai/" target="_blank" rel="noreferrer">SEA-LION</a>.</div >;
const creationChips = [];
const info = [
	{
		name: "Name and Logo",
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
		url: "https://1drv.ms/i/c/88f9e5f4a517d194/IQR0hmZcPO0MR57-yfPTl0jRAUhLNsY_1Bvyrng3kv037IY?width=660",
		descr: <div>One of our early brainstorming sessions on passing messages from one building block to another. The general idea is (from top down): <br />- "input.live" takes a live video stream and extracts images from it <br />- "model.yolo" is an AI model that performs object detection on these images, and so on.</div>
	},
	{
		name: "Social Distancing",
		type: "Photo",
		url: "https://github.com/aisingapore/PeekingDuck/blob/main/docs/source/assets/use_cases/social_distancing.gif?raw=true",
		descr: <div>This social distancing use case was developed by a previous team during the thick of the COVID-19 pandemic, and we adapted it to work with PeekingDuck as it was still mandatory to maintain physical distance from each other. The algorithm estimates the 2D distance between detected persons, and shows a warning if they are too close.</div>
	},
	{
		name: "Privacy Protection",
		type: "Photo",
		url: "https://github.com/aisingapore/PeekingDuck/blob/main/docs/source/assets/use_cases/privacy_protection_faces.gif?raw=true",
		descr: <div>Face blurring was a popular use case we developed to comply with data privacy laws such as the GDPR. It works by detecting people's faces, and applying a blur or mosaic pattern to the face regions. The same method can be applied to other sensitive information such as license plates.</div>
	},
	{
		name: "Webinar",
		type: "Photo",
		url: "https://1drv.ms/i/c/88f9e5f4a517d194/IQSYIRz3-peLSKMIBCpwrH28Acjg2xNeabTy8kGDXAtuvQ4?width=660",
		descr: <div>To drum up publicity, I conducted a Zoom webinar to share about using PeekingDuck, which was later uploaded to <a href="https://youtu.be/-w-3amUVHeg?si=vO8KWYDHeUvoDSXF" target="_blank" rel="noreferrer">YouTube</a>. We also wrote articles on LinkedIn, organised student hackathons involving the use of PeekingDuck, and interviewed users to get feedback. It was pretty exciting to both develop and promote something we believed in.</div>
	},
	{
		name: "GitHub Stars",
		type: "Photo",
		url: "https://1drv.ms/i/c/88f9e5f4a517d194/IQTPJD8BdrYYRb7pN_iq_dHtAQaeFYCSAg311NrWp_Cxb8o?width=660",
		descr: <div>We were really happy to get 100 stars ⭐ on GitHub within our first year. For many of us, AI Singapore was a springboard for our later careers and it really helped to have worked on a good open-source project that we could talk about.</div>
	},
	{
		name: "PeekingDuck team",
		type: "Photo",
		url: "https://1drv.ms/i/c/88f9e5f4a517d194/IQR78pII-5KtR5wLo4QSMx-JAZ1k4farcz9QgluLs049nn0?width=660",
		descr: <div>This is a photo of the core engineers behind PeekingDuck (masks on due to COVID-19), taken after PeekingDuck went live and we went for a celebratory dinner at a Peking Duck restaurant. It was a great team effort, not just from the 5 of us, but also from the seniors before us who laid the foundation for my team, and the others who joined the project later and continued to add new features. Thank you to everyone who contributed! 🙏</div>
	},

];
