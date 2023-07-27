import React from "react";
import SearchIcon from "@material-ui/icons/Search";
import { InputBase } from "@material-ui/core";
import { useDispatch } from "react-redux";
import { productActions } from "redux/ProductSlice";
import { useLocation } from "react-router-dom";

const SearchComp = ({ classes }) => {
  const dispatch = useDispatch();
  const { pathname } = useLocation();

  const handleSearchChange = (event) => {
    dispatch(
      productActions.filterProductItems({ searchTerm: event.target.value })
    );
  };

  return (
    <>
      {pathname.includes("/products") && (
        <div className={classes.search}>
          <div className={classes.searchIcon}>
            <SearchIcon fontSize="large" />
          </div>
          <InputBase
            onChange={handleSearchChange}
            placeholder="Search products"
            className={classes.searchInput}
            inputProps={{ "aria-label": "search" }}
          />
        </div>
      )}
    </>
  );
};

export default SearchComp;
