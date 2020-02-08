/* eslint-disable no-undef */
/* eslint-disable no-const-assign */
/*
 * This will have example for basics topics in Javascript
 */
//adding a comment
const global_const = 90;

/**
 *
 *   Scopes
 *   Javascript has below scopes
 *   Block Scope - Scope Belween a Block {}
 *   Local Scope -
 *   Global Scope -
 */
function scopes() {
    console.log('I am a global_const', global_const);
    let local_let = 20;
    if (local_let === 20) {
        var block_var = 50;
        let block_let = 30;
        console.log('I am a local_let', local_let);
        console.log('I am a block_var', block_var);
        console.log('I am a block_let', block_let);
    }
    // This works
    console.log('I am a block_var', block_var);

    console.dir(scopes);

    // This does not. Because let is block
    console.log('I am a block_let', block_let);

    return global_const;
}
/**
 * This is a arrow function
 */
const scopes2 = () => global_const;

export default scopes;

export { scopes2 };
