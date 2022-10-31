const Intern = require("../lib/Intern");

test("Can set school through constructor", () => {
  const testValue = "CRWU";
  const e = new Intern("Foobar", 1, "test@test.com", testValue);
  expect(e.school).toBe(testValue);
});

test("getRole() should return \"Intern\"", () => {
  const testValue = "Intern";
  const e = new Intern("Foobar", 1, "test@test.com", "CRWU");
  expect(e.getRole()).toBe(testValue);
});

test("Can get school through getSchool()", () => {
  const testValue = "CWRU";
  const e = new Intern("Foobar", 1, "test@test.com", testValue);
  expect(e.getSchool()).toBe(testValue);
});