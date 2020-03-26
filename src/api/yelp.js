import axios from "axios";

export default axios.create({
  baseURL: "https://api.yelp.com/v3/businesses",
  headers: {
    Authorization:
      "Bearer 9v7LF2e5PB4UFhldPwvbBTN0ZkBYE7Hx1X6zyZlVTXnmpkkReZCM6HVWdqCgUy3PpoUHokVIA03mIbYk1u6kBWTN0tPmRHklG82JdBTX_B5FSw7Zh7Iv469wT35qXnYx"
  }
});
