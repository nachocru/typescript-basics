class Person {
    public name: string;
    public address: string;

    constructor(name: string, address: string) {
        this.name = name;
        this.address = address;
    }

}

const ironman = new Person('Tony Stark', 'Malibu, California');

console.log(ironman);
