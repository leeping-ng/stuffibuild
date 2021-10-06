import React from 'react';
import TemplatePage from './templatePage';

import Icon from '@material-ui/icons/DriveEta';

function porsche911Page() {
	
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

export default porsche911Page;

const pageName = "Porsche 911";
const creationDate = "Jul 2016";
const creationDescr = <div>LEGO Technic released the <a href="https://www.lego.com/en-us/service/buildinginstructions/42056" target="_blank" rel="noreferrer">Porsche 911 GT3 RS</a> set in 2016, which was the first 'supercar' set in a while. Along with the launch, LEGO announced another competition - build your own Porsche. I didn't have much time to design a large, complex model, but really wanted to join the contest. Thus, I decided to build a small remote-controlled replica of a 911 Carrera Cabriolet, improving on my earlier <a href="#/gallery/hondacivic" target="_blank" rel="noreferrer">Honda Civic</a> design. I managed to get into top 20 - not enough to win a prize, but it still feels good to be recognised!</div>;
const creationChips = ["Remote Control", "Power Functions", "Contest Submission"];
const info = [
	{
		name: "YouTube",
		type: "Video",
		url: "https://www.youtube.com/embed/MtCz02s1YNU",
		descr: "Check out this video of the Porsche being driven by remote."
	},
	{
		name: "Display",
		type: "Photo",
		url: "https://dm2304files.storage.live.com/y4m3V9MiwT_JozncschM54Rw2cv5PLGcQfbl2hHYA6N9-7GAcySDKI9kaNnLIeAsu_S9GIsgUHvnhEB0C0cQxtD3DQ3_dstcXe5Vwad0NN9Vj42bW-eCLdFjjmuTtkp1LjJlfs__uXZ38HxEdRad9jBDI_94WIPhETAtGMtv8aXXg0pXsMRlhplYZpOcH2smoOo?width=4000&height=3000&cropmode=none",
		descr: "Porsches have a very distinct look - I tried to capture this with LEGO bricks as much as possible."
	},
	{
		name: "Front",
		type: "Photo",
		url: "https://dm2304files.storage.live.com/y4mfCG3iiqcxWqpp4SmrUahNMgqKhg1NgFQQU3v4V6q2uwQm9c8IWU32r0L7Z2O4uqyg8SKh1EG5hq8UISJRmLlb6xKbxHqyMP-k3co8lBrd0t-Guv4_Da-tYHbdkm5BiHtxH9Imxm0hVbZXUZ7AAoiWrdtEjWs5kw0BIEjvAYqrfUz2vC7_YXRM4bylzcLHU57?width=4000&height=3000&cropmode=none",
		descr: "Front view."
	},
    {
		name: "Rear",
		type: "Photo",
		url: "https://dm2304files.storage.live.com/y4moggd6OoDcWPlt49tgOXnETrqFwVWHUm2Wtt29wArcIDPYfTS6QQxC07R2VqkRD-6v83cNDdKcT2r48V_q1MQp4GaL__d_JZg_cbAQPu66OAsWxhRmw97G1toc_5MOA2iWeL1recjtTxMZ5DG_nTo06Ynk7rMJY9onjJ72o3W3vD4NV2bvFgmrc4AwcJoNfk0?width=4000&height=3000&cropmode=none",
		descr: "Most Porsches are rear-engined, and the grill in front of the tail lights is for cooling the engine."
	},
    {
		name: "Foldable Top",
		type: "Photo",
		url: "https://dm2304files.storage.live.com/y4mBV2HopM3K0SpsVeZXhbhT_8TtcsbZzoUWYqPHyakSVwOOHfySWa0XWPcEA47tUjFwtLtj37d-xM9zVVsaytT4rGrIS0hChbvueseryC_ZEmx10WmzCVhjUxtsKNieQZcTBNl5PWCE7PfbdlffclUqulnjfBpFDHq8vIANXnJ4mVV7CfWgsvwqkhOljB5mMeM?width=4000&height=3000&cropmode=none",
		descr: "This Porsche is a 'cabriolet', which can be driven with or without a roof. I created a mechanism that allows the roof to be retracted, which was quite challenging due to the small scale of the car."
	},
	{
		name: "Top View",
		type: "Photo",
		url: "https://dm2304files.storage.live.com/y4muMxkZRnICYW8ha4V83xSuu7yWa0-OvzehtvFl6_cqxk1Fjs0DsHVc3kNHuc3UJ276EpCSepC2kvNqeWOit3jVLBKZMjDsiKR61kSHo9D7Uup8wFNUMrBhPAWIJE0u_TH1HEB9wahRFbULYQEGNcvSB9j3UuBxKzPBgKXG9gLVCl4Kg2KHhSWkx0GMwAwpj3K?width=4000&height=3000&cropmode=none",
		descr: "Top view of the Porsche, with roof stowed."
	},
	{
		name: "Top View 2",
		type: "Photo",
		url: "https://dm2304files.storage.live.com/y4mm0cQZWnfcl71k4rssMe2DDCoFJs_tiPSJTU5YIdZvCzYwvn9rSLhOmE8AuHIF7St7FRlzS_w0aEl0eSZ0AXYOJTwX0NzRlgyynTM9peGCfMf9XQLTuULe9ZXMRNLMicl5SOpbvImmE0yJvG8rZM1vWe2YjHdGJgMSeCIgVgMY-qQuZwT_55DOe8NujCMdEJQ?width=4000&height=3000&cropmode=none",
		descr: "Top view of the Porsche, with roof up."
	},
	{
		name: "Electronics",
		type: "Photo",
		url: "https://dm2304files.storage.live.com/y4mB8m5e8Y1yakm3_jEteXxPihmfthMdYr5KSKUDORJT_iD2sKDbFmlT0bRtqpEHT4Mz3ZCqHQr1zEQdmRy-zdUiLRcbV31ISBULB6hK1urhs2PnCEMaZr9RXWC2TuCGbE1vbgn81aspNcmg_AtSl52EoXTm7A8CtdaJuOqss8kvXfPqwtgZMKYXgj49fEVycBJ?width=960&height=720&cropmode=none",
		descr: <div>I placed the motors and IR receiver as low as possible, creating more space above, which was especially important as it is an open-top car. The layout of electronics here was a marked improvement over my previous <a href="#/gallery/hondacivic" target="_blank" rel="noreferrer">Honda Civic</a> design.</div>
	},
	{
		name: "Blueprints",
		type: "Photo",
		url: "https://dm2304files.storage.live.com/y4mBYya4F3eAzikE0Q7xYLSv9b-QW8xEk17Jo-5uuIU3boCMRaWN8kBNIB6fGeMpZf4wmG6sudNN-ilYZnBLI1GLn0LyNa_4QRyzna0JlTfccYK_bMu8IRH7tH5J6uEf6aPAJ-tCpibP5XRbUQyrOlbLmxRr5VlpP_DTh67JibVNnDMnflbtbzsnNSkTUR3CFOy?width=3264&height=1836&cropmode=none",
		descr: "My source of inspiration as I designed the LEGO version."
	},
	{
		name: "Top 20",
		type: "Photo",
		url: "https://dm2304files.storage.live.com/y4mMBdk9WNSfQ5SuBSuogE6mhOKQ_1hWDthNcbSdNDkisxBeibiQNl-dBff83q_CeIQwC7PEuQznhugbcLZB6g40_SERG9Ysx1TwIOkw1DIzsa1m0MAqf7VRzYxKKuA6rZkOjM-pPSaCXBPBIPoInvmvBFxcTS4XNG-GktRZcFSMMybSD7RWH-PlA1jXMS2x9gC?width=623&height=398&cropmode=none",
		descr: "Very happy with this outcome!"
	},
];
