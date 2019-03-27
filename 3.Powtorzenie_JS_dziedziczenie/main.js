class Person {
    constructor(name) {
        this.name = name;
    }

    showName() {
        console.log(`Imie osoby to ${this.name}`);
    }
}

class Student extends Person {
    constructor(name = "", degrees = []) {
        super(name);
        this.degrees = degrees;
    }

    showDegrees() {
        const completed = this.degrees.filter(degree => degree > 2);
        console.log(`Student o imieniu ${this.name} ma oceny ${this.degrees} i zaliczył już ${completed.length} ocen`);
    }
}

const Janek = new Student("Janek", [1, 2, 3, 4, 5]);
Janek.showDegrees();

//mechanizm this

const cat = {
    kids: ["kociak", "łapciuch"],
    showKidsNames() {
        console.log(`Dziaciaki maja na imie ${this.kids}`);
        //const that = this; i wtedy zamiast this to that na dole
        const showKidsNumber = function () {
            console.log(this.kids.length);
        }.bind(this)
        showKidsNumber();
    },
}

cat.showKidsNames();