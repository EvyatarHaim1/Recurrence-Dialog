export const SAVE_EVENT = 'SAVE_EVENT';
export const DELETE_EVENT = 'DELETE_EVENT';
export const FETCH_ALL_EVENTS = 'FETCH_ALL_EVENTS';
export const CHANGE_TITLE = 'CHANGE_TITLE';

export const fetchAllEvents = (events) => { return { type: FETCH_ALL_EVENTS, payload: events } }

export const saveEvent = (event) => { return { type: SAVE_EVENT, payload: event } }

export const deleteEvent = (event) => { return { type: DELETE_EVENT, payload: event } }

export const changeTitle = (title) => { return { type: CHANGE_TITLE, payload: title } }

