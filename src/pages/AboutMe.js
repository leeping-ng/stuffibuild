import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';

import AppBar from '../components/AppBar';
import Footer from '../components/Footer';
import isoPaper from '../images/isometric-paper.png';


const styles = (theme) => ({
  heading: {
    display: 'block',
    overflow: 'hidden',
    marginTop: theme.spacing(8),
  },
  headingText: {
    textAlign: 'center',
    fontWeight: 400,
    [theme.breakpoints.down('xs')]: {
      fontSize: '1.0rem',
      marginTop: theme.spacing(1),
      marginBottom: theme.spacing(2)
    },
    [theme.breakpoints.up('sm')]: {
      marginTop: theme.spacing(5),
      marginBottom: theme.spacing(5),
      fontSize: '1.25rem'
    },
  },
  root: {
    display: 'block',
    overflow: 'hidden',
    marginTop: theme.spacing(0),
    marginBottom: theme.spacing(0),
    backgroundImage: `url(${isoPaper})`,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
    backgroundColor: 'white',
  },
  overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(255, 255, 255, 0.5)',
  },
  container: {
    marginTop: theme.spacing(0),
    marginBottom: theme.spacing(4),
    display: 'flex',
    flexDirection: 'column',
    position: 'relative',
  },
  gridElement: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: theme.spacing(0, 2),
  },
  image: {
    marginTop: theme.spacing(2),
  },
  card: {
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: 'rgba(255, 255, 255, 0.7)',
    padding: theme.spacing(0, 0),
    marginBottom: theme.spacing(0),
  },
  text: {
    textAlign: 'left',
    fontWeight: 400,
    [theme.breakpoints.down('xs')]: {
      fontSize: '1.0rem',
    },
    [theme.breakpoints.up('sm')]: {
      fontSize: '1.25rem'
    },
  },
  caption: {
    padding: theme.spacing(0, 0),
    marginBottom: theme.spacing(0),
    '&:last-child': {
      paddingBottom: 0,
    },
  },
  captionText: {
    textAlign: 'center',
    fontWeight: 400,
    fontStyle: 'italic',
    [theme.breakpoints.down('xs')]: {
      fontSize: '0.85rem',
    },
    [theme.breakpoints.up('sm')]: {
      fontSize: '1.0rem'
    },
  },

})


