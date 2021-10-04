import React from 'react';
import TemplatePage from './templatePage';

import Icon from '@material-ui/icons/Settings';

function towerCranePage() {
	
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

export default towerCranePage;

const pageName = "Tower Crane";
const creationDate = "Feb 2014";
const creationDescr = <div>About 6 months ago, a like-minded colleague and myself each built LEGO weapons, and pointed them at each other's cubicle as a lark. I designed the <a href="#/gallery/twingatlingguns" target="_blank" rel="noreferrer">twin gatling guns</a> for this, and we had a lot of fun messing with each other and showing off our creations to colleagues. We decided to do it again, but this time, the theme was: tower cranes! And therefore I started designing again...</div>;
const creationChips = ["Power Functions", "Gearbox"];
const info = [
	{
		name: "YouTube",
		type: "Video",
		url: "https://www.youtube.com/embed/le647a17z6s",
		descr: "A video of the motorised tower crane in action. The challenge I set for myself was: to only use a single motor to operate the entire tower crane, via a complex gearbox housed within the crane mast."
	},
	{
		name: "Display",
		type: "Photo",
		url: "https://dm2304files.storage.live.com/y4mDW5Y7sy_o2MF_kAvnH1xGVzoSAoRX2rQN0U7A3DM_BbK5SGvFyf9IYqpVb2DT0B0rH4v3lppVbvwWmhfGFLB05CxR2rUv4Nwi3gI_SG9iBo7cj_Nt1LHKRHJ8WkTGpdozNnvBsjzUauId5wLGTON0nViLGs2_2DHCyL6dhIaAhXb-jCk-6lQrBiRJZAyPJZP?width=4000&height=3000&cropmode=none",
		descr: "With real tower cranes in the background."
	},
    {
		name: "Construction in the Background",
		type: "Photo",
		url: "https://dm2304files.storage.live.com/y4mO1ezK7ajfJ7G8fDFRiujOprBvvdMgjWXSGOvVIGFj43k1baSWj_NkZ94aFui5tyWxuO5OyBltT5PUA_jqMWp4pJW3RvfscZj92Jz0eILJ7GHziGLBzOIVwh2Yx1-mTyZ-9VRhPOyuECeSkz8eaU16O9c2JqBMixn18SsGygwc10ziBfvAExW6E_a0t66ktaU?width=4000&height=3000&cropmode=none",
		descr: "Zoomed out - this photo was taken from the corridor outside my colleague's apartment. The crane was perched on top of a stool and storage box for this and the previous shot."
	},
	{
		name: "Gearbox",
		type: "Photo",
		url: "https://dm2304files.storage.live.com/y4myfOvrZhV0SkBsJoOsjYFfPurtrm4foKWaLe_MlenE7rUo8sbcXmGYW2cWcYbpgcYqsm8slhiMb8pjTouy5kWHMZZRZD-mI4EGLZTjEQtLHV1CPtjJ-oIdH9OizG3NmkJkSm2PNkXlNmCKetfVtw7LeP8y9EmyZhRmn5HnbIIJwrwsE5VI8N4KhfX7zjX7WCJ?width=5951&height=3946&cropmode=none",
		descr: "The red selector is responsible for selecting which part of the crane is moved by the motor - the hook, trolley or jib. It took a lot of trial and error to design an arrangement where the gears and shafts fit within the 5x5 stud mast cross-section."
	},
	{
		name: "Hook Displacement",
		type: "Photo",
		url: "https://dm2304files.storage.live.com/y4mefhHVASPPUrduFSegyGo2Id0mLFJpgCOHb8OtFG4QmzFrLMW3YazGgZULDAsK72DHOeFu9WEnwfUz06xdiZd5JReIH_YNvRkF3U5pFK_e1as0M_mVuTnOE08_gl_jYL7CIVa5Fh4s3kpka1qW22SxZATz_cbP1_bG10i_wL3NMJ8jSOPiP6zKGL5k1H1SOit?width=5624&height=3952&cropmode=none",
		descr: "The hook is attached to a string, and can be moved up and down."
	},
	{
		name: "Trolley Displacement",
		type: "Photo",
		url: "https://dm2304files.storage.live.com/y4mO-mCzkgw2oG6wmpdH38O_4tV4zSFfPU1YNhr8llwqK4VPNSZXRAPh_L-JoUfabsQvvkb1MmzzEyWz-Gi2xb8Dkg8E5MgzJ2SlUWuBbz81RibQ_xOhLyW8pOn8Jrjku6tjTeY5koz2US92E9V-WB2_bFxGvyL9mNoiPExI4iul7e2-DJ10rqeQjv8DdKnknwT?width=5632&height=3944&cropmode=none",
		descr: "The black trolley can be moved along the jib."
	},
	{
		name: "Trolley Mechanism",
		type: "Photo",
		url: "https://dm2304files.storage.live.com/y4mg1D4xbArEwlzpw7BIPubVLlhtOwygi5sQJehOMBVyXkQq1YjqF-t2nqphbnlCFvmMtxhlZpDq7WslxU34aWc0x1lBWZZ4OVHbPxWj9IMYJFdlHs8zkcODjiM0syXx_pv_XJvh5Qv6G5vrJDZy_9OULmuRmY0l7WmDgCjQD9FFFtCmuiziaF9fkqQ3toWV3ZV?width=4952&height=4000&cropmode=none",
		descr: "Movement of the trolley is governed by a series of gears from the gearbox, and a rack and pinion gearset on the jib."
	},
	{
		name: "Jib Rotation",
		type: "Photo",
		url: "https://dm2304files.storage.live.com/y4mVv23qXC_LSNULgS0CvJwEGGWOiRMNlSTvbl5DahwSMTYr65GyF8A2UUMQLz4JjfHZBHxQV6zayFemONtFkO30Wuq-uy9UQSasm9V3U48AN6aXdR2zsF0c4gX0v_8uVolPTtbxpjRR30PYpAnerX4JDCteoAIoODk6yGIwDHi9e9Nc5GRyHKUc2J9qaYGBFUm?width=4496&height=3968&cropmode=none",
		descr: "The jib can also be rotated."
	},
	{
		name: "Full Length Shot",
		type: "Photo",
		url: "https://dm2304files.storage.live.com/y4mNU96LYCzbMiBt6FxIlCVRIr-3XciAMtBUhJi4gj8cTnY-DOogW2heWkR5zV-Zrg1c7oSKttPR2dAMy2IYtEqCcKWy7VUGlVj_KFeOgM7bI6sS0U-PetS8UxEF5tPYmJKBYzxNOeXvCFOgXbEQrAog0gfY6S8mv5D0ZcNDipVQp_lD5Ftgz2xHdt98CLPrYc-?width=3000&height=4000&cropmode=none",
		descr: "The full length of the tower crane. The heavy battery pack is placed at the bottom for stability, and the driving motor at the bottom of the mast."
	},
	{
		name: "Disassembled",
		type: "Photo",
		url: "https://dm2304files.storage.live.com/y4mWVyifuPgsCaEKHlFrRrRQprVTTeY5wcrBktfRCCz-SAh58WQ5-3WhzH4BAc-z4lKFvGBGkymtZQ_2qprOtYIuR1QVHrMJ3VI26LLowmCa7fF3adLWLcPnMaRGfrsHB7cpl76ddw3SybjUSxCpEv3huDerYfDoOmxWumMTvi25Snovhlj2N8i9cXWmaDDayuD?width=3000&height=4000&cropmode=none",
		descr: "The tower crane can be easily disassembled (this was how I managed to bring it to work)."
	},


];
