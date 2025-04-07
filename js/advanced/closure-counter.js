/**
 * Closure Counter
 * 
 * This example demonstrates how closures can maintain state between function calls.
 * A closure is a function that remembers and can access variables from its outer scope
 * even after the outer function has returned.
 * 
 * Key Points:
 * 1. Closures have access to variables from their containing scope
 * 2. The state is preserved between function calls
 * 3. Each closure has its own private state
 * 4. The state is not accessible from outside the closure
 * 
 * In this example:
 * - clickCounter creates a closure that maintains a count
 * - The count persists between calls to the returned function
 * - Each call to clickCounter() creates a new, independent counter
 * 
 * This is because:
 * - The inner function forms a closure with its containing scope
 * - The count variable is captured in the closure
 * - The closure maintains access to count even after clickCounter returns
 * - Each call to clickCounter creates a new scope with its own count
 */

let clickHandler = null;

function testClickCounter() {
    const output = document.getElementById('clickCounterOutput');
    
    function clickCounter() {
        let count = 0;
        return function() {
            count++;
            output.innerHTML = `Click count: ${count}`;
            console.log("Click count:", count);
        };
    }
    
    // Create new counter if none exists
    if (!clickHandler) {
        clickHandler = clickCounter();
    }
    
    // Call the counter
    clickHandler();
}

// Export for HTML button
window.testClickCounter = testClickCounter; 