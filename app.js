'use strict';
function Employee(id, fullName, department, level, imageUrl, salary) {
    this.id = id;
    this.fullName = fullName;
    this.department = department;
    this.level = level;
    this.imageUrl = imageUrl;
    this.salary = salary;
}

function calculateSalary(level) {
    let salary = 0;
    if (level === "Senior") {
        salary = Math.floor(Math.random() * (2000 - 1500) + 1500);
    } else if (level === "Mid-Senior") {
        salary = Math.floor(Math.random() * (1500 - 1000) + 1000);
    } else if (level === "Junior") {
        salary = Math.floor(Math.random() * (1000 - 500) + 500);
    }
    let taxSalary = Math.ceil((salary * 7.5) / 100);
    let netSalary = salary - taxSalary;
    return netSalary;
}

function generateId() {
    return Math.floor(Math.random() * (9999 - 1000) + 1000);
}


let employees = [];


const staticEmployees = [
    { fullName: "Ghazi Samer", department: "Administration", level: "Senior", imageUrl: "assets/Ghazi.jpg" },
    { fullName: "Lana Ali", department: "Finance", level: "Senior", imageUrl: "assets/Lana.jpg" },
    { fullName: "Tamara Ayoub", department: "Marketing", level: "Senior", imageUrl: "assets/Tamara.jpg" },
    { fullName: "Safi Walid", department: "Administration", level: "Mid-Senior", imageUrl: "assets/Safi.jpg" },
    { fullName: "Omar Zaid", department: "Development", level: "Senior", imageUrl: "assets/Omar.jpg" },
    { fullName: "Rana Saleh", department: "Development", level: "Junior", imageUrl: "assets/Rana.jpg" },
    { fullName: "Hadi Ahmad", department: "Finance", level: "Mid-Senior", imageUrl: "assets/Hadi.jpg" }
];


const storedEmployees = JSON.parse(localStorage.getItem('employees'));
if (storedEmployees) {
    employees = storedEmployees;
} else {
    
    employees = staticEmployees.map((emp) => {
        const id = generateId();
        const salary = calculateSalary(emp.level);
        return new Employee(id, emp.fullName, emp.department, emp.level, emp.imageUrl, salary);
    });
    saveEmployeesToLocalStorage();
}


function saveEmployeesToLocalStorage() {
    localStorage.setItem('employees', JSON.stringify(employees));
}


function renderEmployee(employee) {
    let container = document.createElement('div');
    container.className = 'employee-container';
    
    let image = document.createElement('img');
    image.className = "employee-image";
    image.setAttribute('src', employee.imageUrl);
    
    let name = document.createElement('div');
    name.className = 'employee-name';
    name.textContent = `Name: ${employee.fullName}`;

    let id = document.createElement('div');
    id.className = "employee-id";
    id.textContent = `ID: ${employee.id}`;

    let department = document.createElement('div');
    department.className = "employee-department";
    department.textContent = `Department: ${employee.department}`;

    let level = document.createElement('div');
    level.className = "employee-level";
    level.textContent = `Level: ${employee.level}`;

    let salary = document.createElement('div');
    salary.className = 'employee-salary';
    salary.textContent = `Salary: ${employee.salary}`;
  
    container.appendChild(image);
    container.appendChild(name);
    container.appendChild(id);
    container.appendChild(department);
    container.appendChild(level);
    container.appendChild(salary);
    
    let section = document.getElementById(employee.department);
    section.appendChild(container);
}


function renderEmployees() {
    employees.forEach(employee => {
        renderEmployee(employee);
    });
}


document.addEventListener('DOMContentLoaded', () => {
    const formElement = document.getElementById('form');
    formElement.addEventListener('submit', handleFormSubmit);

    
    renderEmployees();
});

function handleFormSubmit(event) {
    event.preventDefault();
    
    const employeeImage = event.target.imageURL.value;
    const employeeFullName = event.target.fullName.value;
    const employeeDepartment = event.target.selectDepartment.value;
    const employeeLevel = event.target.selectLevel.value;
    
    const newEmployee = new Employee(
        generateId(),
        employeeFullName,
        employeeDepartment,
        employeeLevel,
        employeeImage,
        calculateSalary(employeeLevel)
    );

    employees.push(newEmployee); 
    saveEmployeesToLocalStorage(); 
    renderEmployee(newEmployee); 
    event.target.reset(); 
}

