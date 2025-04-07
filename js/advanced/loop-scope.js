/**
 * Let vs Var in Loops
 * 
 * This example demonstrates the difference between var and let in loop contexts,
 * particularly when used with asynchronous operations like setTimeout.
 * 
 * Key Points:
 * 1. var is function-scoped, let is block-scoped
 * 2. In loops, var creates a single binding for the entire loop
 * 3. let creates a new binding for each iteration
 * 4. Closures capture the current value of variables
 * 
 * In this example:
 * - With var: All setTimeout callbacks see the final value of i (3)
 * - With let: Each setTimeout callback gets its own j value (0, 1, 2)
 * 
 * This is because:
 * - var i is hoisted to the function scope, so there's only one i
 * - let j creates a new j for each loop iteration
 * - By the time setTimeout callbacks run, var loop has finished (i = 3)
 * - let preserves each iteration's value in its own scope
 */

function loopScopeExample() {
    const output = document.getElementById('loopScopeOutput');
    output.innerHTML = "Check the console for loop scope examples!<br>";
    
    // Using var (problematic)
    console.log('\n=== var in loop ===');
    for (var i = 0; i < 3; i++) {
        setTimeout(() => {
            console.log("var i:", i);
        }, 100);
    }
    
    // Using let (correct)
    console.log('\n=== let in loop ===');
    for (let j = 0; j < 3; j++) {
        setTimeout(() => {
            console.log("let j:", j);
        }, 100);
    }
}

// Export for HTML button
window.loopScopeExample = loopScopeExample; 