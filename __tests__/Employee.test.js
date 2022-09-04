const { Employee } = require('../lib');

const name = "John", id = 23, email = "john@john.com";
const e = new Employee (name, id, email);

test('creates an employee object', () => expect(typeof(e)).toBe("object")); 
test('testing getName method', () => expect(e.getName()).toBe(name));
test('testing getId method', () => expect(e.getId()).toBe(id));
test('testing getEmail method', () => expect(e.getEmail()).toBe(email));
test('testing getRole method', () => expect(e.getRole()).toBe("Employee"));
