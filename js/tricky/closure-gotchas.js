/**
 * Tricky Closure Scenarios
 * 
 * This example demonstrates complex scenarios where closures
 * can lead to unexpected behavior in JavaScript.
 * 
 * Key Points:
 * 1. Closure scope chain
 * 2. Closure in loops
 * 3. Closure with setTimeout
 * 4. Closure with event handlers
 * 5. Closure memory leaks
 * 
 * Common Mistakes:
 * - Not understanding closure scope
 * - Creating closures in loops
 * - Forgetting about closure memory
 * - Misunderstanding closure timing
 * - Not considering closure performance
 */

function closureGotchas() {
    const output = document.getElementById('closureGotchasOutput');
    output.innerHTML = "Running closure examples...<br>";
    
    // Example 1: Closure scope chain
    try {
        function outer() {
            const x = 10;
            
            function middle() {
                const y = 20;
                
                function inner() {
                    const z = 30;
                    console.log("Closure chain:", x, y, z);
                    output.innerHTML += `Closure chain: ${x}, ${y}, ${z}<br>`;
                }
                
                return inner;
            }
            
            return middle();
        }
        
        const innerFn = outer();
        innerFn();
    } catch (error) {
        output.innerHTML += "Error in closure chain: " + error.message + "<br>";
    }
    
    // Example 2: Closure in loops (classic problem)
    try {
        const buttons = [];
        for (var i = 0; i < 3; i++) {
            buttons.push(
                document.createElement('button')
            );
            buttons[i].textContent = `Button ${i}`;
            buttons[i].onclick = function() {
                console.log("Button clicked:", i); // Always 3
                output.innerHTML += `Button clicked: ${i}<br>`;
            };
            document.body.appendChild(buttons[i]);
        }
    } catch (error) {
        output.innerHTML += "Error in loop closure: " + error.message + "<br>";
    }
    
    // Example 3: Closure with setTimeout
    try {
        for (var j = 0; j < 3; j++) {
            setTimeout(function() {
                console.log("Timeout:", j); // Always 3
                output.innerHTML += `Timeout: ${j}<br>`;
            }, 100);
        }
    } catch (error) {
        output.innerHTML += "Error in setTimeout closure: " + error.message + "<br>";
    }
    
    // Example 4: Fixing closure in loops with IIFE
    try {
        for (var k = 0; k < 3; k++) {
            (function(index) {
                setTimeout(function() {
                    console.log("Fixed timeout:", index);
                    output.innerHTML += `Fixed timeout: ${index}<br>`;
                }, 200);
            })(k);
        }
    } catch (error) {
        output.innerHTML += "Error in IIFE fix: " + error.message + "<br>";
    }
    
    // Example 5: Closure memory leak
    try {
        function createLeak() {
            const largeObject = new Array(1000000).fill('leak');
            let count = 0;
            
            return function() {
                count++;
                console.log("Leak count:", count);
                output.innerHTML += `Leak count: ${count}<br>`;
                // largeObject is kept in memory even though we don't use it
            };
        }
        
        const leakyFunction = createLeak();
        leakyFunction();
        leakyFunction();
    } catch (error) {
        output.innerHTML += "Error in memory leak example: " + error.message + "<br>";
    }
    
    // Example 6: Closure with event handlers
    try {
        const elements = [];
        for (let l = 0; l < 3; l++) {
            const element = document.createElement('div');
            element.textContent = `Element ${l}`;
            element.onclick = (function(index) {
                return function() {
                    console.log("Element clicked:", index);
                    output.innerHTML += `Element clicked: ${index}<br>`;
                };
            })(l);
            elements.push(element);
            document.body.appendChild(element);
        }
    } catch (error) {
        output.innerHTML += "Error in event handler closure: " + error.message + "<br>";
    }
}

// Export for HTML button
window.closureGotchas = closureGotchas; 