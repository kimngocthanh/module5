import createSagaMiddleware from "redux-saga";
import rootSaga from "../redux-saga/UsersRedux";
import rootReduce from "./Reducer";
import { createStore,applyMiddleware } from "redux";


const sagaMiddleware = createSagaMiddleware();

const store = createStore(
    rootReduce,
    applyMiddleware(sagaMiddleware)
);

sagaMiddleware.run(rootSaga);

export default store;