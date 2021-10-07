import React from 'react';
import TemplatePage from './templatePage';

import Icon from '@material-ui/icons/DriveEta';

function terrexPage() {
	
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

export default terrexPage;

const pageName = "8x8 Terrex";
const creationDate = "Dec 2018";
const creationDescr = <div>I first laid eyes on the <a href="https://en.wikipedia.org/wiki/Terrex_ICV" target="_blank" rel="noreferrer">Terrex</a> in 2012 and really wanted to build a LEGO version, but I didn't have enough parts then. After 6 years of collecting more Technic parts and gaining experience in other builds, I finally felt ready to design it in 2018. By then, a newer version called the Terrex 2 had been developed for trials with the U.S. Marine Corps, and I thought it looked even cooler, and decided to base my design on this. This was the most mechanically complex vehicle I had ever designed - with 8 wheel drive, 2 steerable axles, full suspension, 8 motors for different functions, and remote control capability using my phone!</div>;
const creationChips = ["Remote Control", "Power Functions", "Military"];
const info = [
	{
		name: "YouTube",
		type: "Video",
		url: "https://www.youtube.com/embed/9VBkYQ4imDo",
		descr: "Check out this video of the Terrex and its multiple features. This was filmed at West Coast Park in Singapore - my friend Freddie took the photos and videos while I controlled the Terrex."
	},
    {
		name: "Side View",
		type: "Photo",
		url: "https://dm2304files.storage.live.com/y4mBsfD-nJh7-6jB19siQy7kBHaKqbI4ihDYqzNh5JHlQCxI-VmNNb1157RiunpAfHyyxYIELzhnw3tyxamKHi1PKtRHfpSILicIr5cXmzRbS9I4BEaBn3QTZqdt4HjBfuF-xtBaBz1OBH8RrIDUu093OgnoD3LwTac3x1Erd51_mLQzhZiGqr-BFXzYqtoAEKU?width=5184&height=3456&cropmode=none",
		descr: "Side view of the 8x8 Terrex. '8x8' means that it has 8 wheels, and all 8 wheels are powered by the engine/motor."
	},
    {
		name: "Actual Terrex 2",
		type: "Photo",
		url: "https://dm2304files.storage.live.com/y4m44RQNaK4GKJhVn2P_HNWxB7eUPHr1bF4vWA7hjqkI5tQkvrFeuh1mB9ZtX7gmn6S1ZPEXSDDa252kS9riJiHLEO_hsRut1szb0-j-0_uCGBK1v-Qax39dtSp3xlQbtnsp6Zsa3e56evbRMCKjya9TrHBl1XKFShR4V3vHaD-PnGGBTTn3EhrgNVH-BqtHLRG?width=1024&height=683&cropmode=none",
		descr: <div>An actual Terrex 2 (photo credits <a href="http://www.military-today.com/apc/terrex_2.htm" target="_blank" rel="noreferrer">Military Today</a>). I really like how it looks, it gives me the impression of a shark from this angle!</div>
	},
	{
		name: "LEGO Terrex 2",
		type: "Photo",
		url: "https://dm2304files.storage.live.com/y4m6cCby6tL2Cdf4fxUx5CRquGV8L2wCkM9ie8XXlqgiB4gTKQBFxrErqmG9LNVHWqF-y9YK1xU_X92-2umTx1s2OwGDRsNq7jRF4CKcjtX0fTkwvKRvxWjTe_qYzuEVoaDTO8WC-9826kkrGLtU5kjQM6jpcXyc-E__rkVZFLLFmYARz-9VZkH6G5NAR260FSe?width=5184&height=3456&cropmode=none",
		descr: "My interpretation in LEGO. Some aesthetics of the actual vehicle were difficult to replicate at this scale, thus I had to trade off authenticity for a better overall look in some areas."
	},
    {
		name: "Remote",
		type: "Photo",
		url: "https://dm2304files.storage.live.com/y4myY9mEAA1pxV1lYIFBTeDRg34G_sfNvB5R6DjvpN1nsrnNX0dcMK3_3RalJ5n9yk-pzcEC4BVkqHtb2GxgOJyCxcvfCm8rqO26t2oq1y2H8nTWur5TKLiDcCXqWNkF6Pw4ct8DEtOlNbyygQWOBfIZxl8M0P9dlDG7C6WuuIiDYChDNUyIxAAaOWicpzbwtI4?width=1920&height=1080&cropmode=none",
		descr: <div>Instead of using the standard Power Functions IR receiver and remote, I opted to use a third-party Bluetooth receiver from <a href="https://sbrick.com/" target="_blank" rel="noreferrer">SBrick</a> for 2 reasons: firstly, I could use an SBrick app on my phone to control the motors (my custom app template shown above); and secondly, Bluetooth works much better under sunlight compared to infrared.</div>
	},
    {
		name: "Electronics",
		type: "Photo",
		url: "https://dm2304files.storage.live.com/y4m9bIDbTQtzRa_5EvJ-hXZlE9_pXZscnu-yn50umReHdf1kYUj0Gz_Ckc6vSqVRTonWxdW-YZDDq5C3hR975plKU-17Ks5vaCcwwxGjmrKYiQ9pS7pgRyr-xPEnYzFg8U9NaVvwZ9oQZ0XLniou5L9zdLeXedZcyoJ55lMJiiXs_nN4JI3Ujqmf7fGEpCVCAht?width=2000&height=1125&cropmode=none",
		descr: "I used a whopping total of 8 motors for this build - the battery box, bluetooth receivers and motors are all shown here."
	},
	{
		name: "Rear",
		type: "Photo",
		url: "https://dm2304files.storage.live.com/y4mU6PgzBcI2sTO3krfILDp5b6mNU5MQ1dpUb7EA1o9SRARzllxLgIG7AXUn1feJUyWdkz6MPa9owF9rp2jZWDgJN49LdvvMDBSytpYtDgfwtegUFCjbiFXQb2Lchn3a7sqAQWhNq0ZPaKjz_ex5h8-Ke9PpBbSpSryPHSQOwuINU9iiUShrD3HA_LNwCFzbTdy?width=5184&height=3456&cropmode=none",
		descr: "Rear of the Terrex. It has propellers at the back as it's an amphibious vehicle."
	},
	{
		name: "Ramp door opened",
		type: "Photo",
		url: "https://dm2304files.storage.live.com/y4mXcG7dtcEL1iOvLAv8UNYu8xhTz2I9kX_NG79fR7dqzB56jpHM-q_bVSLsCe36x6jr-9NOdKKp089pz2KU5jNJM4WATJ50feIQogx9Ba-rdUW76pyGSLp0kwGRqdWyLQDjV7kSdZqFNDDnew5chb9BstfrlcfiAV5fWcFUPQPTvrStbS520Bz12BhQoiDP3fN?width=5184&height=3456&cropmode=none",
		descr: "The rear ramp door can be opened by remote to allow troops to dismount."
	},
	{
		name: "Top deck",
		type: "Photo",
		url: "https://dm2304files.storage.live.com/y4mLJIUsLL5hoPwvD2YQGT898aOoYVyWxCH83SmPdAiXUxm-6uoI0YoK50U0he-Zw0_IWFmOtsFr5xH4YMc-kmCWFYfSMbtLt0ZvoTLRXc75jcWuzqz8zGIuYZ5oRDoHGebDxpHH7Hov6Eik52jAVWPfqDIYsjsnnuKThEc8TAd1Nm1fGymD513j7nwgfbQuqxG?width=5184&height=3456&cropmode=none",
		descr: "Top deck of the Terrex. The grille for the engine intake and exhaust is located beside the driver and commander hatches, and the trooper hatch is located behind the turret."
	},
	{
		name: "Drivetrain",
		type: "Photo",
		url: "https://dm2304files.storage.live.com/y4m0sfTaNmgstkcIwghRfgTLuXHZxM7ylsdNqdke3SqAA0JqpstXZNBzGXB_U-hASHW9av6dDHmckRJp8DWHSN_wkiUm1_kAZ0d_WztsicE7w7JLDuTClQKoVnHbfaVKs4g1eSpVTWO0UoRDckZiBcG9Wghd2yF7nPF-hXOdPHBTIb8ABBcBfRiFo8RA6hqN2C9?width=4032&height=3024&cropmode=none",
		descr: "I'm quite proud of this drivetrain - it has 8 wheel drive with working differentials, full suspension, and 2 steerable axles. I didn't want the Terrex to be too big, and it was very challenging to design a drivetrain with all the desired features within this compact width."
	},
	{
		name: "Suspension",
		type: "Photo",
		url: "https://dm2304files.storage.live.com/y4mJUhpycULECBNxplQbUdm5UgxqddFAs4QoPBvopsOLfyV_8y_so5daPmoOoX64FdE7D53KtAZVxfVaZyk-k7zvNgnNmebfmP-ntGfzPkHXRobJo9XQOVnkkF_mWWKO1l9mp5ZLFkl70ajAdKfvsRxeiwYxCLYAgT8w46cjhDAiNwRYbMnfD1h2SBN_WO-Wpmu?width=4032&height=3024&cropmode=none",
		descr: "The suspension travel is quite significant, as shown here."
	},
    {
		name: "Coil spring",
		type: "Photo",
		url: "https://dm2304files.storage.live.com/y4mbO-TjOR0piQ0GIZUdGoiK2sek0MIFRlAoHoNoVY7GQ2JXfd8xQVnoehyuEpoN0tcnMImpcTqKMeBsgrLxaGLnypnTmLZCrTp4Hqe0JHVATk2racc6UrrUJML_dAQasAeuxCvVQKGP5vMXEgqARgL02sceLYFI9X6n2abSeidc0YpAIKnmtgVQEQPPjnLaFXU?width=4032&height=3024&cropmode=none",
		descr: "One of the coil springs used for the rear axle."
	},
    {
		name: "Opened up",
		type: "Photo",
		url: "https://dm2304files.storage.live.com/y4m-YmkUfUGm18rbW2jsIGL6IeTSs_MKQ0RBsp7R_YuSQKOfp5Oinw-c1Um6idYBC2vETZqNx_UlKFhGQrHEXLF5TPeRQ4yeVWmSAsEMuxgZ-B-dZkesc8Zc4nDeF8rKX2h0Ec-CV3lSLJIi3nmETXKvOiw4Jz6jXUvqGsMB8Z7yowgDzWRyrKtZ4fvHHwATOme?width=4032&height=3024&cropmode=none",
		descr: "The Terrex body opened up, to reveal the electronics within."
	},
    {
		name: "Linear actuators",
		type: "Photo",
		url: "https://dm2304files.storage.live.com/y4m9JM85NOGx73w8ePx26eVI-KzEXdXdWaqS3jTutBFWe9HbNH5v0qS-T49bEjWHQay58FnJ5ASXdlZkbsy1pUd0vZwOSmu8AxQEk1A91DJbR7uLZ4-JWa5zIByLKyjxibkABIITxEfIgAptbdKv_B7EJ1ca87kqHuI9cMCH0HSmRuCfJjhLrMZea7oKFKzxZwZ?width=4032&height=3024&cropmode=none",
		descr: "The linear actuator here is used to open and close the 'trim vane', which is used to prevent waves from crashing over the front of the Terrex while it is swimming."
	},
    {
		name: "Driving motors",
		type: "Photo",
		url: "https://dm2304files.storage.live.com/y4m8Gks-ZAyh5LqQV_iqBQAtuSYikCvwcKOWBD4mmeCxbFIt1I-zJLY3psP_oQh-o8p7-NoTVt9fE-R0HD9aKaJYTwBj3zH8GxVW0bKez0X0h8Y0WZD4Q4vUunVVgvAABsn46FHGtmGW25F2l3gynJzCkzegU3mBsApQJdeg0WAkpAaSpM3wz44YbHqITw5gQ7E?width=4032&height=3024&cropmode=none",
		descr: "The Terrex is quite heavy, and I had to connect 2 XL-motors in series to give it a decent travel speed. I really wanted to include a gearbox to allow changing of speeds, but I ran out of space."
	},
    {
		name: "Propeller drive",
		type: "Photo",
		url: "https://dm2304files.storage.live.com/y4mFj7QdhM_TaIT4OjxMhVPRfBfZpD78id4ZQdBOb9jnDL1nR8GKbnZrAYr0n2V9-z2mRkZJGMal4Q2tSj1E8UKuKrA3rfzv65U0L9I7ZJbaVodWbHcnwVc7IGRItlq0p6UJNEiuiF89xN_o9Q2VbgfLLg07NjzRNbphHNR_LSHt3-NSNxTnBZLbXME3LKlBLr5?width=4032&height=3024&cropmode=none",
		descr: "The gears shown here drive the propellers for swimming."
	},
    {
		name: "Turret",
		type: "Photo",
		url: "https://dm2304files.storage.live.com/y4m0agOhd15Gr8ze6lav1i6h7TMdOglZLI16WABxYwelvBTCoF8ashfrMEgx4PXN2Rp8aJRW-pvUgbkUTz97APsjwxmk0DZBLYHBBzAcCo6Mxff-AZHO9ercnbpcPE1ZRHPKeD_TQ-GHV4pYB_2LBc8qM1Fe0mcwCZ59Yutbq03i4Sp8buiBOz0U7ctzTVNzRiA?width=4032&height=3024&cropmode=none",
		descr: "2 motors were used for the turret - one to control the weapon elevation, and one to control the weapon azimuth."
	},
    {
		name: "Cable management",
		type: "Photo",
		url: "https://dm2304files.storage.live.com/y4mREMwtOnN2FzBFSygwdtY4W2n7U87yuGhMpf7B-qbhwKXk5VGgq-AqsEFkmVM6vuDOISCCTHwzf5tbRM4oOx4kF35kJod6RYwuub0nD5KSlCLl_WslQ7hQWB1l6ywmlEnsx6Fq-6laH7Qf7Z5k7XqhBUeO_07_6nBepbTopEOg2iq06k_9d_CH-btRjq25dr5?width=4032&height=3024&cropmode=none",
		descr: "With so many electronic components, cable management became a daunting task!"
	},
    {
		name: "On sand",
		type: "Photo",
		url: "https://dm2304files.storage.live.com/y4mqei7sKc3pTO7EpWMd8VV8BSDDUXku_qd0CDpUri13KlAcFfDvEDQ6w3DdBCqsztA9xxyPXbJJ8urvHnqhR4rjXs3p5Sdaje5uHrCLj-8Augm1HPoHpFG-OcuOTMpWdhoyYD8p1hVKZ0nmDD1qdQB0tPopHbXr4IdDgcGfMWPIH3Zr6KXWGr8SKk1t7VfPgRH?width=5184&height=3456&cropmode=none",
		descr: "The LEGO Terrex is also able to move on sand, but at much slower speeds due to higher resistance."
	},
    {
		name: "Final ",
		type: "Photo",
		url: "https://dm2304files.storage.live.com/y4m0kXhQEGdW8lPi7p0KcvsrdxMx87A0BsEzI_zjUKiTiQavdcJXpH2MLbSgPhQJ7YTwRbxj2ibc-4VmjmiDHRo9zsCRnCyf3rh09E_hH7IyBUEfOYBjj_GskoUL4FPx-ARq7Wsv7hqSdmT9bDmusaiFjaUvY-a6FRYkjERpE0D1cuuF1-EzW0sd30h9M2PdCYO?width=5184&height=3456&cropmode=none",
		descr: "Final shot of the Terrex. Glad to have checked this off my to-build list after so many years!"
	},


];
