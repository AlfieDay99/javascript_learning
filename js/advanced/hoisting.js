/**
 * Hoisting Example
 * 
 * This example demonstrates JavaScript's hoisting behavior, where variable and function declarations
 * are moved to the top of their containing scope during compilation.
 * 
 * Key Points:
 * 1. Variable declarations (not initializations) are hoisted
 * 2. Function declarations are hoisted
 * 3. var declarations are hoisted to the function scope
 * 4. let/const declarations are hoisted but not initialized (Temporal Dead Zone)
 * 
 * In this example:
 * - The globalVar inside innerFunction is hoisted to the top of the function
 * - When we first log globalVar, it's undefined (hoisted but not initialized)
 * - After assignment, it has the local value
 * - The outer globalVar remains unchanged
 */

function hoistingExample() {
    const output = document.getElementById('hoistingOutput');
    output.innerHTML = "Check the console for hoisting example!<br>";
    
    var globalVar = "I'm global!";
    
    function innerFunction() {
        console.log(globalVar); // undefined (due to hoisting)
        var globalVar = "I'm local!";
        console.log(globalVar); // "I'm local!"
    }
    
    innerFunction();
    console.log("Global scope:", globalVar); // "I'm global!"
}

// Export for HTML button
window.hoistingExample = hoistingExample; 