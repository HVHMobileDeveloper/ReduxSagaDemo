import { BASE_URL } from "..";

const GET_PROFILE_API = () => {
    return fetch(BASE_URL)
        .then((response) => response.json())
        .then((result) => {
            return result;
        }).catch((error) => {
            console.log(`Get Profile Error: ${error}`);
        })
}

export default GET_PROFILE_API;