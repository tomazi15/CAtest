var obj1 = {
    name: "John",
    age: 10,
    info: {
        address: 'some place',
        tel: '0123456789',
        hobbies: ['1', '2']
    },
    isEqual: function (obj) {
        return JSON.stringify(this) === JSON.stringify(obj);
    }
}

var obj2 = {
    name: "John",
    age: 10,
    info: {
        address: 'some place',
        tel: '0123456789',
        hobbies: ['1', '2']
    },
    isEqual: function (obj) {
        return JSON.stringify(this) === JSON.stringify(obj);
    }
}

var smallObj = {
    name: "John",
    age: 10,
    isEqual: function (obj) {
        return JSON.stringify(this) === JSON.stringify(obj);
    }
}



var obj3 = obj2;
var obj4 = obj1;

console.log(smallObj.isEqual(obj1)); //return false;
console.log(smallObj.isEqual({name: "John"})); //return false;


console.log(obj1.isEqual(undefined)); //return false;
console.log(obj2.isEqual(obj1)); //returns true;
console.log(obj3.isEqual(obj1)); //returns true;
console.log(obj4.isEqual(obj1)); //returns true;
