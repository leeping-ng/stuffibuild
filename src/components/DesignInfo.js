// import icons
import FaceIcon from '@material-ui/icons/Face';
import DriveEtaIcon from '@material-ui/icons/DriveEta';
import DirectionsBikeIcon from '@material-ui/icons/DirectionsBike';
import SettingsIcon from '@material-ui/icons/Settings';
import GpsFixedIcon from '@material-ui/icons/GpsFixed';
import PetsIcon from '@material-ui/icons/Pets';
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter';
import AndroidIcon from '@material-ui/icons/Android';

// import images
import sportsCarImg from '../images/1-sports-car.jpg';
import hondaCivicImg from '../images/2-honda-civic.jpg';
import walkingCrabImg from '../images/3-walking-crab.jpg';
import crawlerImg from '../images/4-4x4-crawler.jpg';
import tukTukImg from '../images/5-tuk-tuk.jpg';
import lightStrikeVehicle1Img from '../images/6-light-strike-vehicle-1.jpg';
import gatlingGunImg from '../images/7-gatling-gun.jpg';
import lightStrikeVehicle2Img from '../images/8-light-strike-vehicle-2.jpg';
import namePlateImg from '../images/9-name-plate.jpg';
import towerCraneImg from '../images/10-tower-crane.jpg';
import droneTransporterImg from '../images/11-drone-transporter.jpg';
import trackedVehicleTransmissionImg from '../images/12-tracked-vehicle-transmission.jpg';
import porsche911Img from '../images/13-porsche-911.jpg';
import terrexImg from '../images/14-terrex.jpg';
import robotankImg from '../images/15-robotank.jpg';
import facialRecognitionBoxImg from '../images/16-facial-recognition-box.jpg';

// import pages
import sportsCarPage from '../pages/sportsCarPage';
import hondaCivicPage from '../pages/hondaCivicPage';
import walkingCrabPage from '../pages/walkingCrabPage';
import crawlerPage from '../pages/crawlerPage';
import tukTukPage from '../pages/tukTukPage';
import lightStrikeVehicle1Page from '../pages/lightStrikeVehicle1Page';
import twinGatlingGunsPage from '../pages/twinGatlingGunsPage';
import lightStrikeVehicle2Page from '../pages/lightStrikeVehicle2Page';
import namePlatePage from '../pages/namePlatePage';
import towerCranePage from '../pages/towerCranePage';
import droneTransporterPage from '../pages/droneTransporterPage';
import Moc from '../pages/Moc';


