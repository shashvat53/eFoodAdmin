import axios from "axios";
// const onlinServer = process.env.REACT_APP_SERVER_BACKEND

const instance = axios.create({
    baseURL:'https://server1.capriglobals.com',
    headers: {
        'Content-Type': 'application/json',
      },
    // withCredential:true
})

export default instance