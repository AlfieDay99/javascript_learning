/**
 * Equality Comparison Gotchas
 * 
 * This example demonstrates the tricky behavior of JavaScript's equality operators
 * (== and ===) and type coercion.
 * 
 * Key Points:
 * 1. == performs type coercion before comparison
 * 2. === performs strict comparison without coercion
 * 3. NaN is not equal to itself
 * 4. null and undefined are equal with == but not ===
 * 5. Objects are compared by reference, not value
 * 
 * Common Mistakes:
 * - Using == when === is needed
 * - Assuming NaN equals NaN
 * - Not understanding object reference comparison
 * - Forgetting about type coercion
 */

function equalityGotchas() {
    const output = document.getElementById('equalityOutput');
    output.innerHTML = "Check the console for equality comparison examples!<br>";
    
    // Type coercion examples
    const examples = [
        { a: 0, b: false, op: '==' },
        { a: 0, b: false, op: '===' },
        { a: '0', b: 0, op: '==' },
        { a: '0', b: 0, op: '===' },
        { a: null, b: undefined, op: '==' },
        { a: null, b: undefined, op: '===' },
        { a: NaN, b: NaN, op: '==' },
        { a: NaN, b: NaN, op: '===' },
        { a: [], b: [], op: '==' },
        { a: [], b: [], op: '===' }
    ];

    examples.forEach(({ a, b, op }) => {
        const result = op === '==' ? a == b : a === b;
        const message = `${JSON.stringify(a)} ${op} ${JSON.stringify(b)} = ${result}`;
        console.log(message);
        output.innerHTML += message + "<br>";
    });

    // Object reference comparison
    const obj1 = { value: 1 };
    const obj2 = { value: 1 };
    const obj3 = obj1;

    const refExamples = [
        { a: obj1, b: obj2, op: '==' },
        { a: obj1, b: obj2, op: '===' },
        { a: obj1, b: obj3, op: '==' },
        { a: obj1, b: obj3, op: '===' }
    ];

    output.innerHTML += "<br>Object Reference Examples:<br>";
    refExamples.forEach(({ a, b, op }) => {
        const result = op === '==' ? a == b : a === b;
        const message = `Objects with same value ${op} = ${result}`;
        console.log(message);
        output.innerHTML += message + "<br>";
    });
}

// Export for HTML button
window.equalityGotchas = equalityGotchas; 