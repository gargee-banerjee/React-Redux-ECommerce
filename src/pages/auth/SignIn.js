import {
  GoogleAuthProvider,
  signInWithPopup,
  signInWithEmailAndPassword,
} from "firebase/auth";

import React, { useState } from "react";
import useStyles from "./style";
import { FaGoogle } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { Card } from "@material-ui/core";
import { auth } from "../../firebase/config";
import { toast } from "react-toastify";
import { Loader } from "components";
import ModalComponent from "components/ui-components/ModalComponent";
import CancelComp from "./CancelComp";

const SignIn = () => {
  const classes = useStyles();
  const [email, setEmail] = useState("");
  const [password, setPasssword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };
  const handlePassword = (e) => {
    setPasssword(e.target.value);
  };

  const handleSignInForm = (e) => {
    e.preventDefault();
    console.log(email, password);
    setIsLoading(true);
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        setIsLoading(false);
        toast.success("User logged in successfully");
        navigate("/home");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setIsLoading(false);
        toast.error(errorMessage);
      });
  };

  //Sign in via google
  const provider = new GoogleAuthProvider();
  const handleSigninViaGoogle = (e) => {
    signInWithPopup(auth, provider)
      .then((result) => {
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        const user = result.user;
        toast.success("User logged in successfully");
        navigate("/home");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        const email = error.customData.email;
        const credential = GoogleAuthProvider.credentialFromError(error);
        toast.error(errorMessage);
      });
  };

  return (
    <ModalComponent>
      {isLoading && <Loader />}
      <Card className={classes.signInContainer}>
      <CancelComp />
        <h1>Login</h1>
        <form className={classes.formContainer} onSubmit={handleSignInForm}>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={handleEmail}
            required
          ></input>
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={handlePassword}
            required
          ></input>
          <button type="submit">Login</button>
        </form>
        <Link to="/reset" className={classes.forgotPassword}>
          Forgot Password
        </Link>
        <div>--or--</div>
        <div className={classes.googleLogin} onClick={handleSigninViaGoogle}>
          <FaGoogle /> Login with Google
        </div>
        <div>
          Dont have an accoount?
          <Link to="/register" className={classes.boldLink}>
            {" "}
            Register
          </Link>
        </div>
      </Card>
    </ModalComponent>
  );
};

export default SignIn;
