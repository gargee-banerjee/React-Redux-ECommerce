import { Divider, Typography } from "@material-ui/core";
import React from "react";
import useStyles from "./filterStyle";

const FilterComp = (props) => {
  const { categoryName, categoryItems } = props.filterCategory;
  const classes = useStyles();
  return (
    <div className={classes["filterSectionContainer"]}>
      <Typography variant="h4">{categoryName}</Typography>
      <ul className={classes.categoryItems}>
        {categoryItems.map((item) => (
          <li>
            <input type="checkbox" value={item} />
            <span>{item}</span>
          </li>
        ))}
      </ul>
      <Divider />
    </div>
  );
};

export default FilterComp;
