/**
 * Scope Demo
 * Demonstrates the difference between global and local variables
 */

// Global variable - accessible anywhere in the script
var globalVar = "I'm global!";

function testScope() {
    // Local variable - only accessible within this function
    var localVar = "I'm local!";
    
    // Get the output element
    const output = document.getElementById('scopeOutput');
    
    // Display both variables
    output.innerHTML = `
        Global variable: ${globalVar}<br>
        Local variable: ${localVar}
    `;
    
    // Log to console for additional verification
    console.log('Global variable:', globalVar);
    console.log('Local variable:', localVar);
    
    // Try to access localVar outside this function will result in ReferenceError
    // This demonstrates the concept of scope
} 