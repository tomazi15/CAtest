console.log('Answer: the loop finishes before the setTime out call back has a chance to finish even if the timeout is 0, and it will only console log 10, 10 times')
//Answer: Answer: the loop finishes before the setTime out call back has a chance to finish even if the timeout is 0, and it will only console log 10, 10 times
for(var i = 0; i < 10; i++) {
    setTimeout(function() {
        console.log('ORGINAL', i);
    }, 0);
}

//FIX
for(var i = 0; i < 10; i++) {
    console.log('FIX', i);
}
console.log('Answer simply remove timeout');
//Answer simply remove timeout
