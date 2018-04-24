import axios from "axios";

const BASEURL = "https://dog.ceo/api/breeds/list/all";

// Export an object with a "search" method that searches the Giphy API for the passed query
export default {
  search: function() {
    return axios.get(BASEURL);
  }
};
