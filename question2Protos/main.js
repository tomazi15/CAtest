//EMPLOYEE
function Employee(name) {
    this.name = name;
    this.department = 'general';
}
Employee.prototype.newDepartment = function (department) {
    this.department = department;
}


//MANAGER
function Manager(name, reports) {
    //name, department inherited - plus reports
    Employee.call(this)
    this.name = name;
    this.reports = reports;
}

//WORK BE
function WorkBee(projectName) {
    //name, department inherited - plus projectName
    Employee.call(this)
    this.projectName = projectName;
}
WorkBee.prototype = Object.create(Employee.prototype);
WorkBee.prototype.project = function (project) {
    this.projectName = project;
}

//SALES PERSON
function SalesPerson(name, revenue) {
    //name, department and projectName inherited - plus revenue
    WorkBee.call(this);
    console.log(new WorkBee)
    this.name = name;
    this.revenue = revenue;
}
SalesPerson.prototype = Object.create(WorkBee.prototype);

//SOFTWARE ENGINEER
function SoftwareEngineer(name, techSkills, projectName) {
    WorkBee.call(this);
    //name, department and projectName inherited - plus techSkills
    this.name = name;
    this.techSkills = techSkills;
    this.projectName = projectName;
}
SoftwareEngineer.prototype = Object.create(WorkBee.prototype)

var John = new Manager("John Doe", [{name: "Q1", "statistics": "STAT1"}, {name: "Q2", statistics: 'STAT2'}]);
console.log(John.department); // General
console.log(John.name) // John Doe
console.log(John.reports) // [{name: "Q1", "statistics": ...}, {name: "Q2", statistics: ...}]

var Michael = new SalesPerson("Michael T", 2540);
Michael.newDepartment('Sales');
Michael.project('Internal');

console.log(Michael.department); // sales
console.log(Michael.name) // Michael T
console.log(Michael.projectName); // internal
console.log(Michael.revenue); // 2540


var Joseph = new SoftwareEngineer("Joseph K. Ellis", ["Javascript", "HTML"], "App-ComplyAdvantage");
Joseph.newDepartment('TECH');

console.log(Joseph.department); // tech
console.log(Joseph.name) // Joseph K. Ellis
console.log(Joseph.projectName); // App-ComplyAdvantage
console.log(Joseph.techSkills); // ["Javascript", "HTML"]

