import { createUserWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import useStyles from "./style";
import { Link } from "react-router-dom";
import { Card } from "@material-ui/core";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { auth } from "../../firebase/config";
import { Loader } from "components";
import { useNavigate } from "react-router-dom";
import ModalComponent from "components/ui-components/ModalComponent";

import CancelComp from "./CancelComp";

const Register = () => {
  const classes = useStyles();
  const [email, setEmail] = useState("");
  const [password, setPasssword] = useState("");
  const [cPassword, setCPasssword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };
  const handlePassword = (e) => {
    setPasssword(e.target.value);
  };
  const handleConfirmPassword = (e) => {
    setCPasssword(e.target.value);
  };
  const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log(email, password);
    if (password !== cPassword) {
      toast.error("Passwords do not match");
    }
    setIsLoading(true);
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        setIsLoading(false);
        toast.success("User created successfully");
        navigate("/signin");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setIsLoading(false);
        toast.error(errorMessage);
      });
  };

  return (
    <ModalComponent>
      {isLoading && <Loader />}
      <Card className={classes.signInContainer}>
        <CancelComp />
        <h1>Register</h1>
        <form className={classes.formContainer} onSubmit={handleFormSubmit}>
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
          <input
            type="password"
            placeholder="Confirm Password"
            value={cPassword}
            onChange={handleConfirmPassword}
            required
          ></input>
          <button type="submit">Register</button>
        </form>

        <div>
          Already have an accoount?
          <Link to="/signin" className={classes.boldLink}>
            {" "}
            Login
          </Link>
        </div>
      </Card>
    </ModalComponent>
  );
};

export default Register;
