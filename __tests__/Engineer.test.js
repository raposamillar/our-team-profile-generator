const { Engineer } = require('../lib');

const name = "Tom", id = 25, email = "tom@tom.com", github = "tomtom";
const e = new Engineer (name, id, email, github);

test('testing getGithub method', () => expect(e.getGithub()).toBe(github));
test('testing getRole method', () => expect(e.getRole()).toBe("Engineer"));
