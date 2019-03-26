const extendedFamily = [{
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

const firstPersonWhoIsAdult = extendedFamily.find(person => person.age >= 18); //zwraca caly obiekt
console.log(firstPersonWhoIsAdult);