function employee(id, fullName, department, level, imageUrl) {
    this.id = id;
    this.fullName = fullName;
    this.level = level;
    this.imageUrl = imageUrl;
    this.salary =this.math(level);

}

employee.prototype.math = function (level) {
    let salary = 0;
    if (level == "Senior") {
        salary = Math.floor(Math.random() * (2000 - 1500 + 1) + 1500);

    }
    if (level == "Mid-Senior") {
        salary = Math.floor(Math.random() * (1500 - 1000 + 1) + 1000);
    }
    if (level == "Junior") {
        salary = Math.floor(Math.random() * (1000 - 500 + 1) + 500);
    }
    let taxSalary = (salary * 7.5) / 100;
    let netSalary = salary - taxSalary;
    return netSalary;
}



employee.prototype.render = function() {
    let container = document.createElement('div');
    container.className = 'employee-container';
  
  
    let details = document.createElement('div');
    details.className = 'employee-details';
  
    let name = document.createElement('div');
    name.className = 'employee-name';
    name.textContent = this.fullName;
  
    let salary = document.createElement('div');
    salary.className = 'employee-salary';
    salary.textContent = this.salary.toFixed(2);
  
   
    details.appendChild(name);
    details.appendChild(salary);
    container.appendChild(details);
  
    let employeeList = document.getElementById('employeeList');
    employeeList.appendChild(container);
  }

let employee1=new employee(1000,"Ghazi Samer","Administration","Senior","img");
let employee2=new employee(1001,"Lana Ali","Finance","Senior","img");
let employee3=new employee(1002,"Tamara Ayoub","Marketing","Senior","img");
let employee4=new employee(1003,"Safi Walid","Administration","Mid-Senior","img");
let employee5=new employee(1004,"Omar Zaid","Development","Senior","img");
let employee6=new employee(1005,"Rana Saleh","Development","Junior","img");
let employee7=new employee(1006,"Hadi Ahmad","Finance","Mid-Senior","img");

employee1.render();
employee2.render();
employee3.render();
employee4.render();
employee5.render();
employee6.render();
employee7.render();