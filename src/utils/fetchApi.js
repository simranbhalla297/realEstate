import axios from "axios";
export const baseUrl = "https://bayut.p.rapidapi.com";

export const fetchApi = async (url) => {
  const { data } = await axios.get(url, {
    headers: {
      "X-RapidAPI-Key": "c6607d2cdcmshdc1c736394ab780p1f8acfjsnf510d166deef",
      "X-RapidAPI-Host": "bayut.p.rapidapi.com",
    },
  });
  return data;
};
