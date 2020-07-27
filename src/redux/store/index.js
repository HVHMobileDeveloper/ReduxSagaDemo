import { createStore, applyMiddleware } from "redux";
import RootReducer from "../reducer";
import createSagaMiddleware from 'redux-saga';
import RootSaga from "../../saga";

const sagaMiddleware = createSagaMiddleware();

const store = createStore(RootReducer, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(RootSaga);

export default store;