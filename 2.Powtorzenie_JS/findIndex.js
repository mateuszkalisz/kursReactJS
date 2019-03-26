const customers = [{
        name: "Adam",
        age: 65
    },
    {
        name: "Jurek",
        age: 22
    },
    {
        name: "Monia",
        age: 12
    }
];

const isUserAdult = customers.findIndex(customer => customer.age >= 18); //zwraca tylko index

console.log(isUserAdult);
console.log(customers[isUserAdult].name);