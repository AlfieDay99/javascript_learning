/**
 * Closures Demo
 * Demonstrates closures and the classic setTimeout loop problem
 */

function testClosure() {
    const output = document.getElementById('closureOutput');
    output.innerHTML = "Check the console for closure examples!<br>";
    
    // 1. Problematic example using var
    // This demonstrates the classic closure problem in loops
    console.log('\n=== Problematic var loop ===');
    for (var i = 0; i < 3; i++) {
        setTimeout(function() {
            // All callbacks will see the final value of i (3)
            console.log("var loop:", i);
        }, 1000);
    }
    
    // 2. Correct solution using let
    // let creates a new binding for each iteration
    console.log('\n=== Correct let loop ===');
    for (let j = 0; j < 3; j++) {
        setTimeout(function() {
            // Each callback gets its own j value
            console.log("let loop:", j);
        }, 1000);
    }
    
    // 3. Alternative solution using IIFE (Immediately Invoked Function Expression)
    // This creates a new scope for each iteration
    console.log('\n=== IIFE solution with var ===');
    for (var i = 0; i < 3; i++) {
        (function(x) {
            // x is a new variable in each iteration's scope
            setTimeout(function() {
                console.log("closure with var:", x);
            }, 1000);
        })(i);
    }
    
    // 4. Additional closure example
    // Demonstrates how closures can maintain state
    console.log('\n=== State maintenance with closure ===');
    function createCounter() {
        let count = 0;
        return function() {
            count++;
            console.log("Counter:", count);
        };
    }
    
    const counter = createCounter();
    counter(); // 1
    counter(); // 2
    counter(); // 3
} 