import axios from "axios";

const setAuthToken = token => {
  if (token) {
    axios.defaults.headers.common['Authorization'] = `Bearer`
  }
}

export default setAuthToken