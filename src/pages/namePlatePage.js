import React from 'react';
import TemplatePage from './templatePage';

import Icon from '@material-ui/icons/BusinessCenter';

function namePlatePage() {

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

export default namePlatePage;


const pageName = "Name Plate";
const creationDate = "Jan 2014";
const creationDescr = <div>I bought a LEGO <a href="https://brickset.com/sets/850425-1/Desk-Business-Card-Holder" target="_blank" rel="noreferrer">business card holder</a> set to put on my office desk, but soon got bored with how it looked. I decided to re-use the alphabet tiles, and design my own name plate with a touch of mechanical engineering. This ended up being one of my more popular creations, and I made a few more variations for family, friends and colleagues.</div>;
const creationChips = [];
const info = [
	{
		name: "Front View",
		type: "Photo",
		url: "https://1drv.ms/i/c/88f9e5f4a517d194/UQSU0Rel9OX5IICIkCQAAAAAAEQoDLArQZZSV4E?width=660",
		descr: "Front of the name plate."
	},
	{
		name: "850425 Business Card Holder",
		type: "Photo",
		url: "https://1drv.ms/i/c/88f9e5f4a517d194/UQSU0Rel9OX5IICImCQAAAAAAGvcszOvopBnQ1Q?width=660",
		descr: <div>The original LEGO 850425 business card holder (photo credits <a href="https://brickset.com/sets/850425-1/Desk-Business-Card-Holder" target="_blank" rel="noreferrer">BrickLink</a>).</div>
	},
	{
		name: "Half-Opened",
		type: "Photo",
		url: "https://1drv.ms/i/c/88f9e5f4a517d194/UQSU0Rel9OX5IICIjiQAAAAAAFtv8HmNBL2sbis?width=660",
		descr: "The name plate can be opened by turning the gears on the side..."
	},
	{
		name: "Opened View",
		type: "Photo",
		url: "https://1drv.ms/i/c/88f9e5f4a517d194/UQSU0Rel9OX5IICIjyQAAAAAAFjaRq3JgJ055g8?width=660",
		descr: "... to reveal another message inside!"
	},
	{
		name: "Side View",
		type: "Photo",
		url: "https://1drv.ms/i/c/88f9e5f4a517d194/UQSU0Rel9OX5IICIkSQAAAAAAAJN64mz2ZpbkI0?width=660",
		descr: "In a pair of mated gears, if one gear turns clockwise, the other turns counter-clockwise. The name plate is able to open because of this engineering principle."
	},
	{
		name: "4 Colours",
		type: "Photo",
		url: "https://1drv.ms/i/c/88f9e5f4a517d194/UQSU0Rel9OX5IICIlCQAAAAAAEDHov_2ybn_5AY?width=660",
		descr: "I made name plates in different colours for my friends and colleagues (I digitally removed the letters in this photo). Personally, I still prefer it in red!"
	},
	{
		name: "Pink Front",
		type: "Photo",
		url: "https://1drv.ms/i/c/88f9e5f4a517d194/UQSU0Rel9OX5IICIliQAAAAAABPzwOpog5Iny4c?width=660",
		descr: "I made a special version for my girlfriend (now wife), using her preferred colours. Instead of using the standard black letter tiles like the above designs, I used a marker to write over the pink tiles (letters were digitally removed here)."
	},
	{
		name: "Pink Opened",
		type: "Photo",
		url: "https://1drv.ms/i/c/88f9e5f4a517d194/UQSU0Rel9OX5IICIlyQAAAAAADDXTHcRAKiN_ts?width=660",
		descr: "Opening up the name plate reveals a colourful assortment of flowers, and 2 tan-coloured rows for the message (letters were digitally removed here). This name plate now sits on my wife's office desk (:"
	},

];
