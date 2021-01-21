//NIVELL 1

//Task 1 i 2
let employees = [{
    id: 1,
    name: 'Linux Torvalds'
}, {
    id: 2,
    name: 'Bill Gates'
},{
    id: 3,
    name: 'Jeff Bezos'
}];
 
let salaries = [{
    id: 1,
    salary: 4000
}, {
    id: 2,
    salary: 1000
}, {
    id: 3,
    salary: 2000
}];



const getEmployee = (num) => {
    return new Promise((resolve, reject) => {

        let found = ''
        employees.some( el => el.id === num ? found = el : found = '' )
        if (found) {
         resolve(found);
        } else {
          reject(`Employee not found`);
        }

    })     
}

const getSalary = (employee) => {
    return new Promise ((resolve, reject) => {

        let found = ''
        salaries.some( el => el.id === employee.id ? found = el.salary : found = '' )
        if (found) {
         resolve(found);
        } else {
          reject(`Salary not found`);
        }

    })
}


async function showPayroll(x) {
    try { 
        const response1 = await getEmployee(x);
        const response2 = await getSalary(response1);
        console.log(`${response1.name}: ${response2}`);
    }  catch (err) {
       console.log(err);
    }   
}

showPayroll(3);