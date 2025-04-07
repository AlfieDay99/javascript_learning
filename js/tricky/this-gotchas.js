/**
 * Tricky this Binding Scenarios
 * 
 * This example demonstrates complex scenarios where this binding
 * can be confusing or unexpected in JavaScript.
 * 
 * Key Points:
 * 1. this in nested functions
 * 2. this in event handlers
 * 3. this in setTimeout/setInterval
 * 4. this in object methods
 * 5. this in class methods
 * 
 * Common Mistakes:
 * - Losing this context in nested functions
 * - Assuming this refers to the function itself
 * - Not understanding implicit binding
 * - Forgetting to bind methods
 * - Confusing arrow function this binding
 */

function thisBindingGotchas() {
    const output = document.getElementById('thisBindingOutput');
    output.innerHTML = "Check the console for this binding examples!<br>";
    
    // Example 1: Nested functions
    const obj = {
        name: "Outer",
        method: function() {
            console.log("Outer this:", this.name);
            output.innerHTML += "Outer this: " + this.name + "<br>";
            
            function inner() {
                console.log("Inner this:", this.name); // undefined in strict mode
                output.innerHTML += "Inner this: " + (this.name || "undefined") + "<br>";
            }
            
            inner();
        }
    };
    
    // Example 2: Event handlers
    const button = document.createElement('button');
    button.textContent = "Click me";
    button.onclick = function() {
        console.log("Button this:", this);
        output.innerHTML += "Button this: " + this.constructor.name + "<br>";
    };
    document.body.appendChild(button);
    
    // Example 3: setTimeout
    const timeoutObj = {
        name: "Timeout",
        method: function() {
            setTimeout(function() {
                console.log("Timeout this:", this.name);
                output.innerHTML += "Timeout this: " + (this.name || "undefined") + "<br>";
            }, 100);
        }
    };
    
    // Example 4: Class methods
    class ExampleClass {
        constructor() {
            this.name = "Class";
        }
        
        method() {
            console.log("Class method this:", this.name);
            output.innerHTML += "Class method this: " + this.name + "<br>";
        }
        
        arrowMethod = () => {
            console.log("Arrow method this:", this.name);
            output.innerHTML += "Arrow method this: " + this.name + "<br>";
        }
    }
    
    // Run examples
    obj.method();
    timeoutObj.method();
    
    const instance = new ExampleClass();
    instance.method();
    instance.arrowMethod();
    
    // Example 5: Method binding
    const unbound = {
        name: "Unbound",
        method: function() {
            console.log("Unbound this:", this.name);
            output.innerHTML += "Unbound this: " + this.name + "<br>";
        }
    };
    
    const boundMethod = unbound.method.bind(unbound);
    setTimeout(boundMethod, 200);
}

// Export for HTML button
window.thisBindingGotchas = thisBindingGotchas; 