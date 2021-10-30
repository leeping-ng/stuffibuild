import React from 'react';
import { useState } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import emailjs from 'emailjs-com';

import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import CircularProgress from '@material-ui/core/CircularProgress';
import Snackbar from '@material-ui/core/Snackbar';
import Alert from '@material-ui/lab/Alert';


import AppBar from '../components/AppBar';
import Footer from '../components/Footer';
import isoPaper from '../images/isometric-paper.png';

// EmailJS guide
// https://www.webtips.dev/react-contact-form-without-backend
// React template for contact form
// https://academind.com/tutorials/sending-an-email-with-react-and-cloud-functions


const styles = (theme) => ({
	honeypot: {
    display: 'none',
  },
  mainContent: {
    minHeight: 'calc(100vh - 212px)',
  },
  root: {
    display: 'block',
    overflow: 'hidden',
		marginBottom: theme.spacing(0),
    backgroundImage: `url(${isoPaper})`,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
    backgroundColor: 'white',
    minHeight: 'calc(100vh - 212px)',
    [theme.breakpoints.down('xs')]: {
      marginTop: theme.spacing(6),
    },
    [theme.breakpoints.up('sm')]: {
      marginTop: theme.spacing(8),
    },
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
    display: 'flex',
    flexDirection: 'column',
    position: 'relative',
    [theme.breakpoints.down('xs')]: {
      marginTop: theme.spacing(5),
      marginBottom: theme.spacing(2),
    },
    [theme.breakpoints.up('sm')]: {
      marginTop: theme.spacing(10),
      marginBottom: theme.spacing(4),
    },
  },
  titleText: {
    fontWeight: 600,
    [theme.breakpoints.down('xs')]: {
      fontSize: '1.25rem',
      marginBottom: theme.spacing(1)
    },
    [theme.breakpoints.up('sm')]: {
      fontSize: '1.5rem',
      marginBottom: theme.spacing(2)
    },
  },
  text: {
    fontWeight: 400,
    [theme.breakpoints.down('xs')]: {
      fontSize: '1.0rem',
      marginBottom: theme.spacing(1)
    },
    [theme.breakpoints.up('sm')]: {
      fontSize: '1.0rem',
      marginBottom: theme.spacing(2)
    },
  },
  textField: {
    background: "rgb(255, 255, 255)",
  },
  footer: {
    position: 'relative',
    left: 0,
    bottom: 0,
  }
})