function aboutMePage(props) {
  const { classes } = props;
  const info = [
    {
      type: "Photo",
      url: "https://1drv.ms/i/c/88f9e5f4a517d194/UQSU0Rel9OX5IICIGyUAAAAAALuochTrl5vTj3s?width=1024",
      caption: ""
    },
    {
      type: "Paragraph",
      descr: "My name is Lee Ping Ng. I'm originally from Singapore and am currently based near London, UK. Since I was a kid, I would quickly grow bored of standard LEGO sets, and dismantle them to build my own creations. I was particularly fond of LEGO Technic, which included gears, motors and pneumatics. When I was 15, I decided that I wanted to be a mechanical engineer, and I believe that this largely stemmed from my passion in LEGO.",
    },
    {
      type: "Photo",
      url: "https://1drv.ms/i/c/88f9e5f4a517d194/UQSU0Rel9OX5IICIHCUAAAAAAPm0uUtdGZIT16M?width=1024",
      caption: <div>My first LEGO design as an adult was a <a href="/gallery/sportscar">sports car</a></div>
    },
    {
      type: "Paragraph",
      descr: "In my late teens and early adulthood, I went through a decade of LEGO “Dark Ages” where I stopped touching LEGO bricks. My interest in LEGO was piqued again as an adult, when I started noticing high quality LEGO Technic sets coming out in the late 2000s. In 2011, I started to design my own creations with LEGO again."
    },
    {
      type: "Photo",
      url: "https://1drv.ms/i/c/88f9e5f4a517d194/UQSU0Rel9OX5IICIMiUAAAAAACM8UdfNkgdqpH0?width=1024",
      caption: "Working as a mechanical engineer"
    },
    {
      type: "Paragraph",
      descr: "My life and career also began revolving around design and engineering. I had served as a vehicle mechanic in the army for 2 years, gaining practical skills and automotive knowledge. In 2012, I graduated with a degree in mechanical engineering, fulfilling my childhood goal. Subsequently, I worked as an automotive and transmission design engineer for a few years."
    },
    {
      type: "Photo",
      url: "https://1drv.ms/i/c/88f9e5f4a517d194/UQSU0Rel9OX5IICILSUAAAAAAN4fL71VOIvyxX0?width=1024",
      caption: <div>Prototype of a <a href="/gallery/trackedvehicletransmission">tracked vehicle transmission</a></div>
    },
    {
      type: "Paragraph",
      descr: "My career trajectory would go on to have a significant influence on my LEGO designs. Most of my designs from 2011 to 2018 were heavily focused on vehicles and machines. As I amassed more LEGO Technic bricks and design experience, I started pushing the boundaries of mechanical engineering with LEGO, experimenting with complex gearboxes, drivetrains and robust building techniques. "
    },
    {
      type: "Photo",
      url: "https://1drv.ms/i/c/88f9e5f4a517d194/UQSU0Rel9OX5IICIECUAAAAAAFNid79ADQ8tUAU?width=1024",
      caption: "My LEGO room in Canada"
    },
    {
      type: "Paragraph",
      descr: "I moved to Vancouver, Canada for a job rotation from 2014 to 2017. My apartment had a small den, which I promptly converted into my version of a man cave – a LEGO room! All the LEGO Technic bricks were sorted by type and size in different plastic storage boxes, allowing me to create new designs more conveniently."
    },
    {
      type: "Photo",
      url: "https://raw.githubusercontent.com/leeping-ng/LEGO-Facial-Recognition-Box/master/images/RPi_stream.gif",
      caption: "Facial recognition for marriage proposal"
    },
    {
      type: "Paragraph",
      descr: <div>In 2019, I did a career pivot from mechanical engineering to AI. Robotics, automation and AI were becoming increasingly important, and I was keen to be a part of this. When I started coding, I found that I loved it too! With this, the theme of my LEGO designs also evolved, to building <a href="/gallery/robotank">robots</a> using LEGO Mindstorms, and even embedding a camera and tiny computer with facial recognition software in a <a href="/gallery/facialrecognitionbox">LEGO box</a> to propose to my girlfriend!<span role="img" aria-label="heart"> 💗</span></div>
    },
    {
      type: "Photo",
      url: "https://1drv.ms/i/c/88f9e5f4a517d194/UQSU0Rel9OX5IICILiUAAAAAAEj_fYpJ-KAQRP0?width=1024",
      caption: <div>Source code for this website on my <a href="https://github.com/leeping-ng?tab=repositories" target="_blank" rel="noreferrer">GitHub</a></div>
    },
    {
      type: "Paragraph",
      descr: <div>With my new skills in software development, I decided to create my own website in 2021, using React and Material-UI, and what you see here is the result! There was also a push factor for this - I used to post my creations on MOCpages, an online community for LEGO creations. Sadly, in 2020, the <a href="https://thelegocarblog.com/2020/06/04/the-rise-fall-of-mocpages/" target="_blank" rel="noreferrer">plug was pulled</a> for MOCpages, and all my posts were deleted! I had to rewrite descriptions of my LEGO creations here, and it has been a nostalgic trip down memory lane indeed…</div>
    },
    {
      type: "Photo",
      url: "https://1drv.ms/i/c/88f9e5f4a517d194/UQSU0Rel9OX5IICI5-YAAAAAABkaAUJPZcur8-o?width=1024",
      caption: <div>Back to school, in computing lab with classmates</div>
    },
    {
      type: "Paragraph",
      descr: <div>In 2022, my wife and I moved to London, and I enrolled in the MSc Computing programme at Imperial College London to strengthen my computing knowledge. It was nice but also challenging to be back to school after working for 10 years. After graduation in 2023, I started an AI engineering job in the UK, focusing on computer vision. Implications for this website - more software and AI projects! (Also, no LEGO builds for now as my LEGO is stored in Singapore <span role="img" aria-label="sad">😢</span>.)</div>
    },
    {
      type: "Photo",
      url: "https://1drv.ms/i/c/88f9e5f4a517d194/UQSU0Rel9OX5IICIMCUAAAAAABi8iFi5fdGx2z4?width=1024",
      caption: <div>After seeing Tuk-Tuks in Bangkok, I built a <a href="/gallery/tuk-tuk">LEGO version</a></div>
    },
    {
      type: "Paragraph",
      descr: <div>Finally, although this website is about stuff I build, in some ways, it's almost a blog about my personal life. Many of my designs were influenced by my travels, career, or life at that point in time. I guess this website serves as a reminder to the future me - to continue to be passionate in the things I do. Thank you for checking out my website, and I sincerely hope it inspires you to pursue your passions as well!<span role="img" aria-label="smile"> 😃</span></div>
    }
  ];

  return (
    <React.Fragment>
      <AppBar />
      <Container className={classes.heading}>
        <Typography variant="h6" className={classes.headingText}>
          This is the story of how my engineering journey began, and how my interests and career
          trajectory influenced my builds over the years.
        </Typography>
      </Container>
      <section className={classes.root} >
        <div className={classes.overlay} />
        <Container className={classes.container}>
          <Grid container>
            {info.map((info) => (
              <Grid item xs={12} md={6} className={classes.gridElement}>
                {info.type === "Photo"
                  ?
                  (<div className={classes.image}>
                    <Card className={classes.card}>
                      <CardMedia component="img" image={info.url} alt={info.caption} />
                      <CardContent className={classes.caption}>
                        <Typography variant="h6" className={classes.captionText}>{info.caption}</Typography>
                      </CardContent>
                    </Card>
                  </div>
                  )
                  :
                  (<div>
                    <Card className={classes.card}>
                      <CardContent>
                        <Typography className={classes.text}>
                          {info.descr}
                        </Typography>

                      </CardContent>
                    </Card>
                  </div>
                  )
                }
              </Grid>
            ))}
          </Grid>
        </Container>
      </section>
      <Footer />
    </React.Fragment>

  );
}



export default withStyles(styles)(aboutMePage);