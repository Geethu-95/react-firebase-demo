import { useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
import { auth } from "./firebaseConfig";
import { Button, TextField } from "@mui/material";
// import Snackbar from '@mui/material/Snackbar';
// import IconButton from '@mui/material/IconButton';
// import { useDispatch, useSelector } from "react-redux";
// import CloseIcon from '@mui/icons-material/Close';
// import CheckCircleIcon from '@mui/icons-material/CheckCircle';
// import { showSuccessSnackbar, clearSnackbar } from "./actions/snackbarActions";
import LoginSnackbar from "./LoginSnackbar";
import Toast from 'react-bootstrap/Toast';
import ToastHeader from 'react-bootstrap/ToastHeader'
import ToastBody from 'react-bootstrap/ToastBody'

// import close from './close.png'

export default function LoginUser() {

  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");

  const [user, setUser] = useState({});

  const [showA, setShowA] = useState(false);
  const [showB, setShowB] = useState(false);

  const toggleShowA = () => setShowA(!showA);
  const toggleShowB = () => setShowB(!showB);

  onAuthStateChanged(auth, (currentUser) => {
    setUser(currentUser);
  });

  
  const login = async () => {
    try {
      const user = await signInWithEmailAndPassword(
        auth,
        loginEmail,
        loginPassword
      );
      
      console.log(user);
    } catch (error) {
      console.log(error.message);
    }
    finally {
      toggleShowA();
    }
  };

  const logout = async () => {
    await signOut(auth);
  };
  
// useEffect = (() => {
//   dispatch(showSuccessSnackbar("Success!"));
// },[])

 
  // function handleClose() {
  //   dispatch(clearSnackbar());
  // }
    return(

        <div>

       
          {user!=null? (
            <>
            <span>
              <h4> User Logged In: </h4>
              {user?.email}
            </span>
            <br /><br />
            <Button style={{ backgroundColor: 'orange', color: 'white' }} onClick={logout}> Sign Out </Button>
            
            <div>
            <Toast show={showA} onClose={toggleShowA} position="bottom-end" delay={3000} autohide>
          <ToastHeader>
            {/* <img
              src="holder.js/20x20?text=%20"
              className="rounded me-2"
              alt=""
            /> */}
            <strong className="me-auto">LOGIN SUCCESSFULL</strong>
            {/* <small>11 mins ago</small> */}
          </ToastHeader>
          <ToastBody>User logged in successfully!</ToastBody>
        </Toast>
            </div>
             {/* <LoginSnackbar /> */}

            </>
          ): (
            <>
              <h3> Login </h3>
              <TextField
                placeholder="Email..."
                onChange={(event) => {
                  setLoginEmail(event.target.value);
                }}
              />
              <br /> <br />
              <TextField
                placeholder="Password..."
                onChange={(event) => {
                  setLoginPassword(event.target.value);
                }}
              />

              <br /> <br />
              <Button variant="contained" color="secondary" onClick={login}> Login</Button>
            </>
          )}
</div>

    )
}