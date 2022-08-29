import {
  GET_API_PRODUCTS,
  GET_DETAIL_PRODUCT,
} from "../constants/ProdutsConstants";

const initialState = {
  ProductList: [],
  ProductDetail: {
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
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_API_PRODUCTS:
      state.ProductList = action.ProductList;
      return { ...state };
    case GET_DETAIL_PRODUCT:
      state.ProductDetail = { ...action.ProductDetail, images: action.images };
      return { ...state };
    default:
      return state;
  }
};
