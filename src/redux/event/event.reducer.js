import {
    FETCH_ALL_EVENETS,
    SAVE_EVENT,
    RESET_EVENT,
    CHANGE_TITLE,
    REPEAT_EVERY_QUANTITY,
    REPEAT_EVERY_TIME,
    REPEAT_ON_SELECT_DAY,
    ENDS_SELECTED,
    ENDS_OCCURENCES,
    ENDS_DATE,
} from "./event.action";

const initialState = {
    event: {},
}

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = initialState, action) => {
    switch (action.type) {
        case FETCH_ALL_EVENETS:
            return {
                ...state,
                event: action.payload,
            }
        case SAVE_EVENT:
            return {
                ...state,
                event: action.payload,
            }
        case RESET_EVENT:
            return {
                ...state,
                event: action.payload,
            }
        case CHANGE_TITLE:
            return {
                ...state,
                event: {
                    ...state.event,
                    title: action.payload
                },
            }
        case REPEAT_EVERY_QUANTITY:
            return {
                ...state,
                event: {
                    ...state.event,
                    repeatEvery: {
                        ...state.event.repeatEvery,
                        quantity: action.payload
                    }
                }
            }
        case REPEAT_EVERY_TIME:
            return {
                ...state,
                event: {
                    ...state.event,
                    repeatEvery: {
                        ...state.event.repeatEvery,
                        time: action.payload
                    }
                }
            }
        case REPEAT_ON_SELECT_DAY:
            const { index, day } = action.payload
            const newState = JSON.parse(JSON.stringify(state))
            newState.event.repeatOn[index][day].selected =
                !newState.event.repeatOn[index][day].selected;
            return newState;

        case ENDS_SELECTED: {
            return {
                ...state,
                event: {
                    ...state.event,
                    ends: {
                        ...state.event.ends,
                        selected: action.payload
                    }
                }
            }
        }
        case ENDS_OCCURENCES: {
            return {
                ...state,
                event: {
                    ...state.event,
                    ends: {
                        ...state.event.ends,
                        occurrences: action.payload
                    }
                }
            }
        }
        case ENDS_DATE: {
            return {
                ...state,
                event: {
                    ...state.event,
                    ends: {
                        ...state.event.ends,
                        date: action.payload
                    }
                }
            }
        }
        default:
            return state;
    }
};
