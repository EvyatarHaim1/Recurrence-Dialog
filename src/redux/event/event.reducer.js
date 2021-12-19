import {
    FETCH_ALL_EVENTS,
    SAVE_EVENT,
    DELETE_EVENT,
} from "./event.action";

const initialState = {
    events: [],
    event: {
        _id: "1569454a",
        title: "Custom recurrence",
        timestamp: Date.now(),
        repeatEvery: {
            quantity: 1,
            duration: "week"
        },
        repeatOn: {
            day: "M",
            timeInfo: "second Sunday of the month"
        },
        ends: {
            selection: "never",
            date: Date.now(),
            quantity: 12,
        },
    }
}

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = initialState, action) => {
    switch (action.type) {
        case FETCH_ALL_EVENTS:
            return {
                ...state,
                events: action.payload
            }
        case SAVE_EVENT:
            return {
                ...state,
                event: action.payload,
            }
        case DELETE_EVENT:
            return {
                ...state,
                event: action.payload,
            }
        default:
            return state;
    }
};
