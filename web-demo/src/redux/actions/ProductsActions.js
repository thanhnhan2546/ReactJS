import axios from "axios";
import {
  GET_API_PRODUCTS,
  GET_DETAIL_PRODUCT,
} from "../constants/ProdutsConstants";

export const getProductsAPI = () => {
  return (dispatch) => {
    let promise = axios({
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
        "X-RapidAPI-Key": "803c27b396msh8725bb83ccaac69p1bf111jsn1f2bd72d5085",
        "X-RapidAPI-Host": "apidojo-hm-hennes-mauritz-v1.p.rapidapi.com",
      },
    });

    promise
      .then((res) => {
        // console.log(res.data.results);
        dispatch({
          type: GET_API_PRODUCTS,
          ProductList: res.data.results,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

export const getDetailProduct = (props) => {
  return (dispatch) => {
    let promise = axios({
      method: "GET",
      url: "https://apidojo-hm-hennes-mauritz-v1.p.rapidapi.com/products/detail",
      params: { lang: "en", productcode: props.idProduct, country: "us" },
      headers: {
        "X-RapidAPI-Key": "b4a4eb0cbfmsh2d7a9077a2df08dp1f45eajsna84090971686",
        "X-RapidAPI-Host": "apidojo-hm-hennes-mauritz-v1.p.rapidapi.com",
      },
    });

    promise
      .then((res) => {
        dispatch({
          type: GET_DETAIL_PRODUCT,
          ProductDetail: res.data.product,
          images: props.img,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };
};
