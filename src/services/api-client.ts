import axios from "axios";

export default axios.create({
    baseURL: "https://api.rawg.io/api",
    params: {
        key: "d5e39c6eb7f74d318915211465cccd92"
    }
})