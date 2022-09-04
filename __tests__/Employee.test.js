const Employee = require('../lib/Employee');

test('creates an employee object', () => {
    const employee = new Employee('Harry');

    expect(employee.name).toBe('Harry');
    expect(employee.id).toBe('123');
    expect(employee.email).toBe('harry@harry.com');
    expect(employee.role).toBe('Employee');

});