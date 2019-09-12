var hero = {
    _name: 'John Doe',
    getName: function (){
        return this._name;
    }
};

var stolenName= hero.getName;

console.log(stolenName());
console.log(hero.getName());

//Answer: The stolenName points to the function referance only it needs () and in console.log stolenName we need to remove perentesis
