import React from 'react';
import TemplatePage from './templatePage';

import Icon from '@material-ui/icons/Settings';

function trackedVehicleTransmissionPage() {

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

export default trackedVehicleTransmissionPage;

const pageName = "Tracked Vehicle Transmission";
const creationDate = "May 2016";
const creationDescr = "I became interested in tracked vehicles such as tanks, particularly how their transmissions worked. The transmission for a tracked vehicle is not only responsible for changing gears, but also steering, braking and power take-off (PTO) in some cases. I started building early versions in June 2014, but was dissatisfied with my early prototypes - this final version comes almost 2 years later! This was by far my most challenging build - squeezing all the motors and gears into this compact package while maintaining efficiency was no mean feat, and I'm really pleased with this outcome!";
const creationChips = ["Remote Control", "Power Functions", "Gearbox"];
const info = [
	{
		name: "YouTube",
		type: "Video",
		url: "https://www.youtube.com/embed/bNoVbt64ZlU",
		descr: "To see how it works, it's best to check out my YouTube video. To date, this has been my most popular creation, reaching almost 200,000 views on YouTube!"
	},
	{
		name: "Electronics",
		type: "Photo",
		url: "https://1drv.ms/i/c/88f9e5f4a517d194/UQSU0Rel9OX5IICIuiQAAAAAAI9qbSACuVdYsqc?width=660",
		descr: "I used 4 motors for this creation: 1) for drive; 2) for switching between land/swim modes; 3) for switching between high/low ranges; 4) for steering. It was all about optimising space to fit these motors."
	},
	{
		name: "Engine",
		type: "Photo",
		url: "https://1drv.ms/i/c/88f9e5f4a517d194/UQSU0Rel9OX5IICIvCQAAAAAAICjw8YxjAMVTZk?width=660",
		descr: "The transmission is 'powered' by a V8 engine with 'twin turbos' (the engine crankshaft is actually driven by a LEGO M-motor)."
	},
	{
		name: "Dual Differential Drive",
		type: "Photo",
		url: "https://1drv.ms/i/c/88f9e5f4a517d194/UQSU0Rel9OX5IICIviQAAAAAAKGiLTmD0f0xxaA?width=660",
		descr: <div>The sprockets on both sides of the transmission connect to tank treads which propel the vehicle. If both sprockets rotate at the same speed, the vehicle moves in a straight line. If the left and right sprockets rotate at different speeds, the vehicle steers. The drive mechanism used here is called the <a href="https://www.youtube.com/watch?v=_z3n6VOk-Ls&ab_channel=SpringHaIo" target="_blank" rel="noreferrer">dual differential drive</a>.</div>
	},
	{
		name: "Propellers",
		type: "Photo",
		url: "https://1drv.ms/i/c/88f9e5f4a517d194/UQSU0Rel9OX5IICIvyQAAAAAADY7lXkibTdH-IU?width=660",
		descr: "The vehicle that this transmission was designed for can move on land and in water - hence it has propellers!"
	},
	{
		name: "Propeller Drive",
		type: "Photo",
		url: "https://1drv.ms/i/c/88f9e5f4a517d194/UQSU0Rel9OX5IICIxCQAAAAAAH2QfYQ1daFfq_U?width=660",
		descr: "Power take-off (PTO) drive for propellers."
	},
	{
		name: "Land/Swim Mode Selector",
		type: "Photo",
		url: "https://1drv.ms/i/c/88f9e5f4a517d194/UQSU0Rel9OX5IICIwyQAAAAAAMkCtPorY61OXJA?width=660",
		descr: "The red dog clutch in the middle selects between land mode (rotate sprockets) or swim mode (rotate propellers). A M-motor moves the dog clutch and is controlled remotely."
	},
	{
		name: "High/Low Range Selector",
		type: "Photo",
		url: "https://1drv.ms/i/c/88f9e5f4a517d194/UQSU0Rel9OX5IICIwiQAAAAAAM-Oa9sA1KOE9a4?width=660",
		descr: "The red gear selector in the middle is driven by a M-motor below(hidden). It moves the dark grey dog clutch to select between high or low ranges (3:1 gear ratio), and is controlled remotely."
	},
	{
		name: "Forward/Reverse Selector",
		type: "Photo",
		url: "https://1drv.ms/i/c/88f9e5f4a517d194/UQSU0Rel9OX5IICIwCQAAAAAAJMnNiCAwgpAWlw?width=660",
		descr: "The dark grey dog clutch between the 2 read gears is used to select forward or reverse gear. I ran out of ports on the IR receiver, thus this has to be adjusted manually."
	},
	{
		name: "Side View",
		type: "Photo",
		url: "https://1drv.ms/i/c/88f9e5f4a517d194/UQSU0Rel9OX5IICIxSQAAAAAALIqnz-yhnplrfk?width=660",
		descr: "Side view of the engine and transmission."
	},
	{
		name: "Bottom",
		type: "Photo",
		url: "https://1drv.ms/i/c/88f9e5f4a517d194/UQSU0Rel9OX5IICIwSQAAAAAAPVbWimCbTUX2DI?width=660",
		descr: "Bottom view, showing the battery box underneath the engine, and the 2 motors at the bottom of the transmission."
	},
	{
		name: "Remote",
		type: "Photo",
		url: "https://1drv.ms/i/c/88f9e5f4a517d194/UQSU0Rel9OX5IICIuyQAAAAAAILP6_-_IHn4gKo?width=660",
		descr: "With the remote which controls 4 functions. Rotating the steering wheel changes the amount of steering, while rotating the gear changes the output speed of the driving motor. The 2 red levers on the right side are for selecting between land/swim mode and high/low range. Next, a bit of history on the design iterations prior to this..."
	},
	{
		name: "MkI",
		type: "Photo",
		url: "https://1drv.ms/i/c/88f9e5f4a517d194/UQSU0Rel9OX5IICIxiQAAAAAAN3uYjRv1nkiIy8?width=660",
		descr: "Mk I: I designed this in June 2014, almost 2 years before my final design! No motors were used, and I had to drive or steer it by hand. I intentionally made the design flat, to be able to see how the entire geartrain interacted from the top. This had the downside of making the transmission very large."
	},
	{
		name: "MkI Ring Gear",
		type: "Photo",
		url: "https://1drv.ms/i/c/88f9e5f4a517d194/UQSU0Rel9OX5IICIyCQAAAAAAPv6cN-qjHjO-D0?width=660",
		descr: <div>Mk I: I used the internal ring gears of <a href="https://www.bricklink.com/v2/catalog/catalogitem.page?P=48452cx1#T=C" target="_blank" rel="noreferrer">Technic turntables</a> to create planetary gearsets for the transmission. The turntable is very large with substantial friction, and this made it difficult to turn the transmission by hand sometimes.</div>
	},
	{
		name: "MkII",
		type: "Photo",
		url: "https://1drv.ms/i/c/88f9e5f4a517d194/UQSU0Rel9OX5IICIxyQAAAAAAKHK8wc4QjtirRw?width=660",
		descr: "Mk II: I designed this in December 2014. This had substantial changes from Mk I: 1) motors were added; 2) a v8 engine was added; 3) the mostly 2D geartrain in Mk I became 3D here to make the transmission more compact and of a more comparable size with the engine."
	},
	{
		name: "MkII Limitations",
		type: "Photo",
		url: "https://1drv.ms/i/c/88f9e5f4a517d194/UQSU0Rel9OX5IICIySQAAAAAAGPCd7WRtnxzfl8?width=660",
		descr: "Mk II: The main limitations of this design was its large size and high friction, because I stubbornly continued to use the Technic turntables to realistically simulate planetary gearsets. Due to this, I could only fit 2 motors (instead of 4 in the final design), and sometimes the driving motor stalled because of the high frictional losses of this geartrain."
	},
	{
		name: "Final Design",
		type: "Photo",
		url: "https://1drv.ms/i/c/88f9e5f4a517d194/UQSU0Rel9OX5IICIyiQAAAAAAIysXxYztykKCtY?width=660",
		descr: "Final design: I had more than a year to think about improvements, and I decided to replace the Technic turnables with differentials for steering, and simple clutch systems for speed changes. I agonised over this for a long time, as this deviates from a true tracked vehicle transmission, but ultimately decided that the improved packaging and performance was well worth the trade-off."
	},
	{
		name: "Final Design Compact",
		type: "Photo",
		url: "https://1drv.ms/i/c/88f9e5f4a517d194/UQSU0Rel9OX5IICIyyQAAAAAAETTISDhOcKjnfs?width=660",
		descr: "Final design: As a result of this trade-off, I was able to better optimise placement of the motors and gears, making the final design much more compact with far lower frictional losses. It took 2 years to reach this stage, and I learnt many invaluable engineering lessons along the way!"
	},
];
