import { useState } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
import { auth } from "./firebaseConfig";
import { Button, TextField } from "@mui/material";

export default function RegisterUser()  {

    const [registerEmail, setRegisterEmail] = useState("");
    const [registerPassword, setRegisterPassword] = useState("");

    const register = async () => {
      // console.log(auth,registerEmail, registerPassword);
        try {
          const user = await createUserWithEmailAndPassword(
            auth,
            registerEmail,
            registerPassword
          );
          console.log(user);
        } catch (error) {
          console.log(error.message);
        }
      };


    return(

        <>
        <h3> Register User </h3>
        <TextField
          placeholder="Email..."
          onChange={(event) => {
            setRegisterEmail(event.target.value);
          }}
        />
        <br/> <br/>
        <TextField
          placeholder="Password..."
          onChange={(event) => {
            setRegisterPassword(event.target.value);
          }}
        />
<br/> <br/>
        <Button variant="contained" color="secondary" onClick={register}> Create User</Button>
      
        </>
    )
}
