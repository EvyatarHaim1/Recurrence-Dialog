export const repeatEvery = {
    first: {
        values: [1, 2, 3, 4, 5],
        value: 1,
    },
    second: {
        values: ["day", "week", "month", "year"],
        value: "week",
    }
}

export const repeatOn = {
    first: {
        values: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
        value: "Monday",
    },
    second: {
        values: ["second Wednesday of the...", "14th day of the month", "second Sunday of the month"],
        value: "second Sunday of the month",
    },
}

export const ends = {
    first: {
        values: ["never", "after", "on"],
        value: "never",
    },
    second: {
        values: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15],
        value: Date.now(),
    },
}