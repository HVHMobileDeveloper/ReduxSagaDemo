import { combineReducers } from "redux";
import REDUCER_PROFILE from "../profile/reducer";

const RootReducer = combineReducers({
    profile: REDUCER_PROFILE,
    //TODO:(developer) can add more reducers here ...
});
export default RootReducer;