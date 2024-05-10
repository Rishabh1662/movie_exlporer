import axios from "axios";

const BASE_URL = "https://api.themoviedb.org/3";
const TMDB_TOKEN =
  "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2YzEyOTRmZjExNWRhOWVhZTk2ODI1MjYxMzZmMGM3ZSIsInN1YiI6IjY1YWU4ZmIxYmQ1ODhiMDEwYjVkNzk2YiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.bobDun99PpR9HWrxXyWYljtng7trdAwVFvuw8FqBgfg";

const headers = {
  Authorization: "bearer " + TMDB_TOKEN,
};

export const fetchDataFromApi = async (url, params) => {
  try {
    const { data } = await axios.get(BASE_URL + url, {
      headers,
      params,
    });
    return data;
  } catch (err) {
    console.log(err);
    return err;
  }
};
