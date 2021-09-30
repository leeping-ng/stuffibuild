import React from 'react';
import TemplatePage from './templatePage';

import Icon from '@material-ui/icons/GpsFixed';

function twinGatlingGunsPage() {
	
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

export default twinGatlingGunsPage;

const pageName = "Twin Gatling Guns";
const creationDate = "Aug 2013";
const creationDescr = "I had a colleague who is also a big LEGO Technic fan - in the office, his cubicle was directly opposite mine. One day, we came up with the idea of building a LEGO weapon each, and pointing it at each other's cubicle for fun. Drawing inspiration from computer games and TV shows in my childhood, I decided to build twin gatling guns. In the hype that followed, we might have caused other colleagues to start buying their own LEGO Technic sets as well!";
const creationChips = ["Power Functions"];
const info = [
	{
		name: "YouTube",
		type: "Video",
		url: "https://www.youtube.com/embed/yKREBTL2nio",
		descr: "Watch the twin gatling guns in action - the tricky part was making both barrels rotate and reciprocate (in and out) at the same time."
	},
	{
		name: "Front",
		type: "Photo",
		url: "https://dm2304files.storage.live.com/y4mmlgM_mlcZF8ldLKMsyqnsHX_VzNYBdevGCkbwW0Ln027VM3J-fQN3UdTel6QrDYL22EkUUthFtM58pT9s23C1umXGPJ7hH9IdSyJKNECVV8JzNsPj_RT2gU2q31z5CA1dKIc8c8sfDgJCy-LpMd8aP957WXTHLcGX6sawByACGWmYBk8LuQFkjHDZskVAXBP?width=4000&height=3000&cropmode=none",
		descr: "The design had to be compact, in order to be mounted on top of the partition of my office cubicle."
	},
	{
		name: "Gattling Cannon from Red Alert 2",
		type: "Photo",
		url: "https://dm2304files.storage.live.com/y4mFQ2rK0UdV9PnkFeaS0TiNSgZjCfxYWTYqd377iHXpHpkF1JExRX80PMoiw71eC98g4pMKDwfaihzbNHPoSJjEeHJBlhzlGuqmS7joAxvJxVMVWEfSAtemT1yP2WTxcBI2_xTnMAn0eGflz7QMkf-fv-v3msY9U1TR0QgNtSKpkRAd68sRAgWQu3R79-9rkj_?width=1000&height=750&cropmode=none",
		descr: <div>The first source of inspiration for this build was the Gattling Cannon from the PC game Red Alert 2: Yuri's Revenge (photo credits <a href="https://cnc.fandom.com/wiki/Gattling_cannon_(Yuri%27s_Revenge)" target="_blank" rel="noreferrer">Command & Conquer Wiki</a>).</div>
	},
	{
		name: "Red Battlezord from Power Rangers",
		type: "Photo",
		url: "https://dm2304files.storage.live.com/y4mTtrotP9ByS4eZ8SjuwE4uaKlfEQVm_2c8ddReoSw5zzplRlHMUWRpZsYya8-rJ9ovoPoMSmgKYvVYL3iB2Zt0cbdCyzvlq3TWwSkNKq2QF6rh2s_VmHN8pUm9_FFB5MFm-N8Sz6G-Pp8VDUpk-E9WuwndZ77C3CbKT3lxvGualu79Xllfrx9IJKWG5tbXF9Y?width=640&height=480&cropmode=none",
		descr: <div>The second source of inspiration for this build was the Red Battlezord from the Power Rangers TV series (photo credits <a href="https://www.pinterest.com/pin/642044490620653300/" target="_blank" rel="noreferrer">Pinterest</a>).</div>
	},
    {
		name: "Changing Elevation Angle",
		type: "Photo",
		url: "https://dm2304files.storage.live.com/y4mLBUiUHmlO0BBDZvOXeoMd14Xi9ZdiNssBiC7wwfbmUIUUu7ekNwfXKGU8j26yNSo9bErkWqDdnK4C_Yaqojb56c7joWTfZGI61bwKPqwd0jqJdl0MWgYF75bZPxmwsQbgB9A6hGss8miHYeYNdD7KmeBJYHS9t-eMP4EWash8O4b9VhhINAqLMj8iulSL5FO?width=5976&height=4000&cropmode=none",
		descr: "The elevation angle of the guns could be adjusted to aim at different heights."
	},
    {
		name: "Close-Up of Barrel",
		type: "Photo",
		url: "https://dm2304files.storage.live.com/y4m6zlrwstYKZ8lD-76VFeiRy3JE1r-0nwjhItwpZhNSiFiUU2CJUL62fr9Dy8riXZWR1tSxAtbQ-7VgWAWiJKpdJ8_GIR8qRojovxSmrIK_8SPWyS7-z1f6AbEuN4x5JYIDjAPYDHmHynoYq4FceKAdOOgkgJKXMGFnuJjS7xsoXwnlGlcvzJdCmt-J0aswXd1?width=4000&height=3000&cropmode=none",
		descr: "Close-up of a barrel."
	},
	{
		name: "Geartrain",
		type: "Photo",
		url: "https://dm2304files.storage.live.com/y4mkoISfTO403IA7COcMuVUWP3DtfQrvwoBcZPa6RpJu1e2QxXLiBz8CCG4lXwcuJxFrEejM-vs2Hr-kOnazAES9U5A07O1bJd0Kamk0BHv3sb6RvPMmwHm62b6ImIB1sEaIiAK5S0-DMiyQVYes2HAjpGdLCiRWmgziQVHWYSgO9kiqoUgWooSAylJMnfG84Wp?width=4000&height=3000&cropmode=none",
		descr: "Only 1 motor is used to drive the rotation and reciprocating action of both gatling guns - it does so through this set of bevel gears in the centre."
	},
	{
		name: "Geartrain 2",
		type: "Photo",
		url: "https://dm2304files.storage.live.com/y4mjsnGVd7hM65y_dJ-GWoU9X0hjN83GeOXNoFwSTdwyMrju35EZ5llHeSCnDFZl03zc6fZ1YaCPi_z600T51WEQN66Ruoe7GXGFhKK4sZrmkGfYS35QdTdgQuGv1iOa43CTHhrYCCdLOHe7_PStGUbcYGDs2wiFpTPIf77tTohcc1hMFXKQ2g-3FKhFYpd9XlW?width=4000&height=3000&cropmode=none",
		descr: "The elevation angle of the guns is adjusted by a worm gearset, which connects to the geared turntables of each gun."
	},
	{
		name: "Mounted on 42009 Set",
		type: "Photo",
		url: "https://dm2304files.storage.live.com/y4m37Y87VhKUDizCvDHhPLOwDxXJCiLAncyqteyuE-pUTzAs1wnBU0dyl2wQtwv-6uYNLxPL30gPQ69qqm9iFc2pdk2X5DCdm4xQlkTds5mo3VXVCWR1BPhosoptMZtRG3vNBcuegfDrtvMuJcK07mgrZn1chxs2l3t9b-5GuROw8f7alw-wlK6rWe8JtKxP7X0?width=4000&height=3000&cropmode=none",
		descr: <div>As I worked on this design, I was concurrently building the official <a href="https://www.lego.com/en-us/service/buildinginstructions/42009" target="_blank" rel="noreferrer">42009 Mobile Crane MkII</a> set that was just released. On a whim, I mounted the twin guns on the back of the vehicle, and it looked right at home there!</div>
	},
	{
		name: "Mounted on 42009 Set 2",
		type: "Photo",
		url: "https://dm2304files.storage.live.com/y4mTLBef4UzahMcfd_ypiR29t_SqhWzm84dgGKNQJh_o_ugJmTjRe9AqcUvF2eCwfDnaYu_PvnX1-8H8FSYiLz-9U6eEQh-bqBoD6KJ09a-lYrkuKnvL-7yhkMgYUArfgOtJb2L9bnzMVo6vERgJvuUeqErKOysZAVFHbV6YkIANMRZGDZZ4gLu8sR6AqEA7UUH?width=4000&height=3000&cropmode=none",
		descr: "Another view of this yellow-grey combination."
	}
];
