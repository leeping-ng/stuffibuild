import React from 'react';
import TemplatePage from './templatePage';

import Icon from '@material-ui/icons/DirectionsBike';

function tukTukPage() {

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

export default tukTukPage;


const pageName = "Tuk-Tuk";
const creationDate = "Feb 2013";
const creationDescr = "I went for a short holiday in Bangkok, Thailand, and saw tuk-tuks everywhere. Tuk-tuks are a common mode of transport there, and the name is apparently derived from the sound of small, 2-stroke engines. I started thinking about building a LEGO version during the trip, and when I reached home, I got to work right away...";
const creationChips = [];
const info = [
	{
		name: "Front",
		type: "Photo",
		url: "https://1drv.ms/i/c/88f9e5f4a517d194/UQSU0Rel9OX5IICIXSQAAAAAADQvxxrWplEbg5s?width=660",
		descr: "A combination of bright red, yellow and blue can look garish on other vehicles, but not for tuk-tuks - many of them come in bright colours."
	},
	{
		name: "Real Tuk-Tuk",
		type: "Photo",
		url: "https://1drv.ms/i/c/88f9e5f4a517d194/UQSU0Rel9OX5IICIXCQAAAAAAEYVB-WelXEoAtA?width=660",
		descr: "A real tuk-tuk with a fake driver (me)."
	},
	{
		name: "Steering",
		type: "Photo",
		url: "https://1drv.ms/i/c/88f9e5f4a517d194/UQSU0Rel9OX5IICIYCQAAAAAAKxOSqrH1fbnZPU?width=660",
		descr: "The front wheel steers just like a motorcycle."
	},
	{
		name: "Suspension",
		type: "Photo",
		url: "https://1drv.ms/i/c/88f9e5f4a517d194/UQSU0Rel9OX5IICIYSQAAAAAAMab022zB9RANTk?width=660",
		descr: "The LEGO tuk-tuk is very compact (roughly as long as my hand), but I managed to squeeze in coil springs for suspension beneath the passenger seats."
	},
	{
		name: "Driver Compartment",
		type: "Photo",
		url: "https://1drv.ms/i/c/88f9e5f4a517d194/UQSU0Rel9OX5IICIXiQAAAAAAKikXxBt75JVASI?width=660",
		descr: "The driver's compartment includes a functional handlebars for steering, a gear stick (yes, between the driver's legs) and a battery replica."
	},
	{
		name: "Bottom",
		type: "Photo",
		url: "https://1drv.ms/i/c/88f9e5f4a517d194/UQSU0Rel9OX5IICIXyQAAAAAAFb2w67v9hV_B34?width=660",
		descr: "The rear wheels connect to the red engine block and white fan underneath the driver seat, through a pair of bevel gears and a universal joint."
	},
	{
		name: "Rear",
		type: "Photo",
		url: "https://1drv.ms/i/c/88f9e5f4a517d194/UQSU0Rel9OX5IICIYiQAAAAAAJp340R-ENcBnn0?width=660",
		descr: "Rear view of the tuk-tuk. I enjoyed this build very much, and this was the first creation that I did not dismantle subsequently. 8 years on, it is still being displayed on a shelf at home."
	},
];
