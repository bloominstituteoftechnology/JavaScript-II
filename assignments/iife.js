// file to play with IIFEs (Immediately Invoked Function Expressions)

console.log(' === IIFE stuff ===');

(function (){
    const daysInWeek = 7;
    const weeksInYear = 52;
    const daysInYear = daysInWeek * weeksInYear;

    console.log(`There're about ${daysInYear} days in a year.`);
})();
// can reuse this variable name without issue since its in an IIFE previously
const daysInYear = 365;

console.log(`There're actually ${daysInYear} days in a year.`);


// trying it with arrow function
(() => {
    let daysInMonth = 7 * 4;
    console.log(`There are about ${daysInMonth} days in a month.`);
})();

let daysInMonth = 30;

console.log(`There are actually ${daysInMonth} days in most months.`);




