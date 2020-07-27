import { put, takeEvery } from 'redux-saga/effects';
import GET_PROFILE_API from '../../api/auth';
import { GET_PROFILE_SUCCESSFUL, GET_PROFILE_FAILED, GET_PROFILE } from '../../redux/profile/actions';

function* fetchProfile(action){
    console.log(`get profile saga${JSON.stringify(action)}`);
    try {
        const data = yield GET_PROFILE_API();
        yield put({type: GET_PROFILE_SUCCESSFUL, data});
    } catch (error) {
        yield put({type: GET_PROFILE_FAILED});
    }
}

function* PROFILE_SAGA () {
    yield takeEvery(GET_PROFILE, fetchProfile)
} 

export default PROFILE_SAGA;