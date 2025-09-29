import axios from "axios";

const url = "https://disease.sh/v3/covid-19/all";

export const fetchData = async () => {
  try {
    const { data } = await axios.get(url);
    return data;
  } catch (error) {
    console.error("Error fetching Covid data:", error);
    return {};
  }
};
