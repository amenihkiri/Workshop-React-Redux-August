import {createStore } from "redux"
import Reducer from "./Reducers/CounterReducer"

const store=createStore(Reducer,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
export default store