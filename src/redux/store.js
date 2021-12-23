import { applyMiddleware, createStore } from "redux";
import reduxThunk from "redux-thunk";
import { combineReducers } from "redux";
import eventsReducer from './events/events.reducer';

const reducers = combineReducers({
    events: eventsReducer,
});

const rootReducer = (state, action) => {
    return reducers(state, action);
};

const createstorewithmiddleware = createStore(
    rootReducer,
    applyMiddleware(reduxThunk)
);
export default createstorewithmiddleware;