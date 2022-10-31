const Employee = require("../lib/Employee");

test("Can instantiate Employee as a variable", () => {
  const e = new Employee();
  expect(typeof(e)).toBe("object");
});

test("Can set name through constructor arguments", () => {
  const name = "Will";
  const e = new Employee(name);
  expect(e.name).toBe(name);
});

test("Can set id through constructor argument", () => {
  const testValue = 100;
  const e = new Employee("Foobar", testValue);
  expect(e.id).toBe(testValue);
});

test("Can set email through constructor argument", () => {
  const testValue = "test@test.com";
  const e = new Employee("Foobar", 1, testValue);
  expect(e.email).toBe(testValue);
});

test("Can get name through getName()", () => {
  const testValue = "Will";
  const e = new Employee(testValue);
  expect(e.getName()).toBe(testValue);
});

test("Can get id through getId()", () => {
  const testValue = 100;
  const e = new Employee("Foobar", testValue);
  expect(e.getId()).toBe(testValue);
});

test("Can get email through getEmail()", () => {
  const testValue = "test@test.com";
  const e = new Employee("Foobar", 1, testValue);
  expect(e.getEmail()).toBe(testValue);
});

test("getRole() should return \"Employee\"", () => {
  const testValue = "Employee";
  const e = new Employee("Will", 1, "test@test.com");
  expect(e.getRole()).toBe(testValue);
});