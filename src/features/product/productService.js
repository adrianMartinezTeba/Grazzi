import axios from "axios";

const API_URL = "";
const apiLocal = "http://localhost:3000";
const getProducts = async () => {
    const res = await axios.get(`${apiLocal}/products/all`);
   
    return res.data;
};
const productService = {

getProducts

};

export default productService;