import { GET_API_PHONE } from "../Constants/PhoneConstants";
import axios from "axios";

export const getApiListPhone = () => {
  return (dispatch) => {
    const promise = axios({
      method: "GET",
      url: "http://localhost:3001/Phone",
    }).then((res) => {
      dispatch({
        type: GET_API_PHONE,
        phones: res.data,
      });
    });
  };
};
