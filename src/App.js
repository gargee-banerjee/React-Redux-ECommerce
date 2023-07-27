import { BrowserRouter, Routes, Route } from "react-router-dom";
import React, { useEffect } from "react";

//Pages imports
import { Home, Admin, SignIn, Register, Reset, Cart,Confirmation } from "./pages";
import { Footer, Header, ProductList, Loader, Padder } from "./components";

import commerce from "./lib/Commerce";
//redux imports
import { useDispatch } from "react-redux";
import { productActions } from "./redux/ProductSlice";
import { cartActions } from "./redux/CartSlice";
import { ToastContainer } from "react-toastify";
import ProductDisplay from "components/products/productDisplay/ProductDisplay";
import Checkout from "pages/checkout/Checkout";
import {getData} from "redux/cart-actions";

function App() {
  const dispatch = useDispatch();

  const getData = async () => {
    const { data } = await commerce.products.list();
    // console.log(data);
    dispatch(productActions.refreshProduct({ data }));
  };

  const getCart = async () => {
    const cart = await commerce.cart.retrieve();
    dispatch(cartActions.refreshCart({ cart }));
  };
  useEffect(() => {
    // dispatch(getData())
    getData();
    getCart();
  }, []);

  return (
    <>
      <BrowserRouter>
        <ToastContainer />
        <Header />
        <Padder />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/signin" element={<SignIn />}></Route>
          <Route path="/register" element={<Register />}></Route>
          <Route path="/reset" element={<Reset />}></Route>
          <Route path="/products" element={<ProductList />}></Route>
          <Route
            path="/products/:productId" 
            element={<ProductDisplay />}
          ></Route>
          <Route path="/shoppingbag" element={<Cart />}></Route>
          <Route path="/checkout" element={<Checkout />}></Route>
          <Route path="/confirmationPage" element={<Confirmation />}></Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
