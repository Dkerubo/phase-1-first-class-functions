function receivesAFunction(callback) {
    callback(); // Calling the callback function
}


function returnsANamedFunction() {
    function namedFunction() {
        console.log("I am a named function");
    }
    return namedFunction; // Returning a named function
}


function returnsAnAnonymousFunction() {
    return function() {
        console.log("I am an anonymous function");
    };
}

