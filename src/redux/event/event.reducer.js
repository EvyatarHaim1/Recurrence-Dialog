import {
    FETCH_ALL_EVENTS,
    SAVE_EVENT,
    DELETE_EVENT,
    CHANGE_TITLE,
} from "./event.action";

const initialState = {
    events: [],
    event: {
        id: "1569454a",
        title: "Custom recurrence",
        timestamp: Date.now(),
        repeatEvery: {
            first: 1,
            second: "week"
        },
        repeatOn: {
            Monday: {
                selected: false,
                timeInfo: "second Sunday of the month",
            },
            Tuesday: {
                selected: false,
                timeInfo: "second Sunday of the month",
            },
            Wednesday: {
                selected: false,
                timeInfo: "second Sunday of the month",
            },
            Thursday: {
                selected: false,
                timeInfo: "second Sunday of the month",
            },
            Friday: {
                selected: false,
                timeInfo: "second Sunday of the month",
            },
            Saturday: {
                selected: false,
                timeInfo: "second Sunday of the month",
            },
            Sunday: {
                selected: false,
                timeInfo: "second Sunday of the month",
            },
        },
        ends: {
            never: {
                selected: true,
            },
            after: {
                selected: false,
                occurrences: 12,
            },
            on: {
                selected: false,
                date: Date.now(),
            }
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
        case CHANGE_TITLE:
            return {
                ...state,
                event: { ...state.event, title: action.payload }
            }
        default:
            return state;
    }
};
