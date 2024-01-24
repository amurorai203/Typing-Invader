import axios from "axios";

const BASEURL = "https://random-word-api.vercel.app/api?";

export default {
  search: function(query) {
    return axios.get(BASEURL + query);
  }
};


