class Person {
    public name: string;
    public address: string;

    constructor(name: string, address: string) {
        this.name = name;
        this.address = address;
    }

}

// export class Hero extends Person {
//     public alterEgo: string;
//     public age: number;
//     public realName: string;

//     constructor(alterEgo: string, age: number, realName: string, name: string, address: string) {
//         super(name, address);
//         this.alterEgo = alterEgo;
//         this.age = age;
//         this.realName = realName;       
//     }

// }

export class Hero {
    public alterEgo: string;
    public age: number;
    public realName: string;
    public person: Person;

    constructor(alterEgo: string, age: number, realName: string, person: Person) {
        this.alterEgo = alterEgo;
        this.age = age;
        this.realName = realName;
        this.person = person; // You can set a default address or pass it as a parameter if needed
    }

}

const person = new Person('Peter Parker', 'New York');
const ironman = new Hero('Iron Man', 35, 'Antonio Estrella', person);

console.log(ironman);
