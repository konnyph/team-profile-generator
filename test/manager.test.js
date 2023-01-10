const Manager = require("../lib/manager");




test("Can get office number via getOffice()", () => {
    const testValue = 100;
    const e = new Manager("john", 1, "test@test.com", testValue);
    expect(e.getOfficeNumber()).toBe(testValue);
  });