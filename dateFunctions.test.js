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
        expect(getMonthNames("Hello")).toEqual("Input is not an array!");
        expect(getMonthNames(["2023-01-04", "2024-05-10", "2024-11-15", "2024-10-31"])).toEqual(["January", "May", "November", "October"]);
    });

    test('sortDatesAscending', () => {
        expect(sortDatesAscending("Hello")).toEqual("Input is not an array!");
        expect(sortDatesAscending(["2023-01-04", "2024-05-10", "2024-11-15", "2024-10-31"])).toEqual(["2023-01-04", "2024-05-10", "2024-10-31", "2024-11-15"]);
    });

    test('calculateAges', () => {
        expect(calculateAges("Hello")).toEqual("Input is not an array!");
        expect(calculateAges(["2001-01-04", "1994-05-10", "1985-11-15", "1975-10-31"])).toEqual([23, 30, 39, 49]);
    });

    test('groupDatesByYear', () => {
        const testArray = [
            new Date('1999-05-10'),
            new Date('2005-07-20'),
            new Date('1999-02-12'),
            new Date('1999-10-22'),
            new Date('2005-03-10'),
            new Date('2012-11-07')
          ];
        const expectedObj = {
            1999: [(new Date("1999-05-10")), (new Date("1999-02-12")), (new Date("1999-10-22"))],
            2005: [(new Date("2005-07-20")), (new Date("2005-03-10"))],
            2012: [new Date("2012-11-07")]
        }
        expect(groupDatesByYear("Hello")).toEqual("Input is not an array!");
        expect(groupDatesByYear(testArray)).toEqual(expectedObj);
    });

    test('findFirstMonday', () => {
        expect(findFirstMonday("Hello")).toEqual("Missing year or month!");
        expect(findFirstMonday(1999, "April")).toEqual(5);
    });

    

});


afterAll(() => {
    global.Date = RealDate; // Restore Date after test
});
