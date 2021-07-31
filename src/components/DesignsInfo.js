import FaceIcon from '@material-ui/icons/Face';
import DriveEtaIcon from '@material-ui/icons/DriveEta';
import DirectionsBikeIcon from '@material-ui/icons/DirectionsBike';
import SettingsIcon from '@material-ui/icons/Settings';
import GpsFixedIcon from '@material-ui/icons/GpsFixed';
import PetsIcon from '@material-ui/icons/Pets';
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter';
import AndroidIcon from '@material-ui/icons/Android';


import firstMoc from '../images/1-first-moc.jpg';
import hondaCivic from '../images/2-honda-civic.jpg';
import walkingCrab from '../images/3-walking-crab.jpg';
import crawler from '../images/4-4x4-crawler.jpg';
import tukTuk from '../images/5-tuk-tuk.jpg';
import lsv1 from '../images/6-LSV-1.jpg';
import gatlingGun from '../images/7-gatling-gun.jpg';
import lsv2 from '../images/8-LSV-2.jpg';
import namePlate from '../images/9-name-plate.jpg';
import towerCrane from '../images/10-tower-crane.jpg';
import droneTransporter from '../images/11-drone-transporter.jpg';
import trackedTransmission from '../images/12-tracked-transmission.jpg';
import porsche911 from '../images/13-porsche-911.jpg';
import terrex from '../images/14-terrex.jpg';
import mindstormsRobotank from '../images/15-mindstorms-robotank.jpg';
import facialRecognitionBox from '../images/16-facial-recognition-box.jpg';

import Moc from './Moc';

const designsInfo = [
    {
      path: '/gallery/facialrecognitionbox',
      page: Moc,
      name: 'Facial Recognition Box',
      image: facialRecognitionBox,
      date: 'Jun 2020',
      descr: 'Proposed to girlfriend with a LEGO box hiding a ring and a mini computer running facial recognition code.',
      icon: <FaceIcon/>
    },
    {
      path: '/gallery/8x8terrex',
      page: Moc,
      name: '8x8 Terrex',
      image: terrex,
      date: 'Dec 2018',
      descr: 'Fulfilled a long-lived goal to build this 8-wheel drive beast, since first seeing it in 2012.',
      icon: <DriveEtaIcon/>
    },
    {
      path: '/gallery/robotank',
      page: Moc,
      name: 'Robotank',
      image: mindstormsRobotank,
      date: 'Jun 2018',
      descr: 'Organised a Mindstorms contest requiring robots to shoot targets and navigate an obstacle course.',
      icon: <AndroidIcon/>
    },
    {
      path: '/gallery/porsche911',
      page: Moc,
      name: 'Porsche 911',
      image: porsche911,
      date: 'Jul 2016',
      descr: 'Achieved top 20 placing in a Porsche-themed LEGO contest with this small, RC 911 Carrera Cabrio replica.',
      icon: <DriveEtaIcon/>
    },
    {
      path: '/gallery/trackedvehicletransmission',
      page: Moc,
      name: 'Tracked Vehicle Transmission',
      image: trackedTransmission,
      date: 'May 2016',
      descr: 'Garnered nearly 200,000 YouTube views to date, with this complex yet compact system of gears and motors.',
      icon: <SettingsIcon/>
    },
    {
      path: '/gallery/dronetransporter',
      page: Moc,
      name: 'Drone Transporter',
      image: droneTransporter,
      date: 'Sep 2015',
      descr: 'Participated in a LEGO contest with the objective of designing a Mercedes-Benz truck of the future.',
      icon: <DriveEtaIcon/>
    },
    {
      path: '/gallery/towercrane',
      page: Moc,
      name: 'Tower Crane',
      image: towerCrane,
      date: 'Feb 2014',
      descr: 'First foray into designing gearboxes and using a single motor to execute multiple tasks.',
      icon: <SettingsIcon/>
    },
    {
      path: '/gallery/nameplate',
      page: Moc,
      name: 'Name Plate',
      image: namePlate,
      date: 'Jan 2014',
      descr: 'Created a name plate to place on my office desk, which rotates open to reveal a hidden message.',
      icon: <BusinessCenterIcon/>
    },
    {
      path: '/gallery/lightstrikevehicleii',
      page: Moc,
      name: 'Light Strike Vehicle II',
      image: lsv2,
      date: 'Aug 2013',
      descr: 'Experimented with styling using Technic panels to replicate the aggressive look of this very cool vehicle.',
      icon: <DriveEtaIcon/> 
    },
    {
      path: '/gallery/gatlinggun',
      page: Moc,
      name: 'Gatling Gun',
      image: gatlingGun,
      date: 'Aug 2013',
      descr: "Challenged a colleague to build LEGO weapons and 'attack' each other's cubicles.",
      icon: <GpsFixedIcon />
    },
    {
      path: '/gallery/lightstrikevehiclei',
      page: Moc,
      name: 'Light Strike Vehicle I',
      image: lsv1,
      date: 'May 2013',
      descr: 'Liked this since serving as an army mechanic back in 2007 - finally got around to building it.',
      icon: <DriveEtaIcon/>
    },
    {
      path: '/gallery/tuk-tuk',
      page: Moc,
      name: 'Tuk-Tuk',
      image: tukTuk,
      date: 'Feb 2013',
      descr: 'Holidayed in Thailand and got inspired by the many Tuk-Tuks on its roads.',
      icon: <DirectionsBikeIcon/>
    },
    {
      path: '/gallery/4x4crawler',
      page: Moc,
      name: '4x4 Crawler',
      image: crawler,
      date: 'Dec 2012',
      descr: 'Won a LEGO set in my first LEGO contest by submitting this Crawler design.',
      icon: <DriveEtaIcon/>
    },
    { 
      path: '/gallery/walkingcrab',
      page: Moc,
      name: 'Walking Crab',
      image: walkingCrab,
      date: 'Aug 2012',
      descr: "Visited Theo Jansen's Strandbeest exhibition, and got interested in walking mechanisms.",
      icon: <PetsIcon/>
    },
    {
      path: '/gallery/hondacivic',
      page: Moc,
      name: 'Honda Civic',
      image: hondaCivic,
      date: 'May 2012',
      descr: 'Built my first RC, scale model car with Power Functions elements.',
      icon: <DriveEtaIcon/>
    },
    {
      path: '/gallery/sportscar',
      page: Moc,
      name: 'Sports Car',
      image: firstMoc,
      date: 'Dec 2011',
      descr: 'Hello world! After a LEGO-less decade, I started building my own creations again.',
      icon: <DriveEtaIcon/>
    },
  ]


export default designsInfo;