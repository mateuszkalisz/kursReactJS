//przyklad1

const usersM = ["adam", "bogdan", "czarek", "zbyszek"];

const usersFirstLetterUpperCase = usersM.map(user => user[0].toUpperCase());

console.log(usersFirstLetterUpperCase);

//przyklad2

const numbers = [2, 3, 4];

const doubleNumbers = numbers.map(number => number * 2);

console.log(doubleNumbers);