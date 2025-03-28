// import icons
import FaceIcon from '@material-ui/icons/Face';
import DriveEtaIcon from '@material-ui/icons/DriveEta';
import DirectionsBikeIcon from '@material-ui/icons/DirectionsBike';
import SettingsIcon from '@material-ui/icons/Settings';
import GpsFixedIcon from '@material-ui/icons/GpsFixed';
import PetsIcon from '@material-ui/icons/Pets';
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter';
import AndroidIcon from '@material-ui/icons/Android';
import CameraAltIcon from '@material-ui/icons/CameraAlt';

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
import peekingDuckImg from '../images/17-peekingduck.jpg';

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
import trackedVehicleTransmissionPage from '../pages/trackedVehicleTransmissionPage';
import porsche911Page from '../pages/porsche911Page';
import robotankPage from '../pages/robotankPage';
import terrexPage from '../pages/terrexPage';
import facialRecognitionBoxPage from '../pages/facialRecognitionBoxPage';
import peekingDuckPage from '../pages/peekingDuckPage';

// 'designInfo.name' needs to match 'pageName' on the specific page for Prev and Next buttons to appear'
const designInfo = [
  {
    id: 17,
    path: '/gallery/peekingduck',
    page: peekingDuckPage,
    name: 'PeekingDuck',
    image: peekingDuckImg,
    date: 'Jun 2021',
    descr: 'Led the development of an open-source computer vision software while working at AI Singapore.',
    icon: <CameraAltIcon />
  },
  {
    id: 16,
    path: '/gallery/facialrecognitionbox',
    page: facialRecognitionBoxPage,
    name: 'Facial Recognition Box',
    image: facialRecognitionBoxImg,
    date: 'Jun 2020',
    descr: 'Proposed to girlfriend with a LEGO box hiding a ring and a mini computer running facial recognition code.',
    icon: <FaceIcon />
  },
  {
    id: 15,
    path: '/gallery/8x8terrex',
    page: terrexPage,
    name: '8x8 Terrex',
    image: terrexImg,
    date: 'Dec 2018',
    descr: 'Fulfilled a long-lived goal to build this 8-wheel drive beast, since first seeing it in 2012.',
    icon: <DriveEtaIcon />
  },
  {
    id: 14,
    path: '/gallery/robotank',
    page: robotankPage,
    name: 'RoboTank',
    image: robotankImg,
    date: 'Jun 2018',
    descr: 'Organised a Mindstorms contest requiring robots to shoot targets and navigate an obstacle course.',
    icon: <AndroidIcon />
  },
  {
    id: 13,
    path: '/gallery/porsche911',
    page: porsche911Page,
    name: 'Porsche 911',
    image: porsche911Img,
    date: 'Jul 2016',
    descr: 'Achieved top 20 placing in a Porsche-themed LEGO contest with this small, RC 911 Carrera Cabrio replica.',
    icon: <DriveEtaIcon />
  },
  {
    id: 12,
    path: '/gallery/trackedvehicletransmission',
    page: trackedVehicleTransmissionPage,
    name: 'Tracked Vehicle Transmission',
    image: trackedVehicleTransmissionImg,
    date: 'May 2016',
    descr: 'Garnered nearly 200,000 YouTube views to date, with this complex yet compact system of gears and motors.',
    icon: <SettingsIcon />
  },
  {
    id: 11,
    path: '/gallery/dronetransporter',
    page: droneTransporterPage,
    name: 'Drone Transporter',
    image: droneTransporterImg,
    date: 'Sep 2015',
    descr: 'Participated in a LEGO contest with the objective of designing a Mercedes-Benz truck of the future.',
    icon: <DriveEtaIcon />
  },
  {
    id: 10,
    path: '/gallery/towercrane',
    page: towerCranePage,
    name: 'Tower Crane',
    image: towerCraneImg,
    date: 'Feb 2014',
    descr: 'First foray into designing gearboxes and using a single motor to execute multiple tasks.',
    icon: <SettingsIcon />
  },
  {
    id: 9,
    path: '/gallery/nameplate',
    page: namePlatePage,
    name: 'Name Plate',
    image: namePlateImg,
    date: 'Jan 2014',
    descr: 'Created a name plate to place on my office desk, which rotates open to reveal a hidden message.',
    icon: <BusinessCenterIcon />
  },
  {
    id: 8,
    path: '/gallery/lightstrikevehicle2',
    page: lightStrikeVehicle2Page,
    name: 'Light Strike Vehicle II',
    image: lightStrikeVehicle2Img,
    date: 'Aug 2013',
    descr: 'Experimented with styling using Technic panels to replicate the aggressive look of this very cool vehicle.',
    icon: <DriveEtaIcon />
  },
  {
    id: 7,
    path: '/gallery/twingatlingguns',
    page: twinGatlingGunsPage,
    name: 'Twin Gatling Guns',
    image: gatlingGunImg,
    date: 'Aug 2013',
    descr: "Challenged a colleague to build LEGO weapons and 'attack' each other's cubicles.",
    icon: <GpsFixedIcon />
  },
  {
    id: 6,
    path: '/gallery/lightstrikevehicle1',
    page: lightStrikeVehicle1Page,
    name: 'Light Strike Vehicle I',
    image: lightStrikeVehicle1Img,
    date: 'May 2013',
    descr: 'Liked this since serving as an army mechanic back in 2007 - finally got around to building it.',
    icon: <DriveEtaIcon />
  },
  {
    id: 5,
    path: '/gallery/tuk-tuk',
    page: tukTukPage,
    name: 'Tuk-Tuk',
    image: tukTukImg,
    date: 'Feb 2013',
    descr: 'Holidayed in Thailand and got inspired by the many Tuk-Tuks on its roads.',
    icon: <DirectionsBikeIcon />
  },
  {
    id: 4,
    path: '/gallery/4x4crawler',
    page: crawlerPage,
    name: '4x4 Crawler',
    image: crawlerImg,
    date: 'Dec 2012',
    descr: 'Won a LEGO set in my first LEGO contest by submitting this Crawler design.',
    icon: <DriveEtaIcon />
  },
  {
    id: 3,
    path: '/gallery/walkingcrab',
    page: walkingCrabPage,
    name: 'Walking Crab',
    image: walkingCrabImg,
    date: 'Aug 2012',
    descr: "Visited Theo Jansen's Strandbeest exhibition, and got interested in walking mechanisms.",
    icon: <PetsIcon />
  },
  {
    id: 2,
    path: '/gallery/hondacivic',
    page: hondaCivicPage,
    name: 'Honda Civic',
    image: hondaCivicImg,
    date: 'May 2012',
    descr: 'Built my first RC, scale model car with Power Functions elements.',
    icon: <DriveEtaIcon />
  },
  {
    id: 1,
    path: '/gallery/sportscar',
    page: sportsCarPage,
    name: 'Sports Car',
    image: sportsCarImg,
    date: 'Dec 2011',
    descr: 'Hello world! After a LEGO-less decade, I started building my own creations again.',
    icon: <DriveEtaIcon />
  },
]


export default designInfo;