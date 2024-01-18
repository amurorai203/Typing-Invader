import axios from "axios";

const BASEURL = "https://random-word-api.vercel.app/api?";
// const APIKEY = "&api_key=[place-api-key-here]&limit=20";

// Export an object with a "search" method that searches the Giphy API for the passed query
export default {
  search: function(query) {
    return axios.get(BASEURL + query);
  }
};

