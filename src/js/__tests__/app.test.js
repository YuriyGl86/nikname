import Validator from '../app';

test.each([
  [true, 'correct name', 'aaaaa'],
  [true, 'correct name', 'a123aaaa'],
  [true, 'correct name', 'a'],
  [true, 'correct name', 'a234_-a567aaa'],
  [false, 'starts with figure', '3aaaaa'],
  [false, 'ends with figure', 'aaaaa4'],
  [false, 'to mach figures together', 'aa1234aaa'],
  [false, 'incorrect simbols', 'aa@aaa'],
])(
  ('shoud return %s becouse of %s - %s'),
  (bool, _, userName) => {
    // const validator = new Validator();
    expect(Validator.validateUsername(userName)).toBe(bool);
  },
);
