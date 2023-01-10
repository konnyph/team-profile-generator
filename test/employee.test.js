const Employee = require("../lib/Employee");


// PROPERTIES

test("can an Employee have a name?", () => {
    // part1: test value initialization
    const testValue = "John";

    // part2: actual process that we want to test
    const newEmployee = new Employee(testValue, "", "");

    // part 3: conclusion
    expect(newEmployee.name).toBe(testValue)
})

test("can an Employee have n id?", () => {
    // part1: test value initialization
    const testValue = "123";

    // part2: actual process that we want to test
    const newEmployee = new Employee("", testValue, "");

    // part 3: conclusion
    expect(newEmployee.id).toBe(testValue)
})




// METHODS


test("can we get the name of Employee using method?", () => {
    // part1: test value initialization
    const testValue = "John";

    // part2: actual process that we want to test
    const newEmployee = new Employee(testValue, "", "");

    // part 3: conclusion
    expect(newEmployee.getName()).toBe(testValue)
})