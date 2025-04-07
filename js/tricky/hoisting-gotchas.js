/**
 * Tricky Hoisting Scenarios
 * 
 * This example demonstrates complex scenarios where hoisting
 * can lead to unexpected behavior in JavaScript.
 * 
 * Key Points:
 * 1. Variable hoisting with var
 * 2. Function hoisting
 * 3. Temporal Dead Zone (TDZ) with let/const
 * 4. Hoisting in different scopes
 * 5. Hoisting with function expressions
 * 
 * Common Mistakes:
 * - Assuming variables are initialized before declaration
 * - Not understanding TDZ
 * - Confusing function declarations and expressions
 * - Not considering block scope
 * - Misunderstanding hoisting order
 */

function hoistingGotchas() {
    const output = document.getElementById('hoistingGotchasOutput');
    output.innerHTML = "Running hoisting examples...<br>";
    
    // Example 1: Variable hoisting with var
    try {
        console.log("Before declaration:", hoistedVar); // undefined
        output.innerHTML += "Before declaration: " + (typeof hoistedVar) + "<br>";
        
        var hoistedVar = "I'm hoisted!";
        console.log("After declaration:", hoistedVar);
        output.innerHTML += "After declaration: " + hoistedVar + "<br>";
    } catch (error) {
        output.innerHTML += "Error in variable hoisting: " + error.message + "<br>";
    }
    
    // Example 2: Function hoisting
    try {
        hoistedFunction(); // Works!
        output.innerHTML += "Hoisted function called successfully<br>";
        
        function hoistedFunction() {
            console.log("I'm a hoisted function!");
            output.innerHTML += "I'm a hoisted function!" + "<br>";
        }
    } catch (error) {
        output.innerHTML += "Error in function hoisting: " + error.message + "<br>";
    }
    
    // Example 3: Temporal Dead Zone
    try {
        console.log(tdzVar); // ReferenceError
    } catch (error) {
        console.log("TDZ error:", error.message);
        output.innerHTML += "TDZ error: " + error.message + "<br>";
    }
    
    let tdzVar = "I'm in TDZ";
    
    // Example 4: Hoisting in different scopes
    try {
        var globalVar = "Global";
        
        function scopeExample() {
            console.log("Inside function before declaration:", localVar); // undefined
            output.innerHTML += "Inside function before declaration: " + (typeof localVar) + "<br>";
            
            var localVar = "Local";
            console.log("Inside function after declaration:", localVar);
            output.innerHTML += "Inside function after declaration: " + localVar + "<br>";
        }
        
        scopeExample();
    } catch (error) {
        output.innerHTML += "Error in scope example: " + error.message + "<br>";
    }
    
    // Example 5: Function expressions
    try {
        notHoisted(); // TypeError
    } catch (error) {
        console.log("Function expression error:", error.message);
        output.innerHTML += "Function expression error: " + error.message + "<br>";
    }
    
    var notHoisted = function() {
        console.log("I'm not hoisted!");
    };
    
    try {
        notHoisted(); // Works after declaration
        output.innerHTML += "Function expression called after declaration<br>";
    } catch (error) {
        output.innerHTML += "Error calling function expression: " + error.message + "<br>";
    }
    
    // Example 6: Block scope hoisting
    try {
        {
            console.log("Before block declaration:", blockVar); // undefined
            output.innerHTML += "Before block declaration: " + (typeof blockVar) + "<br>";
            
            var blockVar = "Block scoped?";
            console.log("After block declaration:", blockVar);
            output.innerHTML += "After block declaration: " + blockVar + "<br>";
        }
        
        console.log("Outside block:", blockVar); // Still accessible!
        output.innerHTML += "Outside block: " + blockVar + "<br>";
    } catch (error) {
        output.innerHTML += "Error in block scope example: " + error.message + "<br>";
    }
}

// Export for HTML button
window.hoistingGotchas = hoistingGotchas; 