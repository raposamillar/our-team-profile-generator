const { Manager } = require('../lib');

const name = "Mary", id = 25, email = "mary@mary.com", officeNumber = 6534;
const e = new Manager (name, id, email, officeNumber);

test('testing getOfficeNumber method', () => expect(e.getOfficeNumber()).toBe(officeNumber));
test('testing getRole method', () => expect(e.getRole()).toBe("Manager"));
