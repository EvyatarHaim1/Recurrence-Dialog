import {
    FETCH_ALL_EVENETS,
    SAVE_EVENT,
    DELETE_EVENT,
    CHANGE_TITLE,
    REPEAT_ON_SELECT_DAY,
    UPDATE_DROPDOWN_VALUE,
} from "./events.action";

const initialState = {
    events: {},
}

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = initialState, action) => {
    switch (action.type) {
        case FETCH_ALL_EVENETS:
            return {
                ...state,
                events: action.payload,
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
                events: {
                    ...state.events,
                    [action.payload.id]: {
                        ...action.payload.id,
                        title: action.payload.title
                    },
                }
            }
        case REPEAT_ON_SELECT_DAY:
            return {
                ...state,
                event: {
                    ...state.event,
                    [action.payload.day]: !action.payload.selected
                }
            }
        case UPDATE_DROPDOWN_VALUE:
            return {
                ...state,
                event: { ...state.event }
            }
        default:
            return state;
    }
};
