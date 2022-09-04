const { Intern } = require('../lib');

const name = "Bob", id = 28, email = "bob@bob.com", school = "Riverside";
const e = new Intern (name, id, email, school);

test('testing getSchool method', () => expect(e.getSchool()).toBe(school));
test('testing getRole method', () => expect(e.getRole()).toBe("Intern"));
