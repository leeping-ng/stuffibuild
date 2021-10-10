import React from 'react';
import TemplatePage from './templatePage';

import Icon from '@material-ui/icons/DriveEta';

function lightStrikeVehicle2Page() {
	
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

export default lightStrikeVehicle2Page;


const pageName = "Light Strike Vehicle II";
const creationDate = "Aug 2013";
const creationDescr = <div>In May 2013, I finished designing the <a href="#/gallery/lightstrikevehicle1">Light Strike Vehicle I</a> (Mk I) in black, which was in service with the Singapore Army since 1998. It would be replaced by the new <a href="https://en.wikipedia.org/wiki/Light_Strike_Vehicle_(Singapore)" target="_blank" rel="noreferrer">Light Strike Vehicle II</a> (Mk II) in 2013, which in my opinion, looked even more fun and aggressive. I could not resist the temptation to style the new vehicle, thus I tore down my Mk I design and started building Mk II...</div>;
const creationChips = ["Remote Control", "Power Functions", "Military"];
const info = [
	{
		name: "LEGO LSV II",
		type: "Photo",
		url: "https://dm2304files.storage.live.com/y4mAnMwOtxljOtDXyOttljjVXDepgVao44Eza8DMFlEyr-OL5rmoyWb7QeVulOOMlgiBO5V4DHqjrXgaX6U9vDdgjTh_XxRgpCVFxbb3-k_5tmRbbKLC5Uc0ZBuTiFzVbFu8lARL30EzqZGtX3AT9rLwcA4JH6jJAI6ypaQW5qM-ZIQEM3qDQOv7mmFfH5Y1uh8?width=4000&height=3000&cropmode=none",
		descr: "I enjoyed weaving green and black body panels into this build, attempting to replicate the original look as much as possible."
	},
	{
		name: "Actual LSV II",
		type: "Photo",
		url: "https://dm2304files.storage.live.com/y4mYascoE2PrfNH-CH-w1UypTv5luHhFW687t1cQ_PizbA4lBX820gDow1BvCtPQOLE7mIiNeGjPXId-ZDnlfS1UZFRk4rq4uY8f9bg4Iv7UsNezBq7gQyJekcPhLeNTDlT2u1-WV9hei1cu6C6gg6_IFtyhSvAJiohxIsMwalyf_03HWgonW5E_hwuYmPXROO7?width=720&height=478&cropmode=none",
		descr: <div>An actual Light Strike Vehicle II (photo credits <a href="https://defense-studies.blogspot.com/2013/06/the-saf-newcomer-will-make-its-public.html?m=1" target="_blank" rel="noreferrer">Defense Studies</a>). I think it looks amazing!</div>
	},
    {
		name: "Actual LSV I versus LSV II",
		type: "Photo",
		url: "https://dm2304files.storage.live.com/y4m-9BkIhwuSoD8xz3RPaUKegI1dIv1VG4kmAgFz30L-0kPHHmzIURO_75j_UwUp8dh_g_S6dXOI6WjIzp_cKPgyirb-ILJbLyBKu7g_bkWKQlYIL_nR8wIk-L4OVF9egtT-0a9X0qh0u9_oOVnHdf7uRNbZdx9w9O6TP80zslLmLzO4rYPH1l96lDGKQsWAXx5?width=1024&height=766&cropmode=none",
		descr: <div>The original Light Strike Vehicle Mk I on the left, with the new Mk II on the right (photo credits <a href="https://www.flickr.com/photos/xtemujin/9224140004" target="_blank" rel="noreferrer">Flickr</a>).</div>
	},
    {
		name: "LEGO LSV I versus LSV II",
		type: "Photo",
		url: "https://dm2304files.storage.live.com/y4mjkS-AjnBUeuI5qFlcBjJAFgSn29sT20M4G6KBwMu1h55lSRMAYCFL-fKiCIeFR9p_YmYJOCOeKDP9e279ZY0tvlJ2Y3zD8Ji62886TGnPzCRXEd7b-6UZun1l34jgBFLGMnK_5Xi5NudWVbRropnvonBbl-flfqKqCll9TCpEQoUYMYth4ouhYCcZiu-yjyd?width=960&height=720&cropmode=none",
		descr: <div>A comparison of my Mk I (left) and Mk II (right) designs. Check out more details of my LEGO Mk I <a href="#/gallery/lightstrikevehicle1">here</a>.</div>
	},
	{
		name: "Front",
		type: "Photo",
		url: "https://dm2304files.storage.live.com/y4mQCsGH4M8FqlLLMUAKd_zJnOF8Q0LXCuK-ZrOBrN0z7FPLTiY-7AFT6hD_QUE8OTBPYNg_zErRlyIYsqFzJfFW0jdy5FRG0r_7gbuKLJ-sdqu9hG8OcQwqJM9KqIppjgv_8oiwhLeY-k9N3Ma0z0IXTHiTG7jt4UB8Fm9bBCqQHyO-2-_NDkqB8l26pACgGMd?width=4000&height=3000&cropmode=none",
		descr: "Close-up of the front end."
	},
    {
		name: "Close-Up of Tail Light",
		type: "Photo",
		url: "https://dm2304files.storage.live.com/y4mHLhYFHYFV0ZuAkXnNHTlWEgWkhGhejZ1F47tjo_4I4Umo4mobSWzv8BWmTMb3dg_FCZX0R2hjWcyLYlCDvuqnd8LWdd2iR3DQ1xAid5RKQ2CYaYCTjIisGvdkKEnI-hoBGiGbpO_WE5udfO2QUJssZLmC6nU40vnaIYFq7-_cCdxBtdrGq_EsO8f-v5UdkWC?width=4000&height=3000&cropmode=none",
		descr: "Close-up of a tail light."
	},
	{
		name: "Rear",
		type: "Photo",
		url: "https://dm2304files.storage.live.com/y4mUaRbE9yzvBHBuZJa6HaniBNpIX0H5vAvQLRoCODXqfZUkKUAQdVtoilxjhMz9FDZesuRDJd4rAdUdoKwp9D_eb4C7ESYzoqyrjDjRr1qH58kSwLJhI0yw_EfCp3EGlqz_kL_Qpx1slO09gRFd_nXbaprGBRi2oghoc5VhA0Yu3KJMTkbUh91HGuwbH-Yh_Cb?width=4000&height=3000&cropmode=none",
		descr: "The spare tire is mounted between the tail lights."
	},
	{
		name: "Seats 6",
		type: "Photo",
		url: "https://dm2304files.storage.live.com/y4mrI9ywR7VFxohkblLTC7UlXe1Q14aP7lhwlqFRGzA_HbnUv1DY9Qr9hfY1op6VrRLuL5DnjtcpgLt9vGCZRyn-3QabhbC_W4W-Auosh_6JxwwnWn-xab7P17zZrhcOb9C6bcqUVEK431ZwM6Qegcn2Yt_nauOtDC_lGON9d47GUO3lYkRU7JLOTpmCiRzFWZz?width=4000&height=3000&cropmode=none",
		descr: "It can seat 6, and front seats have a layout that's similar to a McLaren F1 - with a central steering wheel and driver seat positioned more forward."
	},
	{
		name: "Bottom",
		type: "Photo",
		url: "https://dm2304files.storage.live.com/y4mqqKlvlgRmFqHX8JY6-_B6iMmf8LG1vk_l56SWZz68U2xAiw0lQGyRal0yjTbzXFpQtAF_0T81m24eCkjehAHcPcILIbqH-53vJvAlniXuMj4E_AuZaj7a8ezl-UfcdIBar3eG8jIxq2VCvANUJOgC4iNT887dKmuDQbI52tijGaTbI5ylr4he5Zrcb3tWXLW?width=4000&height=3000&cropmode=none",
		descr: "The grey Power Functions battery box is mounted right in the middle of the chassis, and the servomotor used for steering is right in front of the box."
	},
    {
		name: "Chassis",
		type: "Photo",
		url: "https://dm2304files.storage.live.com/y4mAWVs1PvEQRl0fsu3DZehoULyv3jaCW4bbFckXSLaDEKuE2KSbd471ZXEFTB4X_G3CUDelw6KpPqiOu8xas35iynlCwGzXjzCJT-ftrUr89Kg0VhNjZUvqSCP4iK7EkN4FaedEPnbG4bO7k1B6ScDoFtuhSi5qNM59WNU1k3P5YJ6OpeTUPOfZpT9muOaK8LR?width=4000&height=3000&cropmode=none",
		descr: "The chassis on its own."
	},
    {
		name: "Front Suspension",
		type: "Photo",
		url: "https://dm2304files.storage.live.com/y4mndyP7ritlUriMOhmrAvodqLKv71XyajBDzDg-BOXo-WAlVCgT_TPqEWsnsU0LZPXCnuIjcKDnAlC9Y4-xUHtcavGcxKYSr1alYE55yElTbzQ8MsGp50trUc_u2jkNi-mFPFniIlGlHE82Ln2fh48HQBEGYF53xa_UeS7A1n1QazojrxB8Uhs048sFXAuGOXA?width=4000&height=3000&cropmode=none",
		descr: "Double wishbones for front suspension."
	},
    {
		name: "Rear Suspension",
		type: "Photo",
		url: "https://dm2304files.storage.live.com/y4mjl6kDHzbykng3tchGAnnhSCTNjrCjdusv_VUr8rKekiMmci6I9VXfZ7mdQ95g0KW23iP98fsMNY2NRAPHMaWRXrtH2GWkEatTULvwGpQxjMzSaA7dwusvwn0Gs_cQCcWZ0eRh89RI5aBqlH8__gHHCKjs07yWOMM7NdgoF-dz4wB16GP1AMsm-H_bS6B_Hyb?width=4000&height=3000&cropmode=none",
		descr: "Trailing arm suspension for rear wheels. A XL-motor is used to drive the rear wheels."
	},
	{
		name: "Remote",
		type: "Photo",
		url: "https://dm2304files.storage.live.com/y4mYTjUHhH1XOW9swqMppvs6wJUfQDW6lkFtvWg5EH_6x8NIMr3SM0Q63blq2wIDMtc42URo70eEtGhmBW1jQJ6EyHX-R047T9GAW0ixD2F2-GXLpwtf79LkH1Sx96U2bVIUWTnyquu6B042eMiFQ5pGZaIQyS6q6-WmDt62saHpICTfSHDL6xoQ5i4BFkQmijc?width=4000&height=3000&cropmode=none",
		descr: "With the remote control - the stick on the left is for drive, while the large gear on the right is for steering."
	},
    {
		name: "Driver",
		type: "Photo",
		url: "https://dm2304files.storage.live.com/y4mBV4_aKf08225U6P3sNcK-3i85RaoH8QC2U0pOhPyHXcazj8nHIwKiaUmoW5SYhyZD1RvYYZ0I7-WBmIwbX03M-HFpkJz4qA7qz53DCEKLrnBXbYQfg27aql2uZ6zMSJSLF3Xk_oK5ss1gLwZQYOFpHnTQs363UoNUEI0cpPV0RQdNzcCr1f6e2-Vk9bAGIgg?width=4000&height=3000&cropmode=none",
		descr: "One last look."
	},
];
