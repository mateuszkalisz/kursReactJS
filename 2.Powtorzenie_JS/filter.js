//przzyklad1

const familyNames = ["magda", "ania", "kamil", "edyta", "małgorzata", "cecylia", "adam"];

const namesWith6Letter = familyNames.filter(name => name.length === 5);

console.log(namesWith6Letter);

//przyklad2

const names = ["romek", "tomek", "adam"];

const namesWithK = names.filter(name => {
    return (
        name.indexOf("k") > -1
    )
})

console.log(namesWithK);