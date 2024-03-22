class Person {
    name

    constructor(name) {
        this.name = name
    }
}

class Student extends Person {
    #year

    constructor(name, year) {
        super(name)
        this.#year = year
    }

    introduceSelf() {
        console.log(`Hi! I'm ${this.name}, and I'm in year ${this.#year}`);
    }

    canStudy() {
        return this.#year > 1
    }
}

const summer = new Student("Sandeep Singh", 25)

summer.introduceSelf()

summer.canStudy()

