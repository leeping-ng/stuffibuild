import React from 'react';
import TemplatePage from './templatePage';

import Icon from '@material-ui/icons/DriveEta';

function crawlerPage() {

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

export default crawlerPage;


const pageName = "4x4 Crawler";
const creationDate = "Dec 2012";
const creationDescr = <div>I initially bought the <a href="https://www.lego.com/en-us/service/buildinginstructions/9398" target="_blank" rel="noreferrer">9398 4x4 Crawler</a> set to get more Technic and Power Functions bricks. LEGO then announced a competition for this set - the rules were to keep the frame and mechanics, and change the look and body. The winning design would be released as a limited edition LEGO set. Not having taken part in any LEGO competitions before, and fantasizing about being a real LEGO designer, I decided to give it a shot. To my pleasant surprise, my submission was amongst the top 100, and I won a free limited edition set!</div>;
const creationChips = ["Remote Control", "Power Functions", "Contest Submission"];
const info = [
	{
		name: "9398 4x4 Crawler",
		type: "Photo",
		url: "https://1drv.ms/i/c/88f9e5f4a517d194/UQSU0Rel9OX5IICISiQAAAAAALk09bj_wThZn4s?width=660",
		descr: "This is what the official 9398 set looks like."
	},
	{
		name: "My Submission",
		type: "Photo",
		url: "https://1drv.ms/i/c/88f9e5f4a517d194/UQSU0Rel9OX5IICISSQAAAAAAGe0LE7mC0EgDnE?width=660",
		descr: "This is my submission - the chassis and mechanics were untouched, and I only changed the styling of the body. I went for a hybrid American muscle car/monster truck look."
	},
	{
		name: "Front",
		type: "Photo",
		url: "https://1drv.ms/i/c/88f9e5f4a517d194/UQSU0Rel9OX5IICITiQAAAAAAOz1d30mPQCerv0?width=660",
		descr: <div>The crawler is 21 studs wide, compared to my previous car designs such as the <a href="/gallery/hondacivic">Honda Civic</a> which was 13 studs wide. This made it significantly easier to style the car, and the result turned out better than my previous builds.</div>
	},
	{
		name: "Rear",
		type: "Photo",
		url: "https://1drv.ms/i/c/88f9e5f4a517d194/UQSU0Rel9OX5IICIUCQAAAAAAOUyUaTb0hj2QyA?width=660",
		descr: "Rear end."
	},
	{
		name: "Side",
		type: "Photo",
		url: "https://1drv.ms/i/c/88f9e5f4a517d194/UQSU0Rel9OX5IICITSQAAAAAAGnCBctp_6GvHso?width=660",
		descr: "Side view."
	},
	{
		name: "Top",
		type: "Photo",
		url: "https://1drv.ms/i/c/88f9e5f4a517d194/UQSU0Rel9OX5IICITyQAAAAAANJ1505RSwtLJm0?width=660",
		descr: "Top view - the grey 'muscle car' stripes go all the way from the front to the rear."
	},
	{
		name: "Configurable Hard Top and Tailgate",
		type: "Photo",
		url: "https://1drv.ms/i/c/88f9e5f4a517d194/UQSU0Rel9OX5IICISyQAAAAAAAeYaqLSszcy_u8?width=660",
		descr: "I added a retractable hard top and tailgate, just to try and score more points."
	},
	{
		name: "Gullwing Doors",
		type: "Photo",
		url: "https://1drv.ms/i/c/88f9e5f4a517d194/UQSU0Rel9OX5IICITCQAAAAAAIcri6BSMR1oOfY?width=660",
		descr: "I also included gullwing doors which open via spring-loaded mechanisms."
	},
	{
		name: "Top 100 Winner",
		type: "Photo",
		url: "https://1drv.ms/i/c/88f9e5f4a517d194/UQSU0Rel9OX5IICIUiQAAAAAAAVXerpM7kCEUpU?width=660",
		descr: "I was elated to receive the good news from LEGO!"
	},
	{
		name: "41999 4x4 Crawler",
		type: "Photo",
		url: "https://1drv.ms/i/c/88f9e5f4a517d194/UQSU0Rel9OX5IICIUSQAAAAAACaKfWwqv9lCWfM?width=660",
		descr: "LEGO shipped me this limited edition 41999 4x4 Crawler set (which was the winning design) free of charge, all the way from Denmark to Singapore!"
	}
];
