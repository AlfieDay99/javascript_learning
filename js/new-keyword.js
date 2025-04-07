/**
 * new Keyword Demo
 * Demonstrates how the 'new' keyword works with constructor functions
 */

function testNew() {
    const output = document.getElementById('newOutput');
    
    // Constructor function
    // When called with 'new', it creates a new object and sets 'this' to it
    function CustomEvent(name) {
        // 'this' refers to the new object being created
        this.name = name;
        this.type = "custom";
        
        // Log the creation process
        console.log('Creating new CustomEvent:', this);
    }
    
    // Create a new instance using the 'new' keyword
    const evt = new CustomEvent("MyEvent");
    
    // Display the created object
    output.innerHTML = JSON.stringify(evt, null, 2);
    
    // Additional logging for clarity
    console.log('CustomEvent instance:', evt);
    console.log('Is evt an instance of CustomEvent?', evt instanceof CustomEvent);
    
    // Demonstrate what happens without 'new'
    try {
        const badEvt = CustomEvent("BadEvent"); // Forgot 'new'
        console.log('This should not appear:', badEvt);
    } catch (error) {
        console.log('Error when forgetting new:', error.message);
    }
} 