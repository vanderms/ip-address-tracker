import axios from "axios"

const fetchData = async (ip = '') => {
  const response = await axios.get(`/api?IP=${ip}`);
  return response.data;
}

fetchData().then((data) => {
  console.log(data);
})