/**
 * Global vs Local Scope
 * 
 * This example demonstrates how variable scope works in JavaScript,
 * particularly how local variables can shadow global ones.
 * 
 * Key Points:
 * 1. Global variables are accessible everywhere
 * 2. Local variables shadow global ones with the same name
 * 3. Changes to local variables don't affect global ones
 * 4. Each function call creates a new scope
 * 
 * In this example:
 * - globalNum is defined in the global scope
 * - innerFunction creates a local globalNum
 * - The local variable shadows the global one
 * - Changes inside the function don't affect the global variable
 * 
 * This is because:
 * - JavaScript uses lexical scoping
 * - Variables are looked up from inner to outer scopes
 * - The first matching variable name is used
 * - Each scope maintains its own set of variables
 */

function scopeExample() {
    const output = document.getElementById('scopeExampleOutput');
    output.innerHTML = "Check the console for scope examples!<br>";
    
    var globalNum = 5;
    
    function innerFunction() {
        var globalNum = 10; // local scope shadows the global one
        const message = `Inside function: ${globalNum}`;
        console.log(message);
        output.innerHTML += message + "<br>";
    }
    
    innerFunction();       // 10 (local scope)
    const message = `Outside function: ${globalNum}`;
    console.log(message); // 5 (global scope)
    output.innerHTML += message + "<br>";
}

// Export for HTML button
window.scopeExample = scopeExample; 