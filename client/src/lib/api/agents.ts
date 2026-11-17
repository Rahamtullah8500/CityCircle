import axios from "axios";
import { Store } from "../store/Store";

const agent = axios.create({ baseURL: import.meta.env.VITE_BASE_URL });

agent.interceptors.request.use(config => {
    Store.uiStore.isBusy();
    return config;
})

agent.interceptors.response.use(async res => {
    try {
        return res;
    }
    catch (err) {
        console.log("err at agenet res", err);
        return Promise.reject(err)
    }
    finally {
        Store.uiStore.isIdle();
    }
})
export default agent;
