import { isDateOfBirthValid } from './utils';

test('isDateOfBirthValid function returns true for a valid date of birth', () => {
  const validDateOfBirth = '2000-01-01';
  const result = isDateOfBirthValid(validDateOfBirth);
  expect(result).toBe(true);
  
});