const designInfo = [
    {
      path: '/gallery/facialrecognitionbox',
      page: Moc,
      name: 'Facial Recognition Box',
      image: facialRecognitionBoxImg,
      date: 'Jun 2020',
      descr: 'Proposed to girlfriend with a LEGO box hiding a ring and a mini computer running facial recognition code.',
      icon: <FaceIcon/>
    },
    {
      path: '/gallery/8x8terrex',
      page: Moc,
      name: '8x8 Terrex',
      image: terrexImg,
      date: 'Dec 2018',
      descr: 'Fulfilled a long-lived goal to build this 8-wheel drive beast, since first seeing it in 2012.',
      icon: <DriveEtaIcon/>
    },
    {
      path: '/gallery/robotank',
      page: Moc,
      name: 'Robotank',
      image: robotankImg,
      date: 'Jun 2018',
      descr: 'Organised a Mindstorms contest requiring robots to shoot targets and navigate an obstacle course.',
      icon: <AndroidIcon/>
    },
    {
      path: '/gallery/porsche911',
      page: Moc,
      name: 'Porsche 911',
      image: porsche911Img,
      date: 'Jul 2016',
      descr: 'Achieved top 20 placing in a Porsche-themed LEGO contest with this small, RC 911 Carrera Cabrio replica.',
      icon: <DriveEtaIcon/>
    },
    {
      path: '/gallery/trackedvehicletransmission',
      page: Moc,
      name: 'Tracked Vehicle Transmission',
      image: trackedVehicleTransmissionImg,
      date: 'May 2016',
      descr: 'Garnered nearly 200,000 YouTube views to date, with this complex yet compact system of gears and motors.',
      icon: <SettingsIcon/>
    },
    {
      path: '/gallery/dronetransporter',
      page: droneTransporterPage,
      name: 'Drone Transporter',
      image: droneTransporterImg,
      date: 'Sep 2015',
      descr: 'Participated in a LEGO contest with the objective of designing a Mercedes-Benz truck of the future.',
      icon: <DriveEtaIcon/>
    },
    {
      path: '/gallery/towercrane',
      page: towerCranePage,
      name: 'Tower Crane',
      image: towerCraneImg,
      date: 'Feb 2014',
      descr: 'First foray into designing gearboxes and using a single motor to execute multiple tasks.',
      icon: <SettingsIcon/>
    },
    {
      path: '/gallery/nameplate',
      page: namePlatePage,
      name: 'Name Plate',
      image: namePlateImg,
      date: 'Jan 2014',
      descr: 'Created a name plate to place on my office desk, which rotates open to reveal a hidden message.',
      icon: <BusinessCenterIcon/>
    },
    {
      path: '/gallery/lightstrikevehicle2',
      page: lightStrikeVehicle2Page,
      name: 'Light Strike Vehicle II',
      image: lightStrikeVehicle2Img,
      date: 'Aug 2013',
      descr: 'Experimented with styling using Technic panels to replicate the aggressive look of this very cool vehicle.',
      icon: <DriveEtaIcon/> 
    },
    {
      path: '/gallery/twingatlingguns',
      page: twinGatlingGunsPage,
      name: 'Twin Gatling Guns',
      image: gatlingGunImg,
      date: 'Aug 2013',
      descr: "Challenged a colleague to build LEGO weapons and 'attack' each other's cubicles.",
      icon: <GpsFixedIcon />
    },
    {
      path: '/gallery/lightstrikevehicle1',
      page: lightStrikeVehicle1Page,
      name: 'Light Strike Vehicle I',
      image: lightStrikeVehicle1Img,
      date: 'May 2013',
      descr: 'Liked this since serving as an army mechanic back in 2007 - finally got around to building it.',
      icon: <DriveEtaIcon/>
    },
    {
      path: '/gallery/tuk-tuk',
      page: tukTukPage,
      name: 'Tuk-Tuk',
      image: tukTukImg,
      date: 'Feb 2013',
      descr: 'Holidayed in Thailand and got inspired by the many Tuk-Tuks on its roads.',
      icon: <DirectionsBikeIcon/>
    },
    {
      path: '/gallery/4x4crawler',
      page: crawlerPage,
      name: '4x4 Crawler',
      image: crawlerImg,
      date: 'Dec 2012',
      descr: 'Won a LEGO set in my first LEGO contest by submitting this Crawler design.',
      icon: <DriveEtaIcon/>
    },
    { 
      path: '/gallery/walkingcrab',
      page: walkingCrabPage,
      name: 'Walking Crab',
      image: walkingCrabImg,
      date: 'Aug 2012',
      descr: "Visited Theo Jansen's Strandbeest exhibition, and got interested in walking mechanisms.",
      icon: <PetsIcon/>
    },
    {
      path: '/gallery/hondacivic',
      page: hondaCivicPage,
      name: 'Honda Civic',
      image: hondaCivicImg,
      date: 'May 2012',
      descr: 'Built my first RC, scale model car with Power Functions elements.',
      icon: <DriveEtaIcon/>
    },
    {
      path: '/gallery/sportscar',
      page: sportsCarPage,
      name: 'Sports Car',
      image: sportsCarImg,
      date: 'Dec 2011',
      descr: 'Hello world! After a LEGO-less decade, I started building my own creations again.',
      icon: <DriveEtaIcon/>
    },
  ]


export default designInfo;