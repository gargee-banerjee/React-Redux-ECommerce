import React from 'react'
import useStyles from './padderStyle';

const Padder = () => {
    const classes = useStyles();
  return (
    <div className={classes.padder}></div>
  )
}

export default Padder