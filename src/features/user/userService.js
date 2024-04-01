import axios from "axios";

const API_URL = "";
const apiLocal = "http://localhost:3000";
const getUsers = async () => {
    const res = await axios.get(`${apiLocal}/users/all`);
   
    return res.data;
};
const userService = {

getUsers

};

export default userService;