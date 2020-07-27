import { GET_PROFILE, GET_PROFILE_SUCCESSFUL, GET_PROFILE_FAILED } from "../actions";



const initializeProfile = { profile: '' }

const REDUCER_PROFILE = (state = initializeProfile, action) => {
    console.log(`state: ${JSON.stringify(state)} - action: ${JSON.stringify(action)}`);
    switch (action.type) {
        case GET_PROFILE_SUCCESSFUL:
            state = action.data;
            return state;
        case GET_PROFILE_FAILED:
            return state;
        default:
            return state;
    }
}

export default REDUCER_PROFILE;