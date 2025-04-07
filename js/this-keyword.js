/**
 * this Keyword Demo
 * Demonstrates how 'this' behaves in different contexts
 */

function testThis() {
    const output = document.getElementById('thisOutput');
    
    // 1. Global context
    // In browser, 'this' refers to the window object
    output.innerHTML = `Global this: ${this === window}<br>`;
    console.log('Global this:', this);
    
    // 2. Regular function context
    // In non-strict mode, 'this' refers to the window object
    function regularFunc() {
        output.innerHTML += `Regular function this: ${this === window}<br>`;
        console.log('Regular function this:', this);
    }
    regularFunc();
    
    // 3. Arrow function context
    // Arrow functions inherit 'this' from their parent scope
    const arrowFunc = () => {
        output.innerHTML += `Arrow function this: ${this === window}<br>`;
        console.log('Arrow function this:', this);
    };
    arrowFunc();
    
    // 4. Constructor function context
    // In constructor functions, 'this' refers to the new instance
    function Person(name) {
        this.name = name;
        output.innerHTML += `Constructor this: ${this instanceof Person}<br>`;
        console.log('Constructor this:', this);
    }
    
    // Create a new instance to demonstrate constructor context
    const p = new Person("Alice");
    
    // Additional examples for clarity
    console.log('Person instance:', p);
    console.log('Is p an instance of Person?', p instanceof Person);
} 