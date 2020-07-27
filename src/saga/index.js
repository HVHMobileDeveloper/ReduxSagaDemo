import { all } from 'redux-saga/effects';
import PROFILE_SAGA from './profile';

export default function* RootSaga(){
    yield all([
        PROFILE_SAGA(),
        //TODO: (developer) can add more saga here ...
    ]);
}