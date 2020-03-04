import { id } from '../src/functional_programming';
const Just = (...x) => {
    return x + 2;
};
test('identity function', () => {
    expect(id(1)).toBe(1);
    expect(id('alpha')).toBe('alpha');
    expect(id(Just([1, 2, 3]))).toStrictEqual(Just([1, 2, 3]));
});
