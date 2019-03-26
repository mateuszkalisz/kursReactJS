//przyklad1

const usersAge = [20, 30, 40, 50];

usersAge.forEach(age => console.log(`W przyszlym roku uzytkownik bedize mial ${age +1} lat`));

// forEach nic nam nie zwraca, tylko cos wykonuje z danymi, a map tak

//przyklad2

const usersAgeFE = [11, 22, 33, 44];

let usersTotalAge = 0;

usersAgeFE.forEach(age => usersTotalAge += age);

console.log(usersTotalAge);

//przyklad 3

const family = ["mama", "tata", "syn", "córka"];

const section = document.createElement("section");

family.forEach((member, index, array) => {
    section.innerHTML += (`<h1> Użytkownik ${member}</h1>
                <p1> o numerze: ${index})</p1>`);


    if (index === array.length - 1) {
        document.body.appendChild(section);
    }
})