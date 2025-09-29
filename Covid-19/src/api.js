import axios from "axios";

const API_URL = "http://127.0.0.1:8000/api";

export const fetchGlobal = async () => {
  const { data } = await axios.get(`${API_URL}/global/`);
  return data;
};

export const fetchCountry = async (country) => {
  const { data } = await axios.get(`${API_URL}/country/${country}/`);
  return data;
};

export const fetchChart = async () => {
  const { data } = await axios.get(`${API_URL}/chart/`);
  return data.chart_url;
};
