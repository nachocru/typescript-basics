class Person {
    public name: string;
    public address: string;

    constructor(name: string, address: string) {
        this.name = name;
        this.address = address;
    }

}

export class Hero extends Person {
    public alterEgo: string;
    public age: number;
    public realName: string;

    constructor(alterEgo: string, age: number, realName: string, name: string, address: string) {
        super(name, address);
        this.alterEgo = alterEgo;
        this.age = age;
        this.realName = realName;       
    }

}

const ironman = new Hero('Iron Man', 35, 'Antonio Estrella', 'Tony Stark', 'Malibu, California');

console.log(ironman);
