
// take a callback function as an argument
// call the callback function
// it doesn't matter what this function returns, so long as it calls the callback function
// The returnsANamedFunction function should:
function receivesAFunction(callback) {
    callback(); // Calling the callback function
}


// take no arguments
// return a named function
// The returnsAnAnonymousFunction function should:
function returnsANamedFunction() {
    function namedFunction() {
        console.log("I am a named function");
    }
    return namedFunction; // Returning a named function
}


// take no arguments
// return an anonymous function
// When you're done, remember to commit and push your changes up to GitHub, then submit your work to Canvas using CodeGrade.
function returnsAnAnonymousFunction() {
    return function() {
        console.log("I am an anonymous function");
    };
}

