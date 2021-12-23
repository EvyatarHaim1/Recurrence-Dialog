export const FETCH_ALL_EVENETS = 'FETCH_ALL_EVENETS';
export const SAVE_EVENT = 'SAVE_EVENT';
export const RESET_EVENT = 'RESET_EVENT';
export const CHANGE_TITLE = 'CHANGE_TITLE';
export const REPEAT_EVERY_QUANTITY = 'REPEAT_EVERY_QUANTITY';
export const REPEAT_EVERY_TIME = 'REPEAT_EVERY_TIME';
export const REPEAT_ON_SELECT_DAY = 'REPEAT_ON_SELECT_DAY';
export const ENDS_SELECTED = 'ENDS_SELECTED';
export const ENDS_OCCURENCES = 'ENDS_OCCURENCES';
export const ENDS_DATE = 'ENDS_DATE';

export const fetchAllEvents = (event) => { return { type: FETCH_ALL_EVENETS, payload: event } }

export const saveEvent = (event) => { return { type: SAVE_EVENT, payload: event } }

export const resetEvent = (event) => { return { type: RESET_EVENT, payload: event } }

export const changeTitle = (payload) => { return { type: CHANGE_TITLE, payload: payload } }

export const repeatEveryQuantity = (obj) => { return { type: REPEAT_EVERY_QUANTITY, payload: obj } }

export const repeatEveryTime = (day) => { return { type: REPEAT_EVERY_TIME, payload: day } }

export const repeatOnSelectDay = (value) => { return { type: REPEAT_ON_SELECT_DAY, payload: value } }

export const endsSelected = (event) => { return { type: ENDS_SELECTED, payload: event } }

export const endsOccurences = (event) => { return { type: ENDS_OCCURENCES, payload: event } }

export const endsDate = (event) => { return { type: ENDS_DATE, payload: event } }

