import scopes from '../src/basics.js';

test('finding scope', () => {
    expect(scopes(10)).toStrictEqual([10, 20, 10]);
    expect(scopes(5)).toStrictEqual('Assignment to constant variable.');
});
