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


const designsInfo = [
    {
      name: 'Facial Recognition Box',
      image: facialRecognitionBox,
      date: 'Jun 2020',
      descr: 'Learnt about AI and wanted to propose to my girlfriend. Designed a box that hides the engagement ring and only opens upon detecting her face.',
      icon: <FaceIcon/>
    },
    {
      name: 'Robotank',
      image: mindstormsRobotank,
      date: 'Jun 2018',
      descr: "Taught classes in Robotics using LEGO Mindstorms and organised a competition for students. Built a working prototype to test the competition's obstacle course.",
      icon: <AndroidIcon/>
    },
    {
      name: '8x8 Terrex',
      image: terrex,
      icon: <DriveEtaIcon/>
    },
    {
      name: 'Porsche 911',
      image: porsche911,
      icon: <DriveEtaIcon/>
    },
    {
      name: 'Tracked Vehicle Transmission',
      image: trackedTransmission,
      icon: <SettingsIcon/>
    },
    {
      name: 'Drone Transporter',
      image: droneTransporter,
      icon: <DriveEtaIcon/>
    },
    {
      name: 'Tower Crane',
      image: towerCrane,
      icon: <SettingsIcon/>
    },
    {
      name: 'Name Plate',
      image: namePlate,
      icon: <BusinessCenterIcon/>
    },
    {
      name: 'Light Strike Vehicle II',
      image: lsv2,
      icon: <DriveEtaIcon/> 
    },
    {
      name: 'Gatling Gun',
      image: gatlingGun,
      icon: <GpsFixedIcon />
    },
    {
      name: 'Light Strike Vehicle I',
      image: lsv1,
      icon: <DriveEtaIcon/>
    },
    {
      name: 'Tuk Tuk',
      image: tukTuk,
      icon: <DirectionsBikeIcon/>
    },
    {
      name: '4x4 Crawler',
      image: crawler,
      icon: <DriveEtaIcon/>
    },
    {
      name: 'Walking Crab',
      image: walkingCrab,
      icon: <PetsIcon/>
    },
    {
      name: 'Honda Civic',
      image: hondaCivic,
      icon: <DriveEtaIcon/>
    },
    {
      name: 'Sports Car',
      image: firstMoc,
      icon: <DriveEtaIcon/>
    },

  ]


export default designsInfo;