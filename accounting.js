 'use strict'


function calculateDepartmentStatistics(department) {
    const departmentEmployees = employees.filter(emp => emp.department === department);
    const numberOfEmployees = departmentEmployees.length;
    const totalSalary = departmentEmployees.reduce((sum, emp) => sum + emp.salary, 0);
    const averageSalary = numberOfEmployees > 0 ? totalSalary / numberOfEmployees : 0;

    return { numberOfEmployees, totalSalary, averageSalary };
}

function renderAccountingTable() {
    const departments = ['Administration', 'Marketing', 'Development', 'Finance'];

    const tableBody = document.getElementById('accountingTableBody');
    tableBody.innerHTML = ''; 

    departments.forEach(department => {
        const { numberOfEmployees, totalSalary, averageSalary } = calculateDepartmentStatistics(department);

        const row = `
            <tr>
                <td>${department}</td>
                <td>${numberOfEmployees}</td>
                <td>${totalSalary}</td>
                <td>${averageSalary.toFixed(2)}</td>
            </tr>
        `;
        tableBody.innerHTML += row;
    });

    
    const totalEmployees = employees.length;
    const totalDepartmentSalaries = departments.reduce((sum, dept) => {
        const { totalSalary } = calculateDepartmentStatistics(dept);
        return sum + totalSalary;
    }, 0);
    const overallAverageSalary = totalEmployees > 0 ? totalDepartmentSalaries / totalEmployees : 0;

    
    const tableFooter = document.getElementById('accountingTableFooter');
    tableFooter.innerHTML = `
        <tr>
            <td style="background-color: aliceblue; ">Total</td>
            <td>${totalEmployees}</td>
            <td>${totalDepartmentSalaries}</td>
            <td>${overallAverageSalary.toFixed(2)}</td>
        </tr>
    `;
}


document.addEventListener('DOMContentLoaded', () => {
    renderAccountingTable();
});
