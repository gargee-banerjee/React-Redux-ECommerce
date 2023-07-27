import { Button, TextField } from "@material-ui/core";
import React, { useRef } from "react";
import useStyles from "./style";
import commerce from "../../lib/Commerce";

import emailjs from "@emailjs/browser";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { cartActions } from "redux/CartSlice";
import Loader from "components/loader/Loader";

const Confirmation = () => {
  const classes = useStyles();
  const form = useRef();
  const [isLoading, setIsLoading] = React.useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const emptyCart = async () => {
    const cart = await commerce.cart.empty();
    dispatch(cartActions.refreshCart({ cart }));
  };
  const sendEmail = (e) => {
    e.preventDefault();
    setIsLoading(true);

    emailjs
      .sendForm(
        "service_p48guv9",
        "template_8wnda6f",
        form.current,
        "eV4gVgy561W2MuQ8_"
      )
      .then(
        (result) => {
          emptyCart();
          navigate("/");
          setIsLoading(false);
          toast.success("Order placed successfuly", {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
          });
        },
        (error) => {
          setIsLoading(false);
          toast.error("Order could not be placed", {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
          });
          console.log(error.text);
        }
      );
  };
  return (
    <>
      {isLoading && <Loader />}
      <div className={classes.confirmationContainer}>
        <form ref={form} onSubmit={sendEmail}>
          <div className={classes.confirmationInnerContainer}>
            <TextField
              required
              id="email"
              name="userEmail"
              label="Email"
              variant="outlined"
              className={classes.emailField}
            />
            <Button
              variant="contained"
              className={classes.placeOrderButton}
              type="submit"
            >
              Place Order
            </Button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Confirmation;
