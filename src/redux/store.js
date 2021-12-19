import { applyMiddleware, createStore } from "redux";
import reduxThunk from "redux-thunk";
import { combineReducers } from "redux";
import eventReducer from "./event/event.reducer";

const reducers = combineReducers({
    event: eventReducer,
});

const rootReducer = (state, action) => {
    return reducers(state, action);
};

const createstorewithmiddleware = createStore(
    rootReducer,
    applyMiddleware(reduxThunk)
);
export default createstorewithmiddleware;