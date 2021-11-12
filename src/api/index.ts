import axios from "axios";

const API_KEY = "k_c9t2cjbh";

export const search = async (inputValue: string) => {
  const URL = `https://imdb-api.com/en/API/SearchMovie/${API_KEY}/${inputValue}`;
  const { data } = await axios.get(URL);
  return data;
};
