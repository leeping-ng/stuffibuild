import React from 'react';
import TemplatePage from './templatePage';

import Icon from '@material-ui/icons/DriveEta';

function crawlerPage() {
	
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

export default crawlerPage;


const pageName = "4x4 Crawler";
const creationDate = "Dec 2012";
const creationDescr = <div>I initially bought the <a href="https://www.lego.com/en-us/service/buildinginstructions/9398" target="_blank" rel="noreferrer">9398 4x4 Crawler</a> set to get more Technic and Power Functions bricks. LEGO then announced a competition for this set - the rules were to keep the frame and mechanics, and change the look and body. The winning design would be released as a limited edition LEGO set. Not having taken part in any LEGO competitions before, and fantasizing about being a real LEGO designer, I decided to give it a shot. To my pleasant surprise, my submission was amongst the top 100, and I won a free limited edition set!</div>;
const creationChips = ["Remote Control", "Power Functions", "Contest Submission"];
const info = [
	{
		name: "9398 4x4 Crawler",
		type: "Photo",
		url: "https://dm2304files.storage.live.com/y4mssebIQxUaYxO-i7C2OsG98OAXBTkOJ9sfnX-lulAIXY0xoSZE7DJEZnVPMR8rlfChtopTnTjmtlcRYCibcU17vbamnsRvv41C2bTJQM1J2s290cznvuPjHgS8patudKO83gVsUwU9zs14pB4sgTrbdZxj58c0fsOf7Kz3Yh4glNDXmVf0vwGoOk0lFz4flbU?width=4000&height=3000&cropmode=none",
		descr: "This is what the official 9398 set looks like."
	},
	{
		name: "My Submission",
		type: "Photo",
		url: "https://dm2304files.storage.live.com/y4mlSoJIqfEn5Q_PxB9VEJ23sUmwr0Z5FW6bZg35-nh3yS9RyKJKsKuhQw9nIcanTsYfGqUfklraOtS39ah49mdbQQtE5xQA6mrA04AS5a_n0CIZnBlbzwm3I2tZSBX5-JWRKTiv9QOuIi1iVrtHmbBCg2drYAV6yDXZrML04GXk_7HQs6UghYutXuvP-3Kzq7l?width=3000&height=2250&cropmode=none",
		descr: "This is my submission - the chassis and mechanics were untouched, and I only changed the styling of the body. I went for a hybrid American muscle car/monster truck look."
	},
	{
		name: "Front",
		type: "Photo",
		url: "https://dm2304files.storage.live.com/y4mnEQlx5P7dNkVo5O6eFlO2bwgRKQsbImqWYcuM91z9Ck4GRkaS0gzHDazMGIOPEVcjHCUB1Ele5KEK2zniNppVzMctT0hB7XDQXCwJzTOmwtnibyqyzWEBR9vnYKPGNsPjuDmXX6NnRRAKPJBkf48fykb9te9ssC46VmqfDPvmB00RwBYH5AzTb8khnnw63rD?width=4000&height=3000&cropmode=none",
		descr: <div>The crawler is 21 studs wide, compared to my previous car designs such as the <a href="#/gallery/hondacivic" target="_blank" rel="noreferrer">Honda Civic</a> which was 13 studs wide. This made it significantly easier to style the car, and the result turned out better than my previous builds.</div>
	},
	{
		name: "Rear",
		type: "Photo",
		url: "https://dm2304files.storage.live.com/y4m-HH4HbYPE5-sSMj9jEUhklgauPFfIFsFb-60xzhJuIaD1GncBvEW6YvIyKiaJC7d7_yFYfzdBUt4BO2PcQQQUay8yCbK_UTJzuOpgw9mlP9J3qayzrFV-49u96Dxp46gnDpYpy84U42uMC3TjegRtty5W3P-pcmFWQFKdKi6bDEsfIMQ3huvLXmC09oUjfX1?width=4000&height=3000&cropmode=none",
		descr: "Rear end."
	},
	{
		name: "Side",
		type: "Photo",
		url: "https://dm2304files.storage.live.com/y4m6NraLNmX1cPfRjlTAS9AmO_btFZUK19846IbBN8QWONJQlz2AeQDwrvR6hhMwFtv1Jpfse774RmfijSmK4uC6r16pFs2d7Qvk3HzRs4e21kOmRugycl6Rfi0sNbtA94JNkEMBlLnWaLGUa-Z4OzhG78yzEAE0YTfa8OckRZJul6Fw8RHr2er87Dsr0Iud9hU?width=3000&height=2250&cropmode=none",
		descr: "Side view."
	},
	{
		name: "Top",
		type: "Photo",
		url: "https://dm2304files.storage.live.com/y4mI8u-qun0wbLZd3aIclfiJQlqjBWG28uxZVR9PB5ElD3lidWCb_VHlGvF33tGHMaK-s1NAY-RuW51dcoNeKDoZHpSGvjD7ba2UOeTo3t7S4yGK3V00kXe840lXnOEqOq4YL31cFVY1NZwBzrvkTtWZve4B0rZBLefhCkHeACD2zHxl_f5noVq9cY1-Y67Irdn?width=4000&height=3000&cropmode=none",
		descr: "Top view - the grey 'muscle car' stripes go all the way from the front to the rear."
	},
	{
		name: "Configurable Hard Top and Tailgate",
		type: "Photo",
		url: "https://dm2304files.storage.live.com/y4myylEDy6thP9MdGPna61mcFtWIy6P-snRxrL9vZuRiJfRBbJ3YdRuzq6K4pvN0512RreRHVZcsL0NT1ipSVdAPy0TicRKM1cwjVloYbsHCifnZrMId0B9kr0bj-EkXW9ZVYRVFe62PUfpqJbW9-kjH-hsPm7sfhafzukhXVxwrPpkpVdhWohxF3XD6TZkKAHN?width=3000&height=2250&cropmode=none",
		descr: "I added a retractable hard top and tailgate, just to try and score more points."
	},
	{
		name: "Gullwing Doors",
		type: "Photo",
		url: "https://dm2304files.storage.live.com/y4meUgeM6vDxL_5J3ccio8QyKyAXZDj_yTM6V5QwshzLEI0jKRwyKPd0cy8OdANSipErarjVL8QFyv3oigiO-wOpl79O490lQL_htIPfja6BqKlFkUozJdJoZbEBbZMWQddcybkp_00m4RvB8Gv4Wod0M7f9Uz99S3n0f6uEvNOrAnaGybw6VXVlA3FsRIhUDuz?width=3000&height=2250&cropmode=none",
		descr: "I also included gullwing doors which open via spring-loaded mechanisms."
	},
	{
		name: "Top 100 Winner",
		type: "Photo",
		url: "https://dm2304files.storage.live.com/y4m3ZedPZzBd6YQ0HOvRuVNSPEw2py-7GZkWU_TX3w0hHoKm2Xg4D6m7y2fHSMLcKPMgjRnpdaLkumARbk-eDCDaBYsTaukxAozx8sArrYc3cnxjx4x_7Kjse_OXfj7-0OU-IOOwrfOtVLHJ3daXypiskL4HhiDOei1iRWr9YEZvlhNE9IV5Hv7roqMsCdgjtZ3?width=634&height=456&cropmode=none",
		descr: "I was elated to receive the good news from LEGO!"
	},
	{
		name: "41999 4x4 Crawler",
		type: "Photo",
		url: "https://dm2304files.storage.live.com/y4m58Cr_232sutsy009ttS3PIJ2Srg6X8FZPHuiA89wGbGvBmciATelaenawjxVeonN9rc7Oz_8yan9Pmyk0gdJTiv6wy-S_bQBNEm6bhgk0L_g8s5zIHfAdUW1iOCW6VY_OOLyfFfJjaXXQ5RTeCEM2nzUFMhcRn2wHSGI04cVJBuFa2Cd0THtjU9b55bMs_Vi?width=4000&height=3000&cropmode=none",
		descr: "LEGO shipped me this limited edition 41999 4x4 Crawler set (which was the winning design) free of charge, all the way from Denmark to Singapore!"
	}
];
