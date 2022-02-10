import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization: "Client-ID KGA14Q5W9Vl9lkvEv3lBcz9O_ktBQ1sSTpjQesb8i5M",
  },
});
