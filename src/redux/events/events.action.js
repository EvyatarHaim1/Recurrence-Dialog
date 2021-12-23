export const FETCH_ALL_EVENETS = 'FETCH_ALL_EVENETS';
export const SAVE_EVENT = 'SAVE_EVENT';
export const DELETE_EVENT = 'DELETE_EVENT';
export const CHANGE_TITLE = 'CHANGE_TITLE';
export const REPEAT_EVERY = 'REPEAT_EVERY';
export const REPEAT_ON_SELECT_DAY = 'REPEAT_ON_SELECT_DAY';
export const UPDATE_DROPDOWN_VALUE = 'UPDATE_DROPDOWN_VALUE';

export const fetchAllEvents = (events) => { return { type: FETCH_ALL_EVENETS, payload: events } }

export const saveEvent = (event) => { return { type: SAVE_EVENT, payload: event } }

export const deleteEvent = (event) => { return { type: DELETE_EVENT, payload: event } }

export const changeTitle = (payload) => { return { type: CHANGE_TITLE, payload: payload } }

export const repeatEvery = (obj) => { return { type: REPEAT_EVERY, payload: obj } }

export const repeatSelectDay = (day) => { return { type: REPEAT_ON_SELECT_DAY, payload: day } }

export const updateDropdownValue = (value) => { return { type: UPDATE_DROPDOWN_VALUE, payload: value } }

