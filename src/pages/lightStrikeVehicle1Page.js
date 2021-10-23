import React from 'react';
import TemplatePage from './templatePage';

import Icon from '@material-ui/icons/DriveEta';

function lightStrikeVehicle1Page() {
	
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

export default lightStrikeVehicle1Page;


const pageName = "Light Strike Vehicle I";
const creationDate = "May 2013";
const creationDescr = <div>I served in the Singapore Army from 2006-2007 as a mechanic, repairing vehicles such as Land Rovers and MAN trucks. I didn't get a chance to work on the <a href="https://www.army-technology.com/projects/spider_light_strike/" target="_blank" rel="noreferrer">Light Strike Vehicle 1</a> which was used for hit-and-run raids and scouting missions, but I've always liked how aggressive it looked. This would be the first of my military vehicle builds, and it even got featured on the <a href="https://thelegocarblog.com/2013/05/21/gun-rack/" target="_blank" rel="noreferrer">LEGO Car Blog</a> where they called it a 'ridiculously fun looking buggy'!</div>;
const creationChips = ["Remote Control", "Power Functions", "Military", "Gearbox"];
const info = [
	{
		name: "Front",
		type: "Photo",
		url: "https://dm2304files.storage.live.com/y4mMYskeho8l32LQ0ByKDKS9_I1muy2lR-2C2UTfQpDCVZmiVKfrBeqC9D-dB2y0zIIaC1fGmNZt09mkZKtbPqIXbo-TVAyXg5XJ6zOMozgZJ0OVBS09evWY0GrT588zAHuaIDix1O2Wa1EQ82r-yn3Z4HM3m4FlJvhb1li6ijGr3yeo6mOZ98X2hbsR1WQD8Ka?width=4000&height=3000&cropmode=none",
		descr: "Front of the vehicle. A grey machine gun is mounted on the bonnet, while the cannons on the roof are anti-tank missile launchers."
	},
	{
		name: "Actual LSV 1",
		type: "Photo",
		url: "https://dm2304files.storage.live.com/y4mhrYZ0ALzsi-93T-ocBoM5s17OzOL5iDSyvWiozpBYQNXFbEQkvjggG_2MamuiiiBNM8xNvidA47lFscBLhd6UTy6Rwt_HVwJYMu9200ELeZXNkujcrh_AK-zpl4SlnWU8qxlf3XZif_VmkE7masaWur8BuEj-dq36ebDgtQXTnH8fYZvY89S6GiB7Hv3_jEk?width=500&height=375&cropmode=none",
		descr: <div>An actual Light Strike Vehicle I, also known as the Spider LSV (photo credits <a href="https://www.army-technology.com/projects/spider_light_strike/" target="_blank" rel="noreferrer">Army Technology</a>).</div>
	},
	{
		name: "Rear",
		type: "Photo",
		url: "https://dm2304files.storage.live.com/y4mz4495_yvDSGl6-RiU_lYIez-W7qG9QIagtI7iq-ou1dh9DXcLaPGaQs5NVUmsHeu24oNDrgbioJ77ppKmaUrX60I_0nQpVB-Jr3kkinNcUTjJKAse-9nnN0jqaGaWhq-vT3BlcgV3Sza4dfEKgx4a_OzKiO9lMqyyZReCTHUTMrxakCVY6nmYJaqaZt-NfFR?width=4000&height=3000&cropmode=none",
		descr: "Rear view, with spare tire."
	},
	{
		name: "Top",
		type: "Photo",
		url: "https://dm2304files.storage.live.com/y4m6NNoKe-cD3SDsbfI0t9akVvLImRrgk4es2jPYqCNiT1SEYg5y0gC2wm37Gt5SuhHfX-2vBcrGBclXGuy8q07Nt867SZCvhafqjtqG0qrwGI2uMfE2w6o0ohrnfJafXxqKBJrjswfDbh6E3AAJZoWT-XJgyi3yC5xCBzxui1fiG9zgDi8NoP7PTDeUvfzdce_?width=4000&height=3000&cropmode=none",
		descr: "Top view."
	},
	{
		name: "Suspension Movement",
		type: "Photo",
		url: "https://dm2304files.storage.live.com/y4mqSJ6z5Iqa7jXvYmSzbIgKGo0upSalV7tvLaAKMNrsJqZSBzjWyfDutrXRuQ68XvyWl7SFK4EVWW8PeB0eeOTPAjD8cLXq4vzUGG__nkytwe7dawQ37iojSSr8t3F_kHTn1CwpYjiMFmwhkFl6fVB2Cq8l2XXKq6KB1izr0q5fju0kQDfuIzWKIAH80_iHqEW?width=1594&height=1018&cropmode=none",
		descr: "Suspension travel is quite significant for this build, to tackle rough terrain."
	},
	{
		name: "Suspension Details",
		type: "Photo",
		url: "https://dm2304files.storage.live.com/y4mUOPXhJb0t78CPbJponJ3OdCGraf3avn-labOqplUDvvPHRO51-Q1l-a1JN4KQwQMB9dSv5ICzBPkdXkJn2amFaHIxKpg1wsOkYq7VYTm89DgsPp7vYhMLDwzTeiTGyrkuGbPtEnIhAxnMk_K9VbsBdY6v6KjUk38btmIPk-3Q_8xtLG3dMzOPa-Gy4OdMs4I?width=2487&height=1332&cropmode=none",
		descr: "I used double wishbone suspension for the front wheels, and trailing arm suspension for the rear wheels. To my knowledge, this is a faithful representation of the actual vehicle."
	},
	{
		name: "Gearbox",
		type: "Photo",
		url: "https://dm2304files.storage.live.com/y4mDnVItDuwMPOL0K4MDXO57266NWUdqyjFrq0OQU18AfEo3EiO0n9ut1RTxmfT5I1SjP29BlbuLmka34BmDck7JrG_BytJ6zUFGlv4eRz3szBRHefMj6R4tf_dlk_TS_8iXoBBgS9FZpZlukrDJpz9BadTHC1i6CU2lfyjfWuf3SLyMtGWzd6HSiGGU4Jqc_zq?width=4000&height=3000&cropmode=none",
		descr: "I also squeezed in a 2 speed gearbox for high-low range. One limitation, however, is that the gear change has to be manually actuated by the red lever instead of via remote."
	},
    {
		name: "Bottom",
		type: "Photo",
		url: "https://dm2304files.storage.live.com/y4m727XU1-xn5MzYce0GLu9AKxlHT9yTR_cvnXBzv9cfH9bcAQunKAT1VKaPQ3UkLFEf6cnmE-CVmQBQsZ1bPSDvqmw8HEYoM4r_iLrTPbTCM60-73ae-yR0dAnz6Rhs8qe5SHv4SMZ61ODxb-TeCbfE4tTrt847G9Lr_m-AVTdB266R0GRqqpgrMy7Z7yDW4GS?width=4000&height=3000&cropmode=none",
		descr: "Bottom of the vehicle - the grey servomotor used for steering is mounted longitudinally, while the motor for driving the rear axle is mounted transversely."
	},
	{
		name: "Chassis",
		type: "Photo",
		url: "https://dm2304files.storage.live.com/y4mJXgkm0GuvGwFkM43I_drygXgnZp98KPEoG6stpUhjs91ME9ERbTIQo0KBLIQrouFwnLPFX6mHtjRMEsyfL_inXi9bG21V1XKiHbgWtISA9R-KuKYLNVF6p_06DdNiV5kui8xV2znD10z5JuuJdleORwOk5PhGmGifKgNnb3rA57LzZS8RDdgXAahtMQMplHv?width=4000&height=3000&cropmode=none",
		descr: "Vehicle chassis - the battery pack is mounted upright behind the blue seats, while the IR receiver is mounted in front beside the steering wheel."
	},
	{
		name: "Space Frame",
		type: "Photo",
		url: "https://dm2304files.storage.live.com/y4mjTpWcKsrScJtBDXFrsKfhUb-BCnBpuxKSMR5Qrk4c3iORJBrVcecQApisN9HlyleS7HtWBcPsGftdEkmCnAZ8gtkQ3LqDNEA-1_82l6eANo74r_yxKwmoMinJMRDIzmpmxD6KnI4ZFZh-X_km7_oCRs8NP1cSaPhnYs7MoEdWT1pDD6uHX5CEXY_dV4uNXkG?width=4000&height=3000&cropmode=none",
		descr: "One of the distinguishing features of this vehicle is the tubular space frame, which provides rigidity while keeping the weight low."
	},
	{
		name: "Remote",
		type: "Photo",
		url: "https://dm2304files.storage.live.com/y4mfMZvDNU8GZ8xy9fX41lk-vuf8To8ysLwHFDkM-DYokfpAfmz2F8jUfJVJR2hLvu0X2OTwO6_Mu_9PhHYxGvugdZQ3S3XH5fZCACeO8vhljk8o086MR5iaLSArrSrjdqbOGwiqZs8TxLyFGW8UNWZfQ-f-GV5KI1NEd0RAiVkMa2U7U6yqhNEc9B5-C3v-gU8?width=4000&height=3000&cropmode=none",
		descr: "With the remote control - the stick on the left is for drive, while the large gear on the right is for steering."
	},
	{
		name: "Light Strike Vehicle II",
		type: "Photo",
		url: "https://dm2304files.storage.live.com/y4mYTjUHhH1XOW9swqMppvs6wJUfQDW6lkFtvWg5EH_6x8NIMr3SM0Q63blq2wIDMtc42URo70eEtGhmBW1jQJ6EyHX-R047T9GAW0ixD2F2-GXLpwtf79LkH1Sx96U2bVIUWTnyquu6B042eMiFQ5pGZaIQyS6q6-WmDt62saHpICTfSHDL6xoQ5i4BFkQmijc?width=4000&height=3000&cropmode=none",
		descr: <div>UPDATE: 3 months later, I went on to design an improved Mk II. Apart from the obvious changes in styling, I completely re-designed the chassis as well. You can read more about it <a href="/gallery/lightstrikevehicle2">here</a>!</div>
	}

];
