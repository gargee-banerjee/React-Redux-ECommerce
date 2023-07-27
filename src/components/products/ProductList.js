import React from "react";
import { Divider, Grid } from "@material-ui/core";
import Product from "./product/Product";
import useStyles from "./style";
import { useSelector } from "react-redux";
import FilterComp from "./filterSectionComp/FilterComp";
import PaginationComp from "./pagination/PaginationComp";

const filterCategory = {
  categoryName: "Categories",
  categoryItems: ["Jeans", "Dress", "Tshirts"],
};

const ProductList = () => {
  let products = useSelector((state) => state.product.products);
  const searchTerm = useSelector((state) => state.product.searchTerm);
  const productsPerPage = useSelector((state) => state.product.productsPerpage);
  const currentPage = useSelector((state) => state.product.currentPage);
  const classes = useStyles();
  // console.log(productsPerPage, currentPage);

  //Pagination
  const endingPageIndex = currentPage * productsPerPage;
  const startingPageIndex = endingPageIndex - productsPerPage;
  console.log(products.length);
  products = products.slice(startingPageIndex, endingPageIndex);

  //Search Functionality
  products = products.filter((item) => {
    return searchTerm.toLowerCase() === ""
      ? item
      : item.name.toLowerCase().includes(searchTerm.toLowerCase());
  });

  return (
    <div className={classes.produsctsPageContainer}>
      <section className={classes.filterSectionContainer}>
        <div className={classes.filterSection}>
          <FilterComp filterCategory={filterCategory}></FilterComp>
          <FilterComp filterCategory={filterCategory}></FilterComp>
          <FilterComp filterCategory={filterCategory}></FilterComp>
          <FilterComp filterCategory={filterCategory}></FilterComp>
        </div>
      </section>
      <div>
        <main className={classes.gridContainer}>
          {products.map((product) => (
            <Product key={products.id} product={product} />
          ))}
        </main>
        
        <PaginationComp classes={classes} />
      </div>
    </div>
  );
};

export default ProductList;
