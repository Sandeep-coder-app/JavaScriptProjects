class Person {
    name

    constructor(name) {
        this.name = name
    }
}

// const g = new Person("Sandeep")

// g.introduceSelf()

class Professor extends Person {
    teacher

    constructor(name, teacher) {
        super(name)
        this.teacher = teacher
    }

    introduceSelf() {
        console.log(`My name is ${this.name}, and i will be your ${this.teacher} professors`);
    }

    grade(paper) {
        const grade = Math.floor(Math.random() * (5-1) + 1)
        console.log(grade);
    }
}

const walsh = new Professor("Sandeep Singh", "Java Language")

walsh.introduceSelf()

walsh.grade("my paper")