//import the function
const fechaAyer = require("./fechaAyer");

//test case 1
test("Fecha ayer should return a date object", () => {
    expect(fechaAyer()).toBeInstanceOf(Date);
});

//test case 2
test("Fecha ayer should return yesterday's date", () => {
    const today = new Date();
    const yesterday = new Date(today);
    yesterday.setDate(yesterday.getDate() - 1);

    expect(fechaAyer()).toEqual(yesterday);
});