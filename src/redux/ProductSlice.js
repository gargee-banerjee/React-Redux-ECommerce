const { createSlice } = require("@reduxjs/toolkit");

const productSlice = createSlice({
  name: "product",
  initialState: {
    products: [],
    searchTerm: "",
    productsPerpage: 8,
    currentPage: 1,
  },
  reducers: {
    refreshProduct: (state, action) => {
      state.products = action.payload.data;
    },
    filterProductItems(state, action) {
      state.searchTerm = action.payload.searchTerm;
    },
    onNavigateNext(state) {
      state.currentPage++;
    },
    onNavigatePrevious(state) {
      state.currentPage--;
    },
    onProducPerpage(state, action) {
      state.productsPerpage = action.payload.productsPerpage;
    },
    onClickCurrentpage(state, action) {
      state.currentPage = action.payload.currentPage;
    },
  },
});

export const productActions = productSlice.actions;
export default productSlice.reducer;
