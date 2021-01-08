import React,{useState} from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Main from './Main'



const useStyles = makeStyles((theme) => ({
  root: {
    height: '95vh',
    //width: '100vh',
  },
  image: {
    backgroundImage: 'url(https://cdn57.androidauthority.net/wp-content/uploads/2019/01/Calcu-screenshot-2019.jpg)',
    backgroundRepeat: 'no-repeat',
    backgroundColor:
      theme.palette.type === 'light' ? theme.palette.grey[50] : theme.palette.grey[900],
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    
  },
  paper: {
    margin: theme.spacing(8, 4),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '60%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));
   
export default function SignInSide() {
  const classes = useStyles();
  const [fullname,setFullname]=useState('')
  const[email, setEmail]=useState('')
  const[password, setPassword]=useState('')
  const[LoggedIn, setLoggedIn]=useState(false)
  const handleFullname = (event)=>{
    setFullname(event.target.value)
  }
  const handleEmail = (event)=>{
    setEmail(event.target.value)
  }
  const handlePassword = (event) =>{
    setPassword(event.target.value)
  }
  function handleButton(event){
    event.preventDefault();
    if(fullname=== "Bless Akotey" && email=== "bakotey001@st.ug.edu.gh" && password==="10687046"){
      setLoggedIn(true)
    }
    else{
      alert("Invalid credentials")
    }
  }

  return (
    <div >
            {LoggedIn?
            <>
            <Main/>
            </>
            :
            <Grid container component="main" className={classes.root}>
           <CssBaseline />
          <Grid item xs={false} sm={4} md={7} className={classes.image} />
           <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
    <>    
          <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign Up
          </Typography>
          <form className={classes.form} noValidate>
            <TextField
              variant="outlined"
              onChange={handleFullname}
              margin="normal"
              required
              fullWidth
              id="fullname"
              label="FullName"
              name="email"
              autoComplete="email"
              autoFocus
            />
            <TextField
              variant="outlined"
              onChange={handleEmail}
              margin="normal"
              required
              fullWidth
              name="password"
              label="Email Address"
              type="email"
              id="email"
              autoComplete="email"
              autoFocus
            />
             <TextField
              variant="outlined"
              onChange={handlePassword}
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              type="submit"
              onClick={handleButton}
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              Sign up
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
            </Grid>
           </form>
          </div>
         
        </>
      </Grid>
    </Grid>}
    </div>
  );
}