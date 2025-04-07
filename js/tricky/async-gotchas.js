/**
 * Async/Await and Promise Gotchas
 * 
 * This example demonstrates common pitfalls with asynchronous JavaScript,
 * including Promise handling and async/await usage.
 * 
 * Key Points:
 * 1. Promises are eager, not lazy
 * 2. Unhandled Promise rejections
 * 3. Forgetting to await
 * 4. Promise.all vs Promise.allSettled
 * 5. Error handling in async functions
 * 
 * Common Mistakes:
 * - Not handling Promise rejections
 * - Forgetting to await async calls
 * - Assuming Promises are lazy
 * - Not understanding Promise chaining
 * - Improper error handling in async code
 */

function asyncGotchas() {
    const output = document.getElementById('asyncOutput');
    output.innerHTML = "Check the console for async examples!<br>";
    
    // Example 1: Unhandled Promise rejection
    const unhandledPromise = new Promise((resolve, reject) => {
        reject(new Error("This error won't be caught!"));
    });
    
    // Example 2: Forgetting to await
    async function forgotAwait() {
        const promise = new Promise(resolve => setTimeout(() => resolve("Done!"), 1000));
        const result = promise; // Forgot await!
        console.log("Forgot await:", result); // Shows Promise object
        output.innerHTML += "Forgot await: " + JSON.stringify(result) + "<br>";
    }
    
    // Example 3: Promise.all vs Promise.allSettled
    const promises = [
        Promise.resolve("Success 1"),
        Promise.reject("Error 1"),
        Promise.resolve("Success 2")
    ];
    
    // Promise.all fails fast
    Promise.all(promises)
        .then(results => {
            console.log("Promise.all success:", results);
            output.innerHTML += "Promise.all success: " + JSON.stringify(results) + "<br>";
        })
        .catch(error => {
            console.log("Promise.all error:", error);
            output.innerHTML += "Promise.all error: " + error + "<br>";
        });
    
    // Promise.allSettled continues despite errors
    Promise.allSettled(promises)
        .then(results => {
            console.log("Promise.allSettled:", results);
            output.innerHTML += "Promise.allSettled: " + JSON.stringify(results) + "<br>";
        });
    
    // Example 4: Error handling in async functions
    async function errorHandling() {
        try {
            await Promise.reject("Error in async function");
        } catch (error) {
            console.log("Caught error:", error);
            output.innerHTML += "Caught error: " + error + "<br>";
        }
    }
    
    // Run examples
    forgotAwait();
    errorHandling();
}

// Export for HTML button
window.asyncGotchas = asyncGotchas; 