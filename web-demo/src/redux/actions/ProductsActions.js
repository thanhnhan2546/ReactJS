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
        "X-RapidAPI-Key": "68e513472amsh48e987d8c1f1417p1b497ejsnf3f5adbfe802",
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
        "X-RapidAPI-Key": "68e513472amsh48e987d8c1f1417p1b497ejsnf3f5adbfe802",
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
