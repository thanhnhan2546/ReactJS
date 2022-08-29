import { GET_API_PHONE } from "../Constants/PhoneConstants";

export const getApiListPhone = (phones) => ({
  type: GET_API_PHONE,
  phones,
});
