import { Button, Divider, Typography } from "@material-ui/core";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { productActions } from "redux/ProductSlice";

const PaginationComp = ({ classes }) => {
  const dispatch = useDispatch();
  const currentPage = useSelector((state) => state.product.currentPage);
  const products = useSelector((state) => state.product.products);
  const productsPerPage = useSelector((state) => state.product.productsPerpage);
  const totalpages = Math.ceil(products.length / productsPerPage);
  const pages = [...Array(totalpages + 1).keys()].slice(1);

  const handleNavigateNext = () => {
    if (currentPage !== totalpages) dispatch(productActions.onNavigateNext());
  };
  const handleNavigatePrevious = () => {
    if (currentPage !== 1) dispatch(productActions.onNavigatePrevious());
  };

  const handleCurrentPage = (e) => {
    dispatch(
      productActions.onClickCurrentpage({ currentPage: +e.target.textContent })
    );
  };
  return (
    <div className={classes.paginationOuterContainer}>
      <Divider />
      <div className={classes.paginationContainer}>
        <div className={classes.paginationInfo}>
          <Typography variant="h5">
            Pages {currentPage} of {totalpages}
          </Typography>
        </div>
        <div className={classes.paginationButtons}>
          <Button variant="contained" onClick={handleNavigatePrevious}>
            Previous
          </Button>
          <div className={classes.pagesContainer}>
            {pages.map((page) => (
              <span className={classes.pages} onClick={handleCurrentPage}>
                {page}
              </span>
            ))}
          </div>
          <Button variant="contained" onClick={handleNavigateNext}>
            Next
          </Button>
        </div>
      </div>
    </div>
  );
};

export default PaginationComp;
