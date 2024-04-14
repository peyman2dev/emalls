import axios from "axios";

export default function getProduct(productID) {
  return axios
    .get(`https://api.digikala.com/v2/product/${productID}/`)
    .then((response) => response.data)
    .then((resolve) => resolve);
}
