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
				icon={<Icon fontSize="large"/>} />
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
		url: "https://dm2304files.storage.live.com/y4mkw3SRT8HjQnXJ8vHZnPCSessTZZWu8ZGeoThI9MeSDJu7naAQp-E88oi8fgPF4cuqOP6QdZc5p67-TxwqZmxk-n8g195stEzsjKOAQFjU_msFz88wVMAk3sJlY9qVzhEdKsaCSVXiB-mz4f3d7Sz92T2D_q0AHQrNSf_IcQe_64LlddABAxBhS-RiAxp1Y8j?width=960&height=720&cropmode=none",
		descr: "I used 4 motors for this creation: 1) for drive; 2) for switching between land/swim modes; 3) for switching between high/low ranges; 4) for steering. It was all about optimising space to fit these motors."
	},
    {
		name: "Engine",
		type: "Photo",
		url: "https://dm2304files.storage.live.com/y4m7ta263Oq5jI6pAEg4Q3gAayQqp7_n-0K_ZWM3EX4gWq3uZNgCjWLkrwjCtHrmmWK-1MF4mjMikH--MMUBtlN0Exw5CQUGtKFLjHrhRZwyNUVqcnIGgRxzUTq5RN72T39mEC3X3BG11-E0UyKqfr5WLACfwvAt7u7L6p0PDw0Y94jubqtnm09vGrTrBTEfgku?width=4000&height=3000&cropmode=none",
		descr: "The transmission is 'powered' by a V8 engine with 'twin turbos' (the engine crankshaft is actually driven by a LEGO M-motor)."
	},
    {
		name: "Dual Differential Drive",
		type: "Photo",
		url: "https://dm2304files.storage.live.com/y4m021Zs8mcCTbX54aMmbM-kOgLYA6PMyye4yPpZac_58Sp8yJ3-2Fgf9Xb4wAdszb-nwy7iIBWLfhU6-DUzn8M74H3HLc_a9lDJTVrW9wqs-5Kl_4Xyw8j2-6GNtMQg-SgfycUKrkbeFtxz-R74ko5_EeVYo1dRYepOgSvnmfaEYnh2I2n7m4gUkp8h_2sqaOe?width=4000&height=3000&cropmode=none",
		descr: <div>The sprockets on both sides of the transmission connect to tank treads which propel the vehicle. If both sprockets rotate at the same speed, the vehicle moves in a straight line. If the left and right sprockets rotate at different speeds, the vehicle steers. The drive mechanism used here is called the <a href="https://www.youtube.com/watch?v=_z3n6VOk-Ls&ab_channel=SpringHaIo" target="_blank" rel="noreferrer">dual differential drive</a>.</div>
	},
	{
		name: "Propellers",
		type: "Photo",
		url: "https://dm2304files.storage.live.com/y4my7_djncHHj_nvMb_ohQJG7s2-2kd0oGhBESfLjK2yAndhHOqnVNpcOvHcKGw8136DJhGqP4AoE5Lu00YEeQidaw1QrY49lkciufKozo4A9nlpfu4OPMTjUvOKW3QKpQHgguwocgZ2UZsxSlhNwW7U6K9bZQCJHa7Fj0iAvOvBnG7oxIVYidqjCOL5teFsLfT?width=4000&height=3000&cropmode=none",
		descr: "The vehicle that this transmission was designed for can move on land and in water - hence it has propellers!"
	},
	{
		name: "Propeller Drive",
		type: "Photo",
		url: "https://dm2304files.storage.live.com/y4mywFZCI7Ah_1EC--LpMjFWn6ttb2B5HsPRM3a1tkQyBqHuAJLSs_JLyI3N-aUca7mM6jIOayQCCtGR5FR-fY_kdPYIJhox3lBq0y5h08NB72umHesSsh2ym1JngSHQV79jFlbuGFJdy3UYvZtGwYKVIoMFLakMQDW9Xj_kC3LKfkqE02RJ9UMjWHpC1GpV1DT?width=4000&height=3000&cropmode=none",
		descr: "Power take-off (PTO) drive for propellers."
	},
	{
		name: "Land/Swim Mode Selector",
		type: "Photo",
		url: "https://dm2304files.storage.live.com/y4mri42ULlLfrzd39lJIU6Wx_Z4HXbpZ3w3fwC4aA6T_VgBKJAw2yq-6PNWvYWQGujRLJol4Em4edR3YKLLPppg4pUErP28-N_99gc-zPz8Bl8oH9LnrnRJM36PhWG3oYSkNk5WqIxBYC82cd0SG9c0OULdFzIix82wLPnCPXXisSccJQdfq73Uy_0avw1wtJGe?width=4000&height=3000&cropmode=none",
		descr: "The red dog clutch in the middle selects between land mode (rotate sprockets) or swim mode (rotate propellers). A M-motor moves the dog clutch and is controlled remotely."
	},
	{
		name: "High/Low Range Selector",
		type: "Photo",
		url: "https://dm2304files.storage.live.com/y4muAzdbm7mzadKrAbXvcCXUeQwtO-TNxw4RuFE94mrj7i3SDgXmZIy3xeZFZ0n78qyCojF5TcmJwxYckAiRwcGL3fXW2vMzVgJx5U0lpbJkQ0RbtfZw-g_ZgaSo2nBz5TueVc_VpANn_gzr-pgPbDRqgpaZ4-A2EVGEL9v2hSKeFUUiawWmn4s2exY4erBUerF?width=4000&height=3000&cropmode=none",
		descr: "The red gear selector in the middle is driven by a M-motor below(hidden). It moves the dark grey dog clutch to select between high or low ranges (3:1 gear ratio), and is controlled remotely."
	},
	{
		name: "Forward/Reverse Selector",
		type: "Photo",
		url: "https://dm2304files.storage.live.com/y4mRKe9agAaoKswTR7266ZcsSUnUlqI8XH1xA2ROnGq8PdozbduwNtTM0fnXhuUA7o8rhcetT021oTbOhixuhlDZ0Jk_D7nAjx1FnzBsgweY6mHXZq2I4OKQXs56dmeMAdnOLaOGrmL_UgIAxy9Hfa2Y5MgCP8vMg1GEwNq7oUqj7O02yKXLHFnH3d337Tdcb7t?width=4000&height=3000&cropmode=none",
		descr: "The dark grey dog clutch between the 2 read gears is used to select forward or reverse gear. I ran out of ports on the IR receiver, thus this has to be adjusted manually."
	},
	{
		name: "Side View",
		type: "Photo",
		url: "https://dm2304files.storage.live.com/y4mziixnEEZuQTSb6z_oDNYvQZLcs09D4kdOg-NkYhKIKhpPw3lCNIc51ZS_P-3djmL4D6pGjWwDsCVLHxnJ5lQkkK2S9CFD0xPdSVcGv_lM6gPM14JDFYiMc9uUANZ7v_Ylww53M1zmnm48V-C2X_9-SL4Aggrf28mhDEpAhLzQG5UIQcprJM0UOziXsKETl7s?width=4000&height=3000&cropmode=none",
		descr: "Side view of the engine and transmission."
	},
	{
		name: "Bottom",
		type: "Photo",
		url: "https://dm2304files.storage.live.com/y4mwZL1K19S_SMPV_PMtpkba4EkMIGYW_v1s9PtGJ3U4nql-zOOmFK1khB3KRyPt-o2-br7hR0WMCWcbdRmXIZcHFjdKj_pU9UXfWPo0pHFAM3CUd4mGf98M0CVvMDDvxryYGv7Sk8FANN1qoN1v2eMJfyp20qmoAg0q_WsXrvf3fJNfaTVp2IwXNTcCQN4CosY?width=4000&height=3000&cropmode=none",
		descr: "Bottom view, showing the battery box underneath the engine, and the 2 motors at the bottom of the transmission."
	},
	{
		name: "Remote",
		type: "Photo",
		url: "https://dm2304files.storage.live.com/y4mQ4kqabhyV3GXCksrP9kO5occqsQPHRUib0cG-YlICi4_dh2q4PQEQJXVPOeTw0-DIqCgvwRhtLmBpOqILXjzcL0gp2yVn0GjyOiVCq6vExnfNJnlzyV3mHwyggwXx4J26ESNjZn7vYVb-Rb0oCWIvfmmZneBOsGtMMkJyvinUYZYwkkAK8Ic6xPB6_icA8wp?width=4000&height=3000&cropmode=none",
		descr: "With the remote which controls 4 functions. Rotating the steering wheel changes the amount of steering, while rotating the gear changes the output speed of the driving motor. The 2 red levers on the right side are for selecting between land/swim mode and high/low range. Next, a bit of history on the design iterations prior to this..."
	},
	{
		name: "MkI",
		type: "Photo",
		url: "https://dm2304files.storage.live.com/y4mPBzuz5WN9ZyuvnBTeWs0B_yL9M05LYM_w7ON0ThoE5IOK49TaKqs7vC9iBdCkTEBQW2DGMXMtmOvvgoFu0alRqZmfS0xj4czJJFSEJq-GxhdrcP0ztt0CZtSVQVWQybINFcDvzDyUZMBpNFJptrVpm940MnBOG2EgOKJSqxjLWscrQv_SRlUtR4nVRUe3yP1?width=4000&height=3000&cropmode=none",
		descr: "Mk I: I designed this in June 2014, almost 2 years before my final design! No motors were used, and I had to drive or steer it by hand. I intentionally made the design flat, to be able to see how the entire geartrain interacted from the top. This had the downside of making the transmission very large."
	},
	{
		name: "MkI Ring Gear",
		type: "Photo",
		url: "https://dm2304files.storage.live.com/y4m6myzRoSlQJdkYeoLefcRVDZ0hTfMouhsoGzv5SeAoV4oq0ic9rGAGXYHa3e5f_Dn2vXH3r37He7GCc9dY9yf9PBxpq0haBLKpyHsG8pT5w9_Np2pxQohrJg_n-sWQUkF-GEh00FbUmoQeTXBwC73ckQTjc8c7e1Lvch09_QLT9WcHh2L_A_lYatNvgwXZbHZ?width=4000&height=3000&cropmode=none",
		descr: <div>Mk I: I used the internal ring gears of <a href="https://www.bricklink.com/v2/catalog/catalogitem.page?P=48452cx1#T=C" target="_blank" rel="noreferrer">Technic turntables</a> to create planetary gearsets for the transmission. The turntable is very large with substantial friction, and this made it difficult to turn the transmission by hand sometimes.</div>
	},
	{
		name: "MkII",
		type: "Photo",
		url: "https://dm2304files.storage.live.com/y4mTLIymGPZZZ6Jyy-Pab7csN-6uomsT3quFHtVWnDgNcm6PWZ4wrHORjfEscqA9-eUCZsWNrEzjyi-2Dol_R1-cvgCOFrSyFc-bkxJEOU0X0yKHbPAXpIfiRDGj6rYN9Hz58LxpN6nRTwDVAmQEMe8fA5rJyDjO26Vf8O9NtpGZGLpc7cp6wOS0mSMOa-uyzVn?width=4000&height=3000&cropmode=none",
		descr: "Mk II: I designed this in December 2014. This had substantial changes from Mk I: 1) motors were added; 2) a v8 engine was added; 3) the mostly 2D geartrain in Mk I became 3D here to make the transmission more compact and of a more comparable size with the engine."
	},
	{
		name: "MkII Limitations",
		type: "Photo",
		url: "https://dm2304files.storage.live.com/y4mXDdhSZO-Y_Yx4fHiZaDSWTh7ZHMcQ1D-0O6pn_x90kJ1rgL2V-c2aTJXsZ47SVFCv92XX9ZkJxXDHNo-q6pspllh2z9EWvOhhsis4y54qWOrqlg9T3lfuOqwUOCbD7oD7soJP9BJmjamnVHFW0kIzPcsmBCKcOtvs-tgbOes_W3iEmyLdMKDVyPwLCrC7C6k?width=4000&height=3000&cropmode=none",
		descr: "Mk II: The main limitations of this design was its large size and high friction, because I stubbornly continued to use the Technic turntables to realistically simulate planetary gearsets. Due to this, I could only fit 2 motors (instead of 4 in the final design), and sometimes the driving motor stalled because of the high frictional losses of this geartrain."
	},
	{
		name: "Final Design",
		type: "Photo",
		url: "https://dm2304files.storage.live.com/y4mUxyWGamkCFcyXvAljDcp29BSZh6qwQREe0wl5BHRnGJUQU422KPrB9XNVkv3egeW4njJbEK0eZ7XGPdpX1r2a04Dad4ZFFg_N8MaS1Y5iZG3sNDFX-HMpUIDwIE_UrfQkMKZBplweFojwF9V3dsQ2yZtVloakValoEdqlW7BmfU9pgGQYIOFM7A9cNyWmhZZ?width=3264&height=1836&cropmode=none",
		descr: "Final design: I had more than a year to think about improvements, and I decided to replace the Technic turnables with differentials for steering, and simple clutch systems for speed changes. I agonised over this for a long time, as this deviates from a true tracked vehicle transmission, but ultimately decided that the improved packaging and performance was well worth the trade-off."
	},
	{
		name: "Final Design Compact",
		type: "Photo",
		url: "https://dm2304files.storage.live.com/y4m7jKx-6pLQiPXTk-DGGMzbTPrcVjU52T_8VwO2SMsq69MbQ4n0X-eCufzbAY0dnTswr36X0ijs25j05I4YmwcZubqx4VY7bXZjg9qbl04OGxxS-KqK4rI1tf2mJtygwagPGIVgg8fXNFMGkU9JrX7YKlJZN0Zi-Yxj-wuLwdOA_F9XPnFs-713BNBtQ_FMJSZ?width=3264&height=1836&cropmode=none",
		descr: "Final design: As a result of this trade-off, I was able to better optimise placement of the motors and gears, making the final design much more compact with far lower frictional losses. It took 2 years to reach this stage, and I learnt many invaluable engineering lessons along the way!"
	},
];
