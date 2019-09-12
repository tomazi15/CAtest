var a = 1; 
function b() { 
    a = 10; 
    return; 
    function a() {} 
} 
b(); 
console.log(a);

// Answer: first time its empty return therefore it will console.log global var a 1, When i remove function a it will be 10