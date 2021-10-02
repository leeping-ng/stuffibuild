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
				icon={<Icon fontSize="large"/>} />
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
		url: "https://dm2304files.storage.live.com/y4mEsntO4gEWM5VikoFnFIY2SOJingcMm8rDdAVU5fKJcfaT7WDCsNlKSCh8kCJG_3NwCC9TEIs4eTeBfAevZ4SFz_W_KIZ_IQpcOBNyiQF0FlIpSMRN5OWdQIKTaubV7iL3YzsowY4eXRIu_I1pfLs_mjB3oKNK17HlcGZKfaMHBwEozHpgKsAHMJEwjt3gtkr?width=4000&height=3000&cropmode=none",
		descr: "Front of the name plate."
	},
    {
		name: "850425 Business Card Holder",
		type: "Photo",
		url: "https://dm2304files.storage.live.com/y4mgmzs12kXJbxGqFAJTzcseDboBGakxdL_1TM-F7e8mmqymTmwf5M5d1x9cvQ8apILU3_qegO1hNlB3JPmu9A650Q9ZHE-rHxXFt7aw6kOxtP9B_1eIxFR-05vdFZknCl9qV3YX9e6RIQhdjv_i-N5wb78GfvgQjeyV5yIajifmw4UnlRLZ86iDpA2pUrnY3rX?width=1999&height=1228&cropmode=none",
		descr: <div>The original LEGO 850425 business card holder (photo credits <a href="https://www.9tro.com/media/cars/honda-civic-eg6-hope-for-honda?page={{pg.value}}" target="_blank" rel="noreferrer">BrickLink</a>).</div>
	},
    {
		name: "Half-Opened",
		type: "Photo",
		url: "https://dm2304files.storage.live.com/y4mQaG4FpkgKpJ5Xzs6wI8WwGRRn3XKQpjBnFpn06Ruaxo64WfeGFLhxS20E_Y5aht977zkWLFUwRYKZcjV0y9A54JQpfoq_BTQs8ZNHpQdjJQznmnUNBS5ogbxi_4zBkwqP1103y3TMW6Vbz-5Rzb_jKNnfX56n7eSlyLOWUuy5hGYy2XYXS8dtfvFgUEq-mkg?width=4000&height=3000&cropmode=none",
		descr: "The name plate can be opened by turning the gears on the side..."
	},
	{
		name: "Opened View",
		type: "Photo",
		url: "https://dm2304files.storage.live.com/y4mlbPjlCfwmYrLMI9ntHI8yBXbWBxfteH0eyXzdTFlPt4t5EgriJ9ncbU4_apA7p3hwm-1nbzUUpBaXQSQd9Y3dt9JV2pDSCEnVOvyoUImH7pFQCTHmqOxxEhF2JpY_74QoEi2e_f8-h_LXevkrLAiFxS4Y3nTxrCC_NolwveyweUT9pDfi-sOPBQMi7xxyML6?width=4000&height=3000&cropmode=none",
		descr: "... to reveal another message inside!"
	},
	{
		name: "Side View",
		type: "Photo",
		url: "https://dm2304files.storage.live.com/y4mAucd9_qmrjP2MUZtM9WUNpUpCt8xEzXnwwt2AthsNi7H5oryqeC-oZca2GFhuoUa8RbtgBAb5i6cmHZC9MzoOdKAtQFYnmqqFx3Bye6dHpzGzhKO3o_HmSlpWF0vVzOPW4a9gQGFfZUE2J9dz0Sjc6H3Lfy77MQKTaJg8Ski1WBtLB_yRnD44wCcOAQYRh3E?width=4000&height=3000&cropmode=none",
		descr: "In a pair of mated gears, if one gear turns clockwise, the other turns counter-clockwise. The name plate is able to open because of this engineering principle."
	},
	{
		name: "4 Colours",
		type: "Photo",
		url: "https://dm2304files.storage.live.com/y4mL22-3zaL2uMlEfyuejjmWla0vbiQL0toGlakEObvdzuANMKRSSmyT_tCnS4rxrYUoiFu9yPK33DtZGIGoi2T3_QuVtD8kVmq9rDKMcda7Rh3MuBCzS7zXTmJilYWLCSDbH0HYC-VcbafaTFF7gJ43TmYCJ0teWYCE9flji6NkYvIcF0qgkNQt0j-E-GiP-Hg?width=4000&height=3000&cropmode=none",
		descr: "I made name plates in different colours for my friends and colleagues (I digitally removed the letters in this photo). Personally, I still prefer it in red!"
	},
	{
		name: "Pink Front",
		type: "Photo",
		url: "https://dm2304files.storage.live.com/y4mqU_CbSl6cKDV8aaYA-GHFlGZEVs8Q07Bfk47-HACCg98M83qbc1LvdpCUAxpDzrt6ICjQ2GueUBUqh95Ox6ozJx22jbRHbZGvCDPgoapOXz-Jrc5QWzIzHDHKotXTSt8qpK9Bweh0Lc7s9X0FMtoWh_cSXsEh0056eYyvjtTKQW1e2CrBz_SVtkDjCzh-V45?width=1080&height=810&cropmode=none",
		descr: "I made a special version for my girlfriend (now wife), using her preferred colours. Instead of using the standard black letter tiles like the above designs, I used a marker to write over the pink tiles (letters were digitally removed here)."
	},
	{
		name: "Pink Opened",
		type: "Photo",
		url: "https://dm2304files.storage.live.com/y4mPGHn8n5hcPEbAlaaAFPFUr467OrJgiVTnERynQYFEmgg2Ycw0uFwJimkfLLCbxgUpcHWL4Ymv_VdrAOlBjc2KM2Y22A3D1jc7F0qqSSFODHFVOb6gKcjO8SQLCGAlzqni-nv_eLgRohLOKIRaP5JQj_7Ilcyu00yVkoMM6lMK63wpUB113vbATx-ISji_zZK?width=1080&height=810&cropmode=none",
		descr: "Opening up the name plate reveals a colourful assortment of flowers, and 2 tan-coloured rows for the message (letters were digitally removed here). This name plate now sits on my wife's office desk (:"
	},

];
