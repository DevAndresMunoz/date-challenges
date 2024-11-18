// dateFunctions.test.js

const {
    calculateDaysSince,
    filterRecentDates,
    getMonthNames,
    sortDatesAscending,
    calculateAges,
    groupDatesByYear,
    findFirstMonday,
    checkLeapYears,
    addDaysToDates,
    getDayOfWeekForDates,
    findMostRecentDate,
    getLastDayOfMonth,
    calculateDuration,
    listDatesOfWeekdayInMonth,
    getDateDifferences
} = require('./dateFunctions');

// Mock Date for testing
const RealDate = Date;
global.Date = class extends RealDate {
    constructor(...args) {
        if (args.length) return new RealDate(...args);
        return new RealDate('2023-10-15T00:00:00Z'); // Fixed current date for testing
    }
};

describe('JavaScript Date Coding Challenges', () => {
    test('calculateDaysSince', () => {
        const startDate = "2023-01-01";
        const daysSince = Math.floor((new Date() - new Date(startDate)) / (1000 * 60 * 60 * 24));
        expect(calculateDaysSince([{ startDate }])).toEqual([daysSince]);
        expect(calculateDaysSince([{ startDate: "Invalid Date" }])).toEqual([NaN]);
    });

    test('filterRecentDates', () => {
        expect(filterRecentDates("Hello")).toEqual("Input is not an array!");
        expect(filterRecentDates(["2023-01-04", "2024-05-10", "2024-11-15", "2024-10-31"])).toEqual(["2024-11-15", "2024-10-31"]);
    });

    test('getMonthNames', () => {
        expect(getMonthNames("Hello")).toEqual("Input is not an ar")
        expect(getMonthNames(["2023-01-04", "2024-05-10", "2024-11-15", "2024-10-31"])).toEqual(["January", "May", "November", "October"]);
    });
});


afterAll(() => {
    global.Date = RealDate; // Restore Date after test
});
