/**
 * Closure Fix with IIFE
 * 
 * This example demonstrates how to fix the loop closure problem using
 * Immediately Invoked Function Expressions (IIFE).
 * 
 * Key Points:
 * 1. IIFE creates a new scope for each iteration
 * 2. The current value of the loop variable is captured
 * 3. Each timeout callback gets its own copy of the index
 * 4. This was a common solution before let/const
 * 
 * In this example:
 * - The IIFE creates a new scope for each iteration
 * - The current value of i is passed as 'index'
 * - Each setTimeout callback gets the correct index value
 * 
 * This is because:
 * - The IIFE creates a new function scope for each iteration
 * - The current value of i is passed as an argument
 * - The argument becomes a new variable in the IIFE's scope
 * - The closure captures this new variable instead of i
 */

function closureFixWithIIFE() {
    const output = document.getElementById('closureFixOutput');
    output.innerHTML = "Check the console for IIFE closure fix examples!<br>";
    
    console.log('\n=== IIFE Closure Fix ===');
    for (var i = 0; i < 3; i++) {
        (function(index) {
            setTimeout(() => {
                const message = `Index: ${index}`;
                console.log(message);
                output.innerHTML += message + "<br>";
            }, 100);
        })(i);
    }
}

// Export for HTML button
window.closureFixWithIIFE = closureFixWithIIFE; 