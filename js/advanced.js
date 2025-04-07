/**
 * Advanced JavaScript Concepts Demo
 * Contains more complex examples of JavaScript concepts
 */

// 1. Hoisting Example
function hoistingExample() {
    const output = document.getElementById('hoistingOutput');
    output.innerHTML = "Check the console for hoisting example!<br>";
    
    var globalVar = "I'm global!";
    
    function innerFunction() {
        console.log(globalVar); // undefined (due to hoisting)
        var globalVar = "I'm local!";
        console.log(globalVar); // "I'm local!"
    }
    
    innerFunction();
    console.log("Global scope:", globalVar); // "I'm global!"
}

// 2. Let vs Var in Loops
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

// 3. Arrow vs Regular Function: this
function arrowVsRegularThis() {
    const output = document.getElementById('arrowVsRegularOutput');
    
    const testObject = {
        name: "TestObject",
        regular: function() {
            output.innerHTML += `Regular this: ${this.name}<br>`;
            console.log("Regular this:", this.name);
        },
        arrow: () => {
            output.innerHTML += `Arrow this: ${this.name}<br>`;
            console.log("Arrow this:", this.name);
        }
    };
    
    testObject.regular(); // "TestObject"
    testObject.arrow();   // undefined
}

// 4. this in Constructors vs Normal Calls
function constructorVsNormalThis() {
    const output = document.getElementById('constructorVsNormalOutput');
    
    function ExampleFunc() {
        this.value = "Constructor";
        output.innerHTML += `this value: ${this.value}<br>`;
        console.log("this:", this);
    }
    
    // Normal call
    output.innerHTML += "Normal call:<br>";
    ExampleFunc();
    
    // Constructor call
    output.innerHTML += "<br>Constructor call:<br>";
    new ExampleFunc();
}

// 5. Closure Counter
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

// 6. Closure in Loops with IIFE
function closureFixWithIIFE() {
    console.log('\n=== IIFE Closure Fix ===');
    for (var i = 0; i < 3; i++) {
        (function(index) {
            setTimeout(() => {
                console.log("Index:", index);
            }, 100);
        })(i);
    }
}

// 7. Global vs Local Scope
function scopeExample() {
    var globalNum = 5;
    
    function innerFunction() {
        var globalNum = 10; // local scope shadows the global one
        console.log("Inside function:", globalNum);
    }
    
    innerFunction();       // 10
    console.log("Outside function:", globalNum); // 5
}

// 8. Lexical this in Arrow Functions
function arrowPreservesThis() {
    this.name = "LexicalThis";
    
    setTimeout(() => {
        console.log("Arrow this.name:", this.name); // LexicalThis
    }, 100);
}

// 9. Custom Constructor with new
function CustomEventConstructor(name) {
    this.name = name;
    this.timestamp = Date.now();
}

// Export functions for HTML buttons
window.hoistingExample = hoistingExample;
window.loopScopeExample = loopScopeExample;
window.arrowVsRegularThis = arrowVsRegularThis;
window.constructorVsNormalThis = constructorVsNormalThis;
window.testClickCounter = testClickCounter;
window.closureFixWithIIFE = closureFixWithIIFE;
window.scopeExample = scopeExample;
window.arrowPreservesThis = arrowPreservesThis;
window.CustomEventConstructor = CustomEventConstructor; 