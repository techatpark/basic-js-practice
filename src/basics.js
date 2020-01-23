function scopes(input) {
    let x = input;
    var y = input;
    const z = input;
    // here let us see the block scope
    if (input === 10) {
        x = 20;
        y = 20;
    } else {
        //here let us see if constant can be reassigned
        try {
            z = 20;
        } catch (error) {
            return error.message;
        }
    }
    return [x, y, z];
}
export default scopes;
