const x = require('./ds-string');

test('String reverse odd number case', () => {
    expect(x.reverse("abc dba")).toBe("abd cba");
    expect(x.reverse("")).toBe("");
    expect(x.reverse("aaaaa")).toBe("aaaaa");
    expect(x.reverse("wasitaratisaw")).toBe("wasitaratisaw");
    expect(x.reverse("12345")).toBe("54321");
});

test('String reverse odd number case', () => {
    expect(x.isPalindrome("wasitaratisaw")).toBe(true);
 
});

test('CamelCase identifying ',() => {
    expect(x.camelCase("helloWorld")).toBe(2);
});