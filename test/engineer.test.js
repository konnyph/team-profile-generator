const Engineer = require("../lib/engineer");

test("Can set GitHUb account via constructor", () => {
  const testValue = "GitHubUser";
  const e = new Engineer("John", 1, "test@test.com", testValue);
  expect(e.github).toBe(testValue);
});


