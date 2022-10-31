const Engineer = require("../lib/Engineer");

test("Can set GitHUb account through constructor", () => {
  const testValue = "GitHubUser";
  const e = new Engineer("Foobar", 1, "test@test.com", testValue);
  expect(e.github).toBe(testValue);
});

test("Can get GitHub username through getGithub()", () => {
  const testValue = "GitHubUser";
  const e = new Engineer("Foobar", 1, "test@test.com", testValue);
  expect(e.getGithub()).toBe(testValue);
});

test("getRole() should return \"Engineer\"", () => {
    const testValue = "Engineer";
    const e = new Engineer("Foobar", 1, "test@test.com", "GitHubUser");
    expect(e.getRole()).toBe(testValue);
  });
  