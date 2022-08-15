import axios from "axios"

const fetchData = async (ip) => {
  const URL = ip ? `/api?IP=${ip}` : '/api';
  const response = await axios.get(URL);
  return response.data;
}

fetchData().then((data) => {
  console.log(data);
})