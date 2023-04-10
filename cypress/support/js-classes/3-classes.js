class Parent {

    constructor(firstName, age) {
        this.firstName = firstName
        this.age = age
        this.lastName = "Fucker"
    }

    greeting() {
        console.log('!!!Hey!')
    }

    tellName() {
        console.log(`My name is: ${this.firstName} ${this.lastName}`)
    }

    tellAge() {
        console.log(`My name is ${this.age} years old`)
    }

    tellJobTitle() {
        if (this instanceof Child) {
            console.log(`I have not got job title`)
        }
        else
        {
            this.job = "AQA";
            console.log(`My job is ${this.job}`)

        }
    }
}

class Child extends Parent{

    greeting() {
        console.log('\n Hey! This is NEW Greeting')
    }

    goToSchool() {
        console.log('I like IceCream!')
    }
}

const parent = new Parent('Jonny', 29);
const child = new Child('JJJJ!', 5)

parent.greeting()
parent.tellName()
parent.tellAge()
parent.tellJobTitle()

child.greeting()
child.tellName()
child.tellAge()
child.goToSchool()
child.tellJobTitle()
