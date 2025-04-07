/**
 * Custom Constructor with new
 * 
 * This example demonstrates how to create and use custom constructors
 * with the 'new' keyword.
 * 
 * Key Points:
 * 1. Constructor functions should start with capital letters
 * 2. The 'new' keyword creates a new object
 * 3. 'this' refers to the new object in the constructor
 * 4. The constructor can add properties and methods
 * 
 * In this example:
 * - CustomEventConstructor creates event objects
 * - Each event has a name and timestamp
 * - The constructor is called with 'new'
 * - The new object inherits from the constructor's prototype
 * 
 * This is because:
 * - The 'new' keyword:
 *   1. Creates a new empty object
 *   2. Sets the object's prototype
 *   3. Binds 'this' to the new object
 *   4. Executes the constructor
 *   5. Returns the new object
 */

function CustomEventConstructor(name) {
    const output = document.getElementById('customConstructorOutput');
    output.innerHTML = "Check the console for constructor examples!<br>";
    
    this.name = name;
    this.timestamp = Date.now();
    
    const message = `Created event: ${JSON.stringify(this, null, 2)}`;
    console.log(message);
    output.innerHTML += message + "<br>";
}

// Export for HTML button
window.CustomEventConstructor = CustomEventConstructor; 