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
				info={info} 
				icon={<Icon fontSize="large"/>} />
		</React.Fragment>
	);
	}

export default tukTukPage;


const pageName = "Tuk-Tuk";
const creationDate = "Feb 2013";
const creationDescr = "I went for a short holiday in Bangkok, Thailand, and saw tuk-tuks everywhere. Tuk-tuks are a common mode of transport there, and the name is apparently derived from the sound of small, 2-stroke engines. I started thinking about building a LEGO version during the trip, and when I reached home, I got to work right away...";
const info = [
	{
		name: "Front",
		type: "Photo",
		url: "https://dm2304files.storage.live.com/y4mXaxjb1c7p8RtXTo-7wFM2KSzxbzNzlTAq7vCN8HvWlaS3ESGbc3R6xmpySgDJz6Lj1zQtp4JPrDnHlMZWN0hzbW-VXmtt8tdiQ0EfLGl8uEoOBnf7e5pHeh9bTaVf09ppSEhKdGYM74Lb22I7IE5zBswBD0WUwnj6MjWbaRWxD_6gyJ_ChnMoHzp54Cuja_5?width=4000&height=3000&cropmode=none",
		descr: "A combination of bright red, yellow and blue can look garish on other vehicles, but not for tuk-tuks - many of them come in bright colours."
	},
	{
		name: "Real Tuk-Tuk",
		type: "Photo",
		url: "https://dm2304files.storage.live.com/y4mFQS-U6Rbzsr9rhAGlAyl6D8be8_3gife7TwnJQXI-yBejHLCQhpszv0sL0JQCSgXCKj9Vg-htcw-v3yAs6IuqZFefO0zSzXfT7q5MQ56lPWq2xt2EY0jpCKYix_z_vrPF0sJ3V4wwI2qooINKSadIzsuw_zhjStKxUY_gjoQpS45jcawOR_eJywPdh3fO6i8?width=4000&height=3000&cropmode=none",
		descr: "A real tuk-tuk with a fake driver (me)."
	},
	{
		name: "Steering",
		type: "Photo",
		url: "https://dm2304files.storage.live.com/y4mr0ZmtVTDVKisxNK2CERgOHzdWqy_qwQmURgKVbyoCzQbLHiDkVVKsGb-gOCpy99kTpNzrR552N9sezLXFTWLxYplW6tWcRuThKzdutzhRXG4EyiBFg5yj5SPXC09PPPCi3dW_z4yz_jaSmNqB8vo2sTpQoCjs3pGyypLEzWd14I6VI0nG-Rp9SXvKRIl7iKA?width=6008&height=4000&cropmode=none",
		descr: "The front wheel steers just like a motorcycle."
	},
	{
		name: "Suspension",
		type: "Photo",
		url: "https://dm2304files.storage.live.com/y4m6yC267xJ8ROBtWVzVgrrxCfhE1AzgbgwlyzIrcRch3ZrAxNOOFRB_hqv9uaFyTFv4pHVkbdgWbekmBx6e_Qej3N7pYNt9begzDfB6BploaNILTWrILFtLVctSm6VNfyKJtR3BUVLGkiOEtyqFzXmAh0ctjh3Pw19Wbmajeh_76PtXLfMyvVULODeEoe0JgFZ?width=5496&height=2960&cropmode=none",
		descr: "The LEGO tuk-tuk is very compact (roughly as long as my hand), but I managed to squeeze in coil springs for suspension beneath the passenger seats."
	},
	{
		name: "Driver Compartment",
		type: "Photo",
		url: "https://dm2304files.storage.live.com/y4mqx54ORfzloaItZjqid4gflQdGD1gwZ36iX0ZgDlqkhSM6NqSrBr1WMOP91JDN5TeFaqG5yyZ-JXryk9KyqJmR9OVN5E316U1pDyzOBjyNxsD9ZbbtiiOY3SkGkkP3ExRB9dFE6dFtNIhFQqJxP_S59bxLtXDMUnrWauNvFou-cbemuAEpwq9vqXQECCOBohi?width=4000&height=3000&cropmode=none",
		descr: "The driver's compartment includes a functional handlebars for steering, a gear stick (yes, between the driver's legs) and a battery replica."
	},
	{
		name: "Bottom",
		type: "Photo",
		url: "https://dm2304files.storage.live.com/y4mMIlekg6FFNvtd68D9L0uwJbPzZvePFZPC_5RaYfmI2jZ2yAQ6hjm0O2YNjT5RdRsMAF0B_Ixhz8kIGB243OV_FRLGoBmNw85bamYVzn-1VYmyr-gYA1l5AoMz89ZLT1dWnYA7bC6kxXSxhGWOcNRwVdrVHh8gbFxZtAA1Dd02CmnwMALVA_r0eWmq_6JRtSR?width=4000&height=3000&cropmode=none",
		descr: "The rear wheels connect to the red engine block and white fan underneath the driver seat, through a pair of bevel gears and a universal joint."
	},
	{
		name: "Rear",
		type: "Photo",
		url: "https://dm2304files.storage.live.com/y4mQwAhuqqj2SjJnA6Lmgv4Rn3o0I2CqDld-o7mPykZdOTnuxVch-GTR8XTZ3ognK2A2ELhE3LZiXCmciMkhrOKM_v4bSSlx1KlDWhalnyTK-xUUSRLggqN245eZSn6NH5jcSbvNd4xmKBdek7V4ljs-1CPfBdWQE02SMckCFNyxHjqE8RxfRd1loFDjXsb6Jm4?width=3000&height=4000&cropmode=none",
		descr: "Rear view of the tuk-tuk. I enjoyed this build very much, and this was the first creation that I did not dismantle subsequently. 8 years on, it is still being displayed on a shelf at home."
	},
];
