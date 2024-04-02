function employee(id, fullName, department, level, imageUrl,salary) {
    this.id = id;
    this.fullName = fullName;
    this.department=department;
    this.level = level;
    this.imageUrl = imageUrl;
    this.salary =calculateSalary(level);

}

 function calculateSalary  (level) {
    let salary = 0;
    if (level == "Senior") {
        salary = Math.floor(Math.random() * (2000 - 1500 ) + 1500);
    }
    if (level == "Mid-Senior") {
        salary = Math.floor(Math.random() * (1500 - 1000 ) + 1000);
    }
    if (level == "Junior") {
        salary = Math.floor(Math.random() * (1000 - 500 ) + 500);
    }
    let taxSalary = Math.ceil((salary * 7.5) / 100);
    let netSalary = salary - taxSalary;
    return netSalary;
}

function generateId(){
    let id=0;
    id=Math.floor(Math.random() * (9999 - 1000) + 1000);

    return id;
}



employee.prototype.render = function() {
    let container = document.createElement('container');
    container.className = 'employee-container';
    
    let image =document.createElement('img');
    image.className="employee-image";
    image.setAttribute('src',this.imageUrl);
    
    let name = document.createElement('div');
    name.className = 'employee-name';
    name.textContent = `Name: ${this.fullName}`;

    let id =document.createElement('div');
    id.className="employee-id";
    id.textContent=`ID: ${this.id}`;

    let department =document.createElement('div');
    department.className="employee-department";
    department.textContent=`Department: ${this.department}`;

    let level =document.createElement('div');
    level.className="employee-level";
    level.textContent=`Level: ${this.level}`;

    let salary = document.createElement('div');
    salary.className = 'employee-salary';
    salary.textContent = `Salary: ${this.salary}`;
  
    container.appendChild(image);
    container.appendChild(name);
    container.appendChild(id);
    container.appendChild(department);
    container.appendChild(level);
    container.appendChild(salary);
    
    let section = document.getElementById(this.department);
    section.appendChild(container);



  }

  






let employee1=new employee(1000,"Ghazi Samer","Administration","Senior","assets/Ghazi.jpg");
let employee2=new employee(1001,"Lana Ali","Finance","Senior","assets/Lana.jpg");
let employee3=new employee(1002,"Tamara Ayoub","Marketing","Senior","assets/Tamara.jpg");
let employee4=new employee(1003,"Safi Walid","Administration","Mid-Senior","assets/Safi.jpg");
let employee5=new employee(1004,"Omar Zaid","Development","Senior","assets/Omar.jpg");
let employee6=new employee(1005,"Rana Saleh","Development","Junior","assets/Rana.jpg");
let employee7=new employee(1006,"Hadi Ahmad","Finance","Mid-Senior","assets/Hadi.jpg");

employee1.render();
employee2.render();
employee3.render();
employee4.render();
employee5.render();
employee6.render();
employee7.render();



let formElement=document.getElementById("form");

formElement.addEventListener("submit" , funHandler);

function funHandler(event){
    event.preventDefault();
    console.log(event);
    let employeeImage =event.target.imageURL.value;
    let employeeFullName=event.target.fullName.value;
    let employeeDepartment=event.target.selectDepartment.value;
    let employeeLevel=event.target.selectLevel.value;
    
    let newEmployee=new employee(generateId(),employeeFullName,employeeDepartment,employeeLevel,employeeImage,calculateSalary(this.level));
    newEmployee.render();
}