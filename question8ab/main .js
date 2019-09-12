(function() {
    var a = b = 5;
})();

console.log(b);

// Answer: it is a self envoking function and the var assigment simply means var a = b and b = 5, so when we console.log b its 5;