import React from 'react';
import TemplatePage from './templatePage';

import Icon from '@material-ui/icons/DriveEta';

function hondaCivicPage() {
	
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

export default hondaCivicPage;


const pageName = "Honda Civic";
const creationDate = "May 2012";
const creationDescr = <div>After building the <a href="#/gallery/sportscar">sports car</a> a few months ago, I was keen to design another one – this time with remote-controlled functionality using LEGO Power Functions. I decided to model it after the Honda Civic EG6 hatchback, as I grew fond of Civics from learning to drive in one, and from playing Need For Speed Underground. I had just finished my final exams in college, and had a few weeks to spare before my grad trip, and so I started building…</div>;
const creationChips = ["Remote Control", "Power Functions"];
const info = [
	{
		name: "Front LEGO",
		type: "Photo",
		url: "https://dm2304files.storage.live.com/y4m7HTICMD4jGU5kT6mDrQyeMlMb60pQfpe6gJjvoDNDTeKEJs_JcVXUA_Qk20RriOsmM1-G0CCuSDKja0M81gB-5iy4CjY_DFYwdkQDYEGy8Rd4mWQrM6bSL4NFfBqs5bZSYbqjn8xuByIsTc2gorcml3H6gz43ND4Bx6Tym0dFt8SIiWXS_d_4vyLrzhAqBZx?width=4000&height=3000&cropmode=none",
		descr: "Front of the car - I made the hood black to look like carbon fibre."
	},
	{
		name: "Front Original",
		type: "Photo",
		url: "https://dm2304files.storage.live.com/y4mSITgAvrbiq8BYxqmhJ9lhV_OzyyI6QAl2HdWrnkbJBYTMtuUS3WDPwtjHSJelZBGpBjNo1nJ2eTPtkDsw_GaYkI77ciIxa5mwH4EFPLqkgaUCgqTz9-kZBkSzRQs7cH66rWupYr_GFVTB4UXtaSrWT96annKzPvemtlzi8eRKZMHzXn077IvRgymI4LsVUNY?width=945&height=709&cropmode=none",
		descr: <div>Front end of an actual Honda Civic EG6 (photo credits <a href="https://www.9tro.com/media/cars/honda-civic-eg6-hope-for-honda?page={{pg.value}}" target="_blank" rel="noreferrer">9tro</a>).</div>
	},
	{
		name: "Rear LEGO",
		type: "Photo",
		url: "https://dm2304files.storage.live.com/y4mEAGljLa1zLi5-jtuZP_-tANpfIxdbB9_rSJmxKjdsp437gwWL-dgyPE8nG6yoFUvs197FzHG9b0bCKWl03paRTnfnMdz2Ax4FCcx-vC0aA0WWfSxIgZqBGFi3j3j4LTEI9_kxwGdp6SNQeEiqUONUmHRFLyHQii5JO4cuEmc3T8hNfQv3rjfxBsL-aJqYK6w?width=4000&height=3000&cropmode=none",
		descr: "Rear of the car - it has a 'carbon fibre' spoiler. The rear corner with tail lights could look better, but I had to make do with limited LEGO bricks at that point in time. In fact, you'll notice 2 different shades of grey - some of the older looking bricks were from my childhood!"
	},
	{
		name: "Rear Original",
		type: "Photo",
		url: "https://dm2304files.storage.live.com/y4mQNlFumJszX0woP1SvQlPtHQ_LPAgVwTHWUS4jnWcGW1Qm035l_9G7xPtRwCDqsJoWVsnbJRiJpNyPAGFpoFg1zWbXwhpA75t4dFG7c9swhr0Ec0ebySI_V88u60dMS5HmllCVn0b0qyy0lgNg_lkpBQ2POqVWqC3bUV0Lt6ISvfUuujsLZLJwSFrNNP9u3K9?width=1067&height=800&cropmode=none",
		descr: <div>Rear end of an actual Honda Civic EG6 (photo credits <a href="https://www.9tro.com/media/cars/honda-civic-eg6-hope-for-honda?page={{pg.value}}" target="_blank" rel="noreferrer">9tro</a>).</div>
	},
	{
		name: "Side",
		type: "Photo",
		url: "https://dm2304files.storage.live.com/y4mWLMnbW-LM7p5VhCNtbOjCXpEMeGaWxj6M_1uAGKksf1h44VixDunnSJzvUT6f8q531lATyTh-apuDGfTQx2lmoTa9DiWPS30aOTj663cP1MlEJXR8qobl0aJyWWPbvmIdIKrHz746Xbj1FyyhiKU7x1O92AmxJBabQeALCLsjxumPt47XVMPcBN-n4NJyHnE?width=4000&height=3000&cropmode=none",
		descr: <div>One of the major aesthetic improvements over the previous <a href="#/gallery/sportscar">sports car</a> was to make the wheel size more proportional, by increasing the tire diameter from 30mm to 43mm. I was also pleased with the clean lines of the front wheel arches and the striking gold rims.</div>
	},
	{
		name: "Bottom",
		type: "Photo",
		url: "https://dm2304files.storage.live.com/y4mcDL3KUyMyKt7JuPcfu2TX_JohDYyUHDG-1zeen6OJyEWFvV3CvG_by5DYJQh6RZzGzBaUzZ1NBNa01Cs3MsrRcrjqRMib7YrPI191LtuwjfN0KRf1X5QQ_7g76WopOCyrWItuzHPignZ_gWcwFgkVi-vWredFEUZgYZb2-ZcPmDRp_Sbn7jd2W1_4MTJQDFR?width=4000&height=3000&cropmode=none",
		descr: "Bottom view - the biggest challenge of this build was to fit the large LEGO battery box that holds 6 AA batteries, and arrange the other components around it."
	},
	{
		name: "Top",
		type: "Photo",
		url: "https://dm2304files.storage.live.com/y4mkmZaRV-6JmB50ngpsVSNps1Y30uC60EUQyITpeyv652loe8DOV4NuDLcSGJlKuP_9JISeILWzVPJyCk8scpwPRDbeDXIJ6TZVZJhdP14Imnt0kSbcB4ZVLOimjnUBfJkgMgHk-v1Co-c0DsPG3B8xgC8wEeobVqBKMtIstcbzwYTxxCwhy1VJRsBxau5D-Zw?width=4000&height=3000&cropmode=none",
		descr: "Top view - the IR antenna for remote control was disguised as part of the black sunroof."
	},
	{
		name: "Opened Doors",
		type: "Photo",
		url: "https://dm2304files.storage.live.com/y4mpKtsIxMWkizzugdvoeZ7la0VLR-oeT4gH6IazTwtJ2Jn8FWwEzo3eY9GkLVj6d7Hbax10WQm_APTuywY5H3RvvR9wb6ga4U8lEnMcQgAG5Q8PrfBbxUy3JOyroFhODuDa8lGg-ocMmh7r5T5MANqDMdZOXUv9_vFHGHfJD8G7w9G6E775_0H4wGDlVlG1Pcp?width=4000&height=3000&cropmode=none",
		descr: "The hood, trunk, and both doors can be opened."
	},
	{
		name: "Rack and pinion",
		type: "Photo",
		url: "https://dm2304files.storage.live.com/y4mmt0Qmqq6JHNEf9mGaVrw_KfnSMlst8KeLZI-po7SmG59Z5R4I9eSA-TXGJJDZVZgjcPvt8lAdlemEs68FJjXRlwfrvc4hb_8WF07l2N50hVENUOinMACpm5b8S7cA-trSX0xUl6t7O2QPkM2wBNPKDfVCzJHMUfpoC0G6QTg_axYuIBZ5hb-gvc1_YPZkgAC?width=4000&height=3000&cropmode=none",
		descr: "Rack and pinion steering, controlled by a Medium motor. I didn't have a Servomotor yet, so I created the yellow-red mechanism with rubber bands to centre the steering at neutral position. Also, note the large width of tires - the wheel arches had to be quite large to accommodate them when steered."
	},
	{
		name: "Drivetrain",
		type: "Photo",
		url: "https://dm2304files.storage.live.com/y4mDAQam7dQjdkPPgTFt2TyeU9__Bh22VUxzaoMea9qnGLWqlRhg9d1gAEK35cKZiVWIwS1TPWSVVi3ITxEGXwQtjU0LykfSBknCZpx6fm790OVKZE1_mIicYtME5ZsMFv8SkAo1nRBjV32KUgvpj9-Os85p1LACGNvGlU0Tzx--OCPlXKs1GR8QZBvU2WuZkdG?width=4000&height=3000&cropmode=none",
		descr: "A Medium motor directly drives the rear axle through a series of spur gears."
	},
	{
		name: "Blueprint",
		type: "Photo",
		url: "https://dm2304files.storage.live.com/y4mFRXaalRwh77slo4TFoE4AxhacybdPu2XnUex912qmKiGx09pq5i8r8JvHDYGUbRKEUHM4sIIecLmdOYnR-Azmk00S-uwu7bcC1Atwq6xkINdW5GGWhQI0bcbWY8gd7rHNIDkEmtHskb91_mEQt3b__HxLMQaiVJ75RPEn4q0MFIvBGF4Kzxc5wO72naQonj7?width=4000&height=3000&cropmode=none",
		descr: "Using a blueprint of the actual car, I first decided on the wheel size, then proportioned the rest of the car accordingly."
	},
	{
		name: "Remote",
		type: "Photo",
		url: "https://dm2304files.storage.live.com/y4mrBHXCxO-HuIdXQjYYaojFk_oWTxicypNPjxxz2yjR7d9CeHlWkAvHHaP5qUCyyoUnO-pZB6hIZSqR0dfWOk1ro_yYSGcyzNcNGACkGhyvzMyW0rlrSXw-BKVyudFrzL9_ISHV_Aa9CNzY_nennFl63tsmR6f_1TPZq5d_AyM1A978xD93y3FOhKE4R0avVlL?width=4000&height=3000&cropmode=none",
		descr: "The remote control - the stick on the left is for drive, while the steering wheel on the right is for steering."
	}

];
