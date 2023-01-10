const Intern = require("../lib/intern");

test("Can get school via getSchool()", () => {
    const testValue = "GSU";
    const e = new Intern("jonh", 1, "test@test.com", testValue);
    expect(e.getSchool()).toBe(testValue);
  });