import React from 'react';
import TemplatePage from './templatePage';

import Icon from '@material-ui/icons/DriveEta';

function droneTransporterPage() {
	
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

export default droneTransporterPage;

const pageName = "Drone Transporter";
const creationDate = "Sep 2015";
const creationDescr = <div>LEGO Technic released the excellent <a href="https://www.lego.com/en-us/service/buildinginstructions/42043" target="_blank" rel="noreferrer">Mercedes-Benz Arocs</a> truck in Aug 2015, and shortly after that, announced a Mercedes-Benz themed competition. The objective: design a Mercedes-Benz truck for the year 2045. My concept was a drone transporter truck, where the drone would be used to track erratic weather patterns caused by global warming. I also imagined a fully electric powertrain with in-hub motors, powered by batteries and ultracapacitors, with autonomous driving capabilities. This was my second LEGO competition after a successful first attempt with the <a href="#/gallery/4x4crawler">4x4 crawler</a>, and although I didn't win any prizes this time, it was still an enjoyable build!</div>;
const creationChips = ["Power Functions", "Contest Submission", "Gearbox"];
const info = [
	{
		name: "YouTube",
		type: "Video",
		url: "https://www.youtube.com/embed/aerEUvTyEEQ",
		descr: "A video of the drone transporter in action. I also included some pictures of the design process."
	},
	{
		name: "Display",
		type: "Photo",
		url: "https://dm2304files.storage.live.com/y4mBUYLWY5yANKcvuQQLWxxr_IAbTTcEu37LrNTIFsCbc0GYB1BUDZQKLyu7MV5uKWI7Qx2BhORIRRjmH5qlFAdsSbVdDKnx3eLoozI-eBfnLO6_tTuaSa-fMN-M8_BSCuhNjWLutHpVTEvbDU4Pk1nQaBllA7w_Z3JfA5-p8LZI6gEU4kYT4zzmmoYcqehp-gg?width=4000&height=3000&cropmode=none",
		descr: "The drone is ready to be launched!"
	},
    {
		name: "Front View",
		type: "Photo",
		url: "https://dm2304files.storage.live.com/y4mMhnAOqszWlwcwM4Q4KXAaCimywEBZ8CCR82GVUd_byK-uZCDxS6DlWeK6EdSW25_ZD-VzFLc4mP1ygzMn0TNOP5EBHXBAuteyQCe8l13Nc2RDt2-npHQY8AFKZXs5JbVa-Lwn6FgwkylX7rSVDMrOSNoNicqct_igC6TZ5Onrozy1CZvHKYfy0d2aeEahwiN?width=4000&height=3000&cropmode=none",
		descr: "I fitted a huge silver Mercedes-Benz three-pointed star in the front of the truck. I used a rather unconventional approach - this part is actually a wheel rim with tire removed."
	},
    {
		name: "Rims",
		type: "Photo",
		url: "https://dm2304files.storage.live.com/y4mRVDGsBsuQl5n3qHZO_R2Vuml2Y14FkuBq1eVPCBNLZwMkusWOyoqWinMFMLF70mQIftoJcEQjOM3Qy9LXKl99su1XBQvrhwSfp0zOEMzAZz5vysJx5NfYlLi6TXWjcLnynPoOsBmpQLeXdnI-snL5aWBafa5vDOJZBM95ut_7-6ytTCXHxQrMZn9KH2PTo4z?width=4000&height=3000&cropmode=none",
		descr: "The same rim was used for all 4 wheels."
	},
	{
		name: "Headlights",
		type: "Photo",
		url: "https://dm2304files.storage.live.com/y4mT3DGTbZY4a4Ym-jEHG-avHDgzB3xKc524nAZ1iRZEmD0AprXAI6mL0KTr8gKTzaBpaSvygSTR8PuHUI_il89f_a9PlMuegda4iS5uw2oLFxSBIwEZcC37eQFEOMJ7ff-1kGqM56CITB-ubiSzsAbLJPyXir7ulmaic-mx_jr2E0jSPOGmAQFJf1Apzi2z4Du?width=4000&height=3000&cropmode=none",
		descr: "Head lights."
	},
	{
		name: "Tail Light",
		type: "Photo",
		url: "https://dm2304files.storage.live.com/y4mKqOfMa3X87p14FZetj_vvlgut0RtzSbXred8vJhqMA2VqC3Fiyi13JHZM9sxqomJ6YyyyqvTsHOKLbQJxyWuMLu4GR_UC0dI7GrnHXmF7kzwlev_MajrrPG2R2aMykyb6BjSQac87giz6mu_EjNT16NSwVYMqSyKk-qPiPvh7qWT2IdeGv0bwbrjlhYejhgZ?width=4000&height=3000&cropmode=none",
		descr: "Tail lights."
	},
	{
		name: "Side View",
		type: "Photo",
		url: "https://dm2304files.storage.live.com/y4mu0Gs2p8WFFfpVvOn1VY7o3bAtUOP_3hZcNQSZzCMNTXA4fMe2y6M43tNCKeriOhBj03EA--wq3F4CWbCXVBzaUHMuGGw8qiCNqVFYam35htpaGMvoQEasEYzv_sTNO4E8PHWKR-f1zU-Byglq1gvIgKGxf8c_a09V915ns1ysj4vmuC1u-w8ZLIF8FMTaLGE?width=4000&height=3000&cropmode=none",
		descr: "Side view, with the drone stowed."
	},
	{
		name: "Top View",
		type: "Photo",
		url: "https://dm2304files.storage.live.com/y4mmdopqM3lP6g9UufUhn4IL9O9HdpSLuIjuzmDFN43BNlcHmj1DtfKTNA2YKx2DH1JEkdNGomMtd979HL76XKAu7h-C7tXt2Dv4SItmyFNPXCXYcmVdZZOire6NLyD-6_Y_6h9y8zC_Y-pbWYGfnlwYtvRxbBfunDW6mjXy-N9ZwENKjTMP_FeLS5cQGmTwDqD?width=4000&height=3000&cropmode=none",
		descr: "Drone ready for launch."
	},
	{
		name: "Hidden Controls",
		type: "Photo",
		url: "https://dm2304files.storage.live.com/y4mYtKVb-kzViCPYkHa06tjb4aDZGZyRRV5--iAOyiop-bDbzRSX18q_1PD49BEACTil-EQNe4koj0Pd7ngGeCWglWYY_9XbspsDlFxUvvLsOmAlSsoPdr9ivOVISCUAi7f-qnOv3lqs0YEGtLr70wEANTrJDSJnNgzF59BvH4dSDgRHpN-NGVtdqpt--HlDjb_?width=4128&height=3084&cropmode=none",
		descr: "The on/off switch for the battery box and the 4 levers for the gearbox are all hidden from plain sight by default."
	},
	{
		name: "Drone Deployment",
		type: "Photo",
		url: "https://dm2304files.storage.live.com/y4mQYCrLjt_H8h_jRChBPq30bYgf5ZHptWHh_XTReDgFDIylErgz6c1WPWOD-p3538hkcQRbgWlx3rj1aNwNMcmGbKTFciDaOYLhTHgU4GlA7ZguydZFDlpVl1VuLnDLzGBcpR7KxP98xNFJEYtuOFS2ORa8P30ncWSCCRH435KdeqCKKvfCMAINHQU4CZkD41p?width=4128&height=3008&cropmode=none",
		descr: "It takes 4 steps to un-stow the drone and prepare it for launch. 1) Deploy outriggers; 2) Raise the launcher; 3) Open drone wings; 4) Rotate launcher."
	},
	{
		name: "Drone Take-off",
		type: "Photo",
		url: "https://dm2304files.storage.live.com/y4mmBtma79v1-eDZ2Crn16dUh9MUlB_kl4255b13ei0cPygf6iafbZgC9u21nu3H8VKfz5WANz2ZJ1vBYbYijQh-7_DdroKzEAGzZAWIs9zrjc2QS10zpYX0ZN2y-dgEXDPhgkAHTGjOmEKTe-w7EECE9_SRLJe_Jhe65cfxCBT7bv9fWRLWTZkfKWJabtRWfMK?width=4000&height=3000&cropmode=none",
		descr: "The drone can be detached from the truck when launched."
	},
	{
		name: "Drone Mechanism",
		type: "Photo",
		url: "https://dm2304files.storage.live.com/y4mWoeCN4oUZb2rQh01G6V26Gg_76lgu16TI8gMf_P43NbkvTnMzw52hpLGW0EW95N8XHKk55bZqMuh3Y2KlIII6_ktom0tHs9pKd-nW8bNIifupuWlWg6S7ozz5Y4m1SMVgrOIykQtVgegM6RbstZBzgXEmMIsEM_KwMQ6yzzZO9TY7j5Sn8au9pKk48_Fv4dz?width=4120&height=3096&cropmode=none",
		descr: "The stowed drone extends its wings for deployment. I used 4-bar linkage mechanisms on both wings."
	},
	{
		name: "Launcher Mechanism",
		type: "Photo",
		url: "https://dm2304files.storage.live.com/y4myo6ZKGMTixHybG9jXYbuUEHaBnUxAi1wwqhcWUHrqa10sEfd6M9PajZ1j1CWLS2AL5q-u-QxC0tR_gVfO15mP4cq9E4X30l3UrL3EJT0QW5AWIDGzXHpkmdiDZxL5MqIB6MwarH0ryME5M3-6IncNo0AE58XopCANyIJS2z_vULGK-zdYKky7KSUWxwjkd-J?width=4112&height=3096&cropmode=none",
		descr: "Mechanism of the launcher that is responsible for raising the drone, rotating it, and extending its wings."
	},
	{
		name: "Gearbox",
		type: "Photo",
		url: "https://dm2304files.storage.live.com/y4m39vsh4kz5gxreuPq7R5c-conW6G5I2dtG6to_eugZGcx3ab5l4YrOr2RehaJt_dGTfMrMjYjrCW6iR322ZgvIuRuK5JGhggKLdOdIUilv0-lQbneHDWmi9gKNEVJ3-5ie0zUiFQkD1UXnSgYDMtX2cwndVRb3Ipw4i_4RFpxOr_5WpSMX34Jtz51cYfaS4gh?width=4000&height=3000&cropmode=none",
		descr: "The gearbox that uses the output of a single motor to perform 4 different tasks."
	},
    {
		name: "Driver",
		type: "Photo",
		url: "https://dm2304files.storage.live.com/y4mqpUNxvupfAVv8KLtPW52t31KTwq0t6QyeGt75J1xH5coPsr6caXD6SpIAOG5HWt0tOsGfUPRb4kFq-2BpM9m2iPZwMKsay0SDaOGcIM7OGwhmgUbv_j-6XGCqSgQL3XoLoffveMIdXgidXh0n0P6YvECZQPD-HgXhwB5LOLIxqk4O0CGo7rb9XnAccNSBC8l?width=4000&height=3000&cropmode=none",
		descr: "I assume that a truck in 2045 would be autonomous, and the driver can just chill in his seat except for emergency situations."
	},
    {
		name: "Final",
		type: "Photo",
		url: "https://dm2304files.storage.live.com/y4mfIjB2ZS8KcICzX9BxoThAw_1IPDA7pcuQ5vnIqyL_b44QJylKD4PSa946mOJOK8Mwiwbl367AStHXNPavkbXb03qHyUl7I5d4Q3Knis0gEiPJcxuXStpmt1OZP2b90m8HLBNOR7VDKrLJNcyzLrdZlC5ABUPvLGkc9NNfBLKhDkNBXsI7BR1pKxxOdC446so?width=4000&height=3000&cropmode=none",
		descr: "Final view of the truck, with the drone and launcher platform removed."
	},

];
