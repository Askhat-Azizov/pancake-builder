import axios from "axios";

const instance = axios.create();
instance.defaults.baseURL = "https://pancake-builder.firebaseio.com";

export default instance;
