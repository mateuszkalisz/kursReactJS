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