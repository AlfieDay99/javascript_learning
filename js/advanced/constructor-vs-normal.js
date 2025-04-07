/**
 * Constructor vs Normal Function Calls
 * 
 * This example demonstrates how the 'this' keyword behaves differently
 * when a function is called normally versus with the 'new' keyword.
 * 
 * Key Points:
 * 1. Normal function calls: 'this' refers to the global object (window)
 * 2. Constructor calls (with new): 'this' refers to the new instance
 * 3. The 'new' keyword creates a new object and sets it as 'this'
 * 4. Constructor functions should start with capital letters by convention
 * 
 * In this example:
 * - Normal call: 'this' refers to window/global
 * - Constructor call: 'this' refers to the new instance
 * 
 * This is because:
 * - Without 'new', the function is called in the global context
 * - With 'new', JavaScript:
 *   1. Creates a new empty object
 *   2. Sets the object's prototype
 *   3. Binds 'this' to the new object
 *   4. Executes the constructor function
 *   5. Returns the new object (unless the function returns something else)
 */

function constructorVsNormalThis() {
    const output = document.getElementById('constructorVsNormalOutput');
    
    function ExampleFunc() {
        this.value = "Constructor";
        output.innerHTML += `this value: ${this.value}<br>`;
        console.log("this:", this);
    }
    
    // Normal call - this refers to window/global
    output.innerHTML += "Normal call:<br>";
    ExampleFunc();
    
    // Constructor call - this refers to new instance
    output.innerHTML += "<br>Constructor call:<br>";
    new ExampleFunc();
}

// Export for HTML button
window.constructorVsNormalThis = constructorVsNormalThis; 