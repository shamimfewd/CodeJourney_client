import axios from "axios";

const axiosPublic = axios.create({
  baseURL: "https://assignment12-server-inky.vercel.app",
});

const useAxiosPublic = () => {
  return axiosPublic;
};

export default useAxiosPublic;
