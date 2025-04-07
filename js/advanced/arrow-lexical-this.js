/**
 * Lexical this in Arrow Functions
 * 
 * This example demonstrates how arrow functions preserve the 'this' value
 * from their surrounding scope (lexical this).
 * 
 * Key Points:
 * 1. Arrow functions don't have their own 'this'
 * 2. They inherit 'this' from the surrounding scope
 * 3. The value of 'this' is determined when the arrow function is defined
 * 4. Arrow functions cannot be used as constructors
 * 
 * In this example:
 * - The constructor sets this.name
 * - The arrow function in setTimeout preserves this
 * - The arrow function can access this.name
 * 
 * This is because:
 * - Regular functions create their own 'this' context
 * - Arrow functions inherit 'this' from where they are defined
 * - The arrow function is defined inside the constructor
 * - It inherits the constructor's 'this'
 */

function arrowPreservesThis() {
    const output = document.getElementById('arrowLexicalOutput');
    output.innerHTML = "Check the console for lexical this examples!<br>";
    
    this.name = "LexicalThis";
    
    setTimeout(() => {
        const message = `Arrow this.name: ${this.name}`;
        console.log(message); // LexicalThis
        output.innerHTML += message + "<br>";
    }, 100);
}

// Export for HTML button
window.arrowPreservesThis = arrowPreservesThis; 