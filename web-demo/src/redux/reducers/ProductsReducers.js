// import {
//   GET_API_PRODUCTS,
//   GET_DETAIL_PRODUCT,
// } from "../constants/ProdutsConstants";

import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

// const initialState = {
//   ProductList: [],
//   ProductDetail: {
//     whitePrice: {
//       price: "",
//     },
//     presentationTypes: "",
//     color: {
//       rgbColor: "",
//       text: "",
//     },
//     importedBy: "",
//   },
// };

// export default (state = initialState, action) => {
//   switch (action.type) {
//     case GET_API_PRODUCTS:
//       state.ProductList = action.ProductList;
//       return { ...state };
//     case GET_DETAIL_PRODUCT:
//       state.ProductDetail = { ...action.ProductDetail, images: action.images };
//       return { ...state };
//     default:
//       return state;
//   }
// };

const initialState = {
  product: {
    status: "",
    list: [],
  },
  productDetail: {
    whitePrice: {
      price: "",
    },
    presentationTypes: "",
    color: {
      rgbColor: "",
      text: "",
    },
    importedBy: "",
  },
  statusDetails: "",
};

export const ProductsReducers = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getProducts.pending, (state, action) => {
        console.log("abc");
        state.product.status = "loading";
      })
      .addCase(getProducts.fulfilled, (state, action) => {
        state.product.list = action.payload.results;
        state.product.status = "";
      })
      .addCase(getProducts.rejected, (state, action) => {
        console.log(action);
      })
      .addCase(getDetailProduct.pending, (state, action) => {
        state.statusDetails = "loading";
      })
      .addCase(getDetailProduct.fulfilled, (state, action) => {
        state.productDetail = { ...action.payload.data.product };
        state.statusDetails = "";
      });
  },
});

export const getProducts = createAsyncThunk("", async () => {
  // console.log("object");
  try {
    const res = await axios({
      method: "GET",
      url: "https://apidojo-hm-hennes-mauritz-v1.p.rapidapi.com/products/list",
      params: {
        country: "us",
        lang: "en",
        currentpage: "0",
        pagesize: "30",
        categories: "men_all",
        concepts: "H&M MAN",
      },
      headers: {
        "X-RapidAPI-Key": "68e513472amsh48e987d8c1f1417p1b497ejsnf3f5adbfe802",
        "X-RapidAPI-Host": "apidojo-hm-hennes-mauritz-v1.p.rapidapi.com",
      },
    });

    const data = await res.data;
    return data;
  } catch (error) {
    return error;
  }
});
export const getDetailProduct = createAsyncThunk(
  "product/detail",
  async (id) => {
    console.log(id);
    try {
      const promise = axios({
        method: "GET",
        url: "https://apidojo-hm-hennes-mauritz-v1.p.rapidapi.com/products/detail",
        params: { lang: "en", productcode: id, country: "us" },
        headers: {
          "X-RapidAPI-Key":
            "68e513472amsh48e987d8c1f1417p1b497ejsnf3f5adbfe802",
          "X-RapidAPI-Host": "apidojo-hm-hennes-mauritz-v1.p.rapidapi.com",
        },
      });
      // .then((res) => {
      //   console.log(res);
      // });

      const data = await promise;
      return data;
    } catch (err) {
      console.log(err);
    }
  }
);
