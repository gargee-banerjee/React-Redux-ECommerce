import { Button, TextField } from "@material-ui/core";
import React from "react";
import useStyles from "./checkoutStyle";

const AddressForm = (props) => {
  const classes = useStyles();
  const handleFormSubmit = (event) => {
    event.preventDefault();
    props.setIsAddressSaved(true);
  };
  return (
    <>
      <form className={classes.formContainer} onSubmit={handleFormSubmit}>
        <div className={classes.formFieldContainer}>
          <TextField
            required
            id="firstName"
            label="First Name"
            variant="outlined"
            className={classes.formFields}
          />
          <TextField
            required
            id="lastName"
            label="Last Name"
            variant="outlined"
            className={classes.formFields}
          />
          <TextField
            required
            id="address1"
            label="Address"
            variant="outlined"
            className={`${classes.fullWidthField} ${classes.formFields}`}
          />
          <TextField
            id="address1"
            label="Address line 2"
            variant="outlined"
            className={`${classes.fullWidthField} ${classes.formFields}`}
          />
          <TextField
            required
            id="town"
            label="Town/City"
            variant="outlined"
            className={classes.formFields}
          />
          <TextField
            required
            id="pincode"
            label="PinCode"
            variant="outlined"
            className={classes.formFields}
          />
          <TextField
            required
            id="contact"
            label="Phone Number"
            type="number"
            variant="outlined"
            className={`${classes.fullWidthField} ${classes.formFields}`}
          />
          <Button
          type="submit"
            variant="contained"
            className={`${classes.fullWidthField} ${classes.saveAddressButton}`}
          >
            Save Address
          </Button>
        </div>
      </form>
    </>
  );
};

export default AddressForm;
