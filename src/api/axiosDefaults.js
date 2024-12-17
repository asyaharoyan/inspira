import axios from "axios";

axios.defaults.baseURL = 'https://inspira-api-bc9117602418.herokuapp.com/';
axios.defaults.headers.post['Content-Type'] = 'multipart/form-data';
axios.defaults.withCredentials = true;

export const axiosReq = axios.create();
export const axiosRes = axios.create();