import axios from "axios";

const BASEURL = "https://api.ipify.org";


export default {
    search: function(query) {
      return axios.get(BASEURL);
    }
  };
  