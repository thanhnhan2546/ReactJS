import { GET_API_PHONE } from "../Constants/PhoneConstants";

const initialState = {
  listPhone: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_API_PHONE:
      // console.log(action);
      state.listPhone = action.phones;
      return { ...state };

    default:
      return state;
  }
};
