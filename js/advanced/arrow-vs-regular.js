/**
 * Arrow vs Regular Function: this Binding
 * 
 * This example demonstrates how arrow functions and regular functions handle the 'this' keyword differently.
 * 
 * Key Points:
 * 1. Regular functions have their own 'this' binding
 * 2. Arrow functions inherit 'this' from their surrounding scope (lexical this)
 * 3. The value of 'this' depends on how the function is called
 * 4. Arrow functions cannot be used as constructors
 * 
 * In this example:
 * - Regular function: 'this' refers to the object calling the method
 * - Arrow function: 'this' is inherited from the surrounding scope (window/global)
 * 
 * This is because:
 * - Regular functions create their own 'this' context
 * - Arrow functions don't have their own 'this', they use the parent's
 * - When called as a method, regular functions get 'this' from the object
 * - Arrow functions always use the 'this' from where they were defined
 */

function arrowVsRegularThis() {
    const output = document.getElementById('arrowVsRegularOutput');
    
    const testObject = {
        name: "TestObject",
        regular: function() {
            output.innerHTML += `Regular this: ${this.name}<br>`;
            console.log("Regular this:", this.name);
        },
        arrow: () => {
            output.innerHTML += `Arrow this: ${this.name}<br>`;
            console.log("Arrow this:", this.name);
        }
    };
    
    testObject.regular(); // "TestObject" (this refers to testObject)
    testObject.arrow();   // undefined (this refers to window/global)
}

// Export for HTML button
window.arrowVsRegularThis = arrowVsRegularThis; 