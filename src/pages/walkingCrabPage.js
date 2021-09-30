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
				icon={<Icon fontSize="large"/>} />
		</React.Fragment>
	);
	}

export default walkingCrabPage;



const pageName = "Walking Crab";
const creationDate = "Aug 2012";
const creationDescr = <div>After my first foray into LEGO Power Functions with the <a href="#/gallery/hondacivic" target="_blank" rel="noreferrer">Honda Civic</a> build, I went on a month long graduation trip to South Korea and Taiwan with my high school friends. In Kaohsiung, Taiwan, I visited Theo Jansen's amazing <a href="https://www.strandbeest.com/" target="_blank" rel="noreferrer">Strandbeest</a> exhibition, and was fascinated by the intricate walking mechanisms. When I got home after the trip, I was inspired to recreate the Strandbeest designs in the form of this walking crab. This was also my first attempt at creating YouTube videos, and this creation even got noticed on <a href="https://www.eurobricks.com/forum/index.php?/forums/topic/72995-lptechnics-lego-technic-pf-12-legged-walking-crab/" target="_blank" rel="noreferrer">Eurobricks</a>.</div>;
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
		url: "https://dm2304files.storage.live.com/y4m8VWGQ95AtuTJ-dY67dXEX2ZD48jQj_JoBLAXqasjol14YL_iiVUsTZYSMfdu6yPN-42AnlRsFcV2XePgd_s-ejPMdKAIlYZUHFViBH3FHEH2GdhkSvWdsHCsy6Dd2DmldqzE4xB99fO6rfQllOf73mwmXcUaso5gwJTlKclbgpnXYyawFLZdpsp3evK-CC6v?width=4000&height=3000&cropmode=none",
		descr: "The crab is rather long, and the outermost legs were heavily cantilevered, requiring stiffeners to be added at strategic places."
	},
	{
		name: "Face",
		type: "Photo",
		url: "https://dm2304files.storage.live.com/y4m7kTcj1Ppa0_oDSC82VvYw1xDSD5DTQikk9WOPb-ALTzeo0WWJ1rs2RUg-f7qsGtXy0gjvWEORscV6xJzeCILTXx4LxiZqFI3ScgsXt7_qYDCx6wmPv8aX5oNRj7g5PUsMi9pEb59kYxiSs9StCVRoZQSh-3DvcvuPBKjoYi_U_L8JqssjUbM5I4bGTB6jH13?width=4000&height=3000&cropmode=none",
		descr: "This was the first time I attempted to design something with a face!"
	},
	{
		name: "LEGO Linkage",
		type: "Photo",
		url: "https://dm2304files.storage.live.com/y4mCts_o4tdYWGI1nZWZ3s9XZj9zILYptVTKQDtfGvJ4MYhkF9_4bofPab5bU4jKap02y7w-upRYcMO4rxpWlpWH0Vyezr0KfHLtCr75ARoE7QkNANe90rG2AX23zndxlDjPoe-k8DBJCZGszdgnrYOlkAnLrMUbTZhnZrfGrWLV9T3ggBqlqLGYOH6jyOv7SX8?width=4000&height=3000&cropmode=none",
		descr: "Side view of the legs' linkage mechanism. The nice thing about this mechanism is that it has 1 DOF (Degree of Freedom), and rotation from a single source (e.g. motor) is sufficient to drive the entire leg."
	},
	{
		name: "Actual Linkage",
		type: "Photo",
		url: "https://dm2304files.storage.live.com/y4m4cRZTSKEdqpWL9EJyO_9Mn5_1ZCClVnkIVPzhFZrK1qHhdn5oUwbeELwKTND51qnE45Da5yhvGu3wyzaxOKs_9cUaEupgWyejWglnAuQ9LZm85CuHI2ulxvbf_kF26KIy9XNpy5ud0u0ORNVO_Wd_xIJjfjDzMji04M6mNvgFtLzcvEVZQE5RHAb_ckkFcDD?width=4000&height=3000&cropmode=none",
		descr: "This picture of the linkage mechanism was taken at the Strandbeest exhibition. I tried to follow the ratios of lengths as closely as I could, within LEGO limitations."
	},
	{
		name: "Driving Mechanism",
		type: "Photo",
		url: "https://dm2304files.storage.live.com/y4m3CiO_nTlSvzPpkWja1Ev0STFXbjRd7E2DRpMZ6PKMEPIsGCAO1QMczJ8RDN3nc9-BWGpDFLKLRXJyPMp-Sy3DVKEuHGjFQIxxNchoyYb6noLjZ-PVCHeKohj3lAeBvHuzw___kpeA-ERnQN5tu2VPYDtAja7kYzYQWnA5jdzoHFToKd3X0wcxjefV_jStqmj?width=4000&height=3000&cropmode=none",
		descr: "I used one motor for each set of 6 legs on each side. This allowed me to both move and steer the crab by changing the motor rotation directions."
	},
	{
		name: "Battery Box",
		type: "Photo",
		url: "https://dm2304files.storage.live.com/y4mtn1Er8df1wZIQ2hzomNfzsjui3ulXlnTpVmXWeJURIOwJEaveNVquTxwDEeF78gROBr5G1rqoeIl31JP1vSRrsHukjHUon6AwKYRWoSS5rAby28hpfdp2k6YX2UVd8WM_oMn5du2D2BR798NOPk9BfuoFUNvshHpD-V-2ETphsQTSvSSVjN3JEzj-7y7FB9v?width=4000&height=3000&cropmode=none",
		descr: "You may have noticed the crab pitching back and forth as it moves in the video - this was a design flaw because I placed the heavy battery box too low, instead of at the centre of rotation of the legs."
	},
	{
		name: "Rear",
		type: "Photo",
		url: "https://dm2304files.storage.live.com/y4mkJUIAc2em_-fCrTwoG4nNbLIiagp93sE7ZuBcq-v0svIIfVSbgjkynEkco0yzzLhUjrW_Q3IFYNJhGjaMXJM-u9QodcNuWIZAYfeXvbnxechaWcnBgfjo_XDWo3LjZSRWWVyuc8tjRL4gDN_psvC5oEP96X-xbJVVw9GhyB85l9Z6j09UgT_iWcOcVK8Hp9o?width=4000&height=3000&cropmode=none",
		descr: "Rear view of the crab."
	},
	{
		name: "Final",
		type: "Photo",
		url: "https://dm2304files.storage.live.com/y4mIyobhWlL2T3qfUyu4ZTIKSySNz7VDLTGHJ07Rqg81bQ6GB0l3wf-hDFgvjdtMYhReV1UW3Zwq65TkGNeUSBOyG-nnl31mI6xhniMXHpcvi_eMZFV9IjOvv7BN6-NPN4vh5NE-vFjEZqPtIyRA3HxJa_CnHiztVTerwrDSahUKYJHjU01x8ZtipLbQHegMa8j?width=4000&height=3000&cropmode=none",
		descr: "My buddies and I at the exhibition with a Strandbeest behind us."
	}

];
