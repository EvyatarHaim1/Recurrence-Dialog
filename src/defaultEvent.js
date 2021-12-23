import firebase from 'firebase';

export const defaultEvent = {
    title: "Custom recurrence",
    timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    repeatEvery: {
        quantity: 1,
        time: "week",
    },
    repeatOn: [
        {
            Monday: {
                selected: false,
                timeInfo: "second Sunday of the month",
            }
        },
        {
            Tuesday: {
                selected: false,
                timeInfo: "second Sunday of the month",
            },
        },
        {
            Wednesday: {
                selected: false,
                timeInfo: "second Sunday of the month",
            },
        },
        {
            Thursday: {
                selected: false,
                timeInfo: "second Sunday of the month",
            },
        },
        {
            Friday: {
                selected: false,
                timeInfo: "second Sunday of the month",
            },
        },
        {
            Saturday: {
                selected: false,
                timeInfo: "second Sunday of the month",
            },
        },
        {
            Sunday: {
                selected: false,
                timeInfo: "second Sunday of the month",
            },
        },
    ],
    ends: {
        selected: "never",
        occurrences: 1,
        date: firebase.firestore.FieldValue.serverTimestamp(),
    },
}