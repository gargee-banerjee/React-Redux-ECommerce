import React, { useState } from "react";
import { sendPasswordResetEmail } from "firebase/auth";
import useStyles from "./style";
import { Link } from "react-router-dom";
import { Card } from "@material-ui/core";
import { auth } from "../../firebase/config";
import ModalComponent from "components/ui-components/ModalComponent";
import { toast } from "react-toastify";
import { Loader } from "components";
import CancelComp from "./CancelComp";

const Reset = () => {
  const classes = useStyles();
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleResetPasswordForm = (e) => {
    e.preventDefault();
    setIsLoading(true);
    sendPasswordResetEmail(auth, email)
      .then(() => {
        setIsLoading(false);
        toast.success("Check your email for further instructions");
      })
      .catch((error) => {
        setIsLoading(false);
        toast.error(error.message);
      });
  };

  return (
    <ModalComponent>
      {isLoading && <Loader />}

      <Card className={classes.signInContainer}>
        <CancelComp />
        <h1>Reset Password</h1>
        <form
          className={classes.formContainer}
          onSubmit={handleResetPasswordForm}
        >
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={handleEmailChange}
          ></input>
          <button type="submit">Reset Password</button>
        </form>

        <div className={classes.resetButtonContainer}>
          <Link to="/signin"> - Login</Link>
          <Link to="/register"> - Register</Link>
        </div>
      </Card>
    </ModalComponent>
  );
};

export default Reset;
