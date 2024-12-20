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

    test('checkLeapYears', () => {
        const testArray = [1978, 1993, 2008, 2000, 1776, 2007, 2024]
        const expectedArray = [false, false, true, true, true, false, true]
        expect(checkLeapYears("Hello")).toEqual("Input is not an array!");
        expect(checkLeapYears(testArray)).toEqual(expectedArray);
    });

    test('addDaysToDates', () => {
        const testArray = [
            new Date('1999-05-10'),
            new Date('2005-07-20'),
            new Date('1999-02-12'),
            new Date('1999-10-22'),
            new Date('2005-03-10'),
            new Date('2012-11-07')
          ];
        
          const expectedArray = [
            new Date('1999-05-15'),
            new Date('2005-07-25'),
            new Date('1999-02-17'),
            new Date('1999-10-27'),
            new Date('2005-03-15'),
            new Date('2012-11-12')
        ];
        expect(addDaysToDates("Hello")).toEqual("Input is not an array!");
        expect(addDaysToDates(testArray, 5)).toEqual(expectedArray);
    })

    test('getDayOfWeekForDates', () => {
        const testArray = [
            new Date('1999-05-10'),
            new Date('2005-07-20'),
            new Date('1999-02-12'),
            new Date('1999-10-22'),
            new Date('2005-03-10'),
            new Date('2012-11-07')
          ];

          const expectedArray = [
            "Monday",
            "Wednesday",
            "Friday",
            "Friday",
            "Thursday",
            "Wednesday"
        ]

        expect(getDayOfWeekForDates("Hello)")).toEqual("Input is not an array!");
        expect(getDayOfWeekForDates(testArray)).toEqual(expectedArray);
    })

    test('findMostRecentDate', () => {
        const testArray = [
            new Date('1999-05-10'),
            new Date('2005-07-20'),
            new Date('1999-02-12'),
            new Date('1999-10-22'),
            new Date('2005-03-10'),
            new Date('2012-11-07')
          ];

        expect(findMostRecentDate("Hello)")).toEqual("Input is not an array!");
        expect(findMostRecentDate(testArray)).toEqual("Tue Nov 06 2012");
    })

    test('getLastDayOfMonth', () => {
        expect(getLastDayOfMonth("Hello)")).toEqual("Input is not an integer!");
        expect(getLastDayOfMonth(2023, 8)).toEqual("Sat Sep 30 2023");
    })

    test('calculateDuration', () => {
        expect(calculateDuration("Hello)")).toEqual("Input is not an integer!");
        expect(calculateDuration('1999-05-10','2005-07-20')).toEqual("Between these two dates lie 2263 days, 54312 hours, and 3258720 minutes.");
    })

    test('listDatesOfWeekdayInMonth', () => {
        const expectedArray = ['Fri Sep 01 2023', 'Fri Sep 01 2023', 'Fri Sep 08 2023', 'Fri Sep 15 2023', 'Fri Sep 22 2023', 'Fri Sep 29 2023'];

        expect(listDatesOfWeekdayInMonth("Hello)")).toEqual("Input is not an integer!");
        expect(listDatesOfWeekdayInMonth(2023, 8, 5)).toEqual(expectedArray);
    })

    test('getDateDifferences', () => {
        expect(getDateDifferences("Hello)")).toEqual("Input is not an integer!");
        expect(getDateDifferences(2023, 8, 5)).toEqual(expectedArray);
    })
    

});


afterAll(() => {
    global.Date = RealDate; // Restore Date after test
});