function ContactPage(props) {
  const { classes } = props;

  const [error, setError] = useState(false);
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [formIsValid, setFormIsValid] = useState(false);
  const [contactForm, setContactForm] = useState({
    name: {
      value: '',
      elementConfig: {
        required: true,
        id: 'standard-basic',
        label: 'Your Name',
      },
      validation: {
        required: true,
        errorMessage: 'Please enter your name',
      },
      valid: false,
      blur: false,
    },

    email: {
      value: '',
      elementConfig: {
        required: true,
        id: 'standard-basic',
        label: 'Your Email',
      },
      validation: {
        required: true,
        isEmail: true,
        errorMessage: 'Please enter your email',
      },
      valid: false,
      blur: false,
    },

    message: {
      value: '',
      elementConfig: {
        required: true,
        id: 'standard-multiline-static',
        label: 'Your Message',
        multiline: true,
        rows: 4,
      },
      validation: {
        required: true,
        errorMessage: 'Please enter your message',
      },
      valid: false,
      blur: false,
    },

    //this honeypot field isn't rendered to the DOM, so users don't see it, but it fools bots that fill it automatically
    honeypot: {
      value: '',
      elementConfig: {
        className: classes.honeypot,
        label:
          'If you are a human, do not type anything here. I am here to fool bots',
      },
      //This `validation` property is added just to avoid and error when running checkValidity();
      validation: {},
      //this input is valid by default so it doesn't prevent human users to click the `Send` button
      valid: true,
      blur: false,
    },
  });

  //convert the `contactForm` object into an array
  const formElementsArray = [];
  for (let key in contactForm) {
    formElementsArray.push({
      id: key,
      ...contactForm[key],
    });
  }

  //map the array to return an array of JSX elements
  const formElements = formElementsArray.map((element) => {
    return (
      <Box key={element.id}>
        <TextField
          {...element.elementConfig}
          error={!element.valid && element.blur}
          helperText={
            !element.valid && element.blur
              ? element.validation.errorMessage
              : null
          }
          onChange={(event) => inputChangedHandler(event, element.id)}
          onBlur={(event) => inputChangedHandler(event, element.id)}
          value={element.value}
          variant="filled"
          InputProps= {{className: classes.textField}}
          fullWidth
        ></TextField>
      </Box>
    );
  });

  //this function runs when an input changes or is blurred
  const inputChangedHandler = (event, inputIdentifier) => {
    //create a new object representing the input that was changed or blurred
    const updatedFormElement = {
      ...contactForm[inputIdentifier],
      value: event.target.value,
      valid: checkValidity(
        event.target.value,
        contactForm[inputIdentifier].validation
      ),
      blur: event.type === 'blur' ? true : false,
      touched: true,
    };

    //create a new object represeting the whole form object
    const updatedContactForm = {
      ...contactForm,
      [inputIdentifier]: updatedFormElement,
    };

    //the whole form is valid until it's not
    let formIsValid = true;
    for (let inputElementIdentifier in updatedContactForm) {
      formIsValid =
        updatedContactForm[inputElementIdentifier].valid && formIsValid;
    }

    //update `contactForm` state
    setContactForm(updatedContactForm);

    //update `formIsValid` state
    setFormIsValid(formIsValid);
  };

  //this function is called from inside `inputChangedHandler()`, and checks the validity of an input field
  const checkValidity = (value, rules) => {
    //it's always true until there's one false in the way
    let isValid = true;
    if (rules.required) {
      //value.trim() gets rid of white spaces
      isValid = value.trim() !== '' && isValid;
    }

    if (rules.isEmail) {
      //the `pattern` constant is a Regular Expression that matches the shape of an email
      const pattern = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;

      //`pattern.test()` returns true or false
      isValid = pattern.test(value) && isValid;
    }

    return isValid;
  };

  //this function is called when the user closes the snackbar after getting an error (when the cloud function fails)
  const closeSnackbar = () => {
    setOpenSnackbar(false);
  };

  //this function is called when clicking the `Send` button
  const submitForm = () => {
    //if a bot filled the honeypot field, don't keep running code (e.g don't call a cloud function)
    if (contactForm.honeypot.value !== '') {
      //the below `return` is called an `early return` and it ends the execution of the function.
      return;
    }

    //set `isLoading` state to true, so the spinner is rendered
    setIsLoading(true);

    const serviceId = process.env.REACT_APP_EMAILJS_SERVICE_ID;
    const templateId = process.env.REACT_APP_EMAILJS_TEMPLATE_ID;
    const userId = process.env.REACT_APP_EMAILJS_USER_ID;
    const templateParams = {
      name: contactForm.name.value,
      email: contactForm.email.value,
      message: contactForm.message.value
    };

    emailjs.send(serviceId, templateId, templateParams, userId)
      //the code inside the `then()` block runs when the message was successfully sent from inside the cloud function
      .then(() => {
        //create a new `contactForm` object that looks like the original `contactForm` state
        let originalContactForm = {};
        for (let key in contactForm) {
          originalContactForm[key] = {
            ...contactForm[key],
            value: '',
            valid: key === 'honeypot' ? true : false,
            blur: false,
          };
        }

        //reset `contactForm` state to its original value
        setContactForm(originalContactForm);

        //reset the whole form validity to false
        setFormIsValid(false);

        //set `error` state to false.
        setError(false);

        //set `isLoading` state to false, so the spinner is not rendered anymore
        setIsLoading(false);

        //set `openSnackbar` state to true, so the snackbar is rendered, with content that depends on the error state
        setOpenSnackbar(true);
      })
      //this code below runs when the message was NOT successfully sent from inside of the cloud function
      .catch(() => {
        //set `error` state to true
        setError(true);

        //set `isLoading` state to false, so the spinner is not rendered anymore
        setIsLoading(false);

        //set `openSnackbar` state to true, so the snackbar is rendered, with content that depends on the error state
        setOpenSnackbar(true);
      });
  };
  
  return (
    <React.Fragment>
      <div className={classes.mainContent}>
        <AppBar />
        <section className={classes.root} >
          <div className={classes.overlay} />
          <Container className={classes.container}>
            <Grid container justify="center" spacing={5}>
              <Grid item xs={12} md={4}>
                <Typography variant="h6" className={classes.titleText}>Send me a message</Typography>
                <Typography variant="h6" className={classes.text}>Feedback, comments, and suggestions on what I could build next are welcome!</Typography>
                <Typography variant="h6" className={classes.text}>You can also follow me on <a href="https://www.youtube.com/channel/UC8LFt8UC7rqnKA0NiF0IBjw/videos" target="_blank" rel="noreferrer">YouTube</a>, <a href="https://www.linkedin.com/in/lee-ping-ng/" target="_blank" rel="noreferrer">LinkedIn</a> or <a href="https://github.com/leeping-ng" target="_blank" rel="noreferrer">GitHub</a>.</Typography>
              </Grid>
              <Grid item xs={12} md={8}>
                  {formElements}
              </Grid>
              <Grid item>
                <Box>
                  {isLoading ? (
                    <CircularProgress />
                  ) : (
                    <Button
                      onClick={submitForm}
                      disabled={!formIsValid}
                      variant="contained"
                      color="primary"
                    >
                      Send
                    </Button>
                  )}
                </Box>
              </Grid> 
            </Grid>
            {error ? (
              <Snackbar
                open={openSnackbar}
                onClose={closeSnackbar}
                anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
              >
                <Alert onClose={closeSnackbar} severity="error">
                  Oops! Something went wrong, try again later.
                </Alert>
              </Snackbar>
            ) : (
              <Snackbar
                open={openSnackbar}
                autoHideDuration={2000}
                onClose={closeSnackbar}
                anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
              >
                <Alert severity="success">Message sent!</Alert>
              </Snackbar>
            )}
          </Container>
        </section>
      </div>
      <div className={classes.footer}>
        <Footer />
      </div>
    </React.Fragment>

  );
}

export default withStyles(styles)(ContactPage);