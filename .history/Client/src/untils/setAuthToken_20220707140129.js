import axios from "axios";

const setAuthToken = token => {
  if (token) {
    axios.defaults.headers.common['Authorization'] = `B`
  }
}

export default setAuthToken