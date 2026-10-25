function addNumbers(a: number, b: number) {
    return a + b;
}

const addNumbersArrow = (a: number, b: number): string => {
    return `${a + b}`;
}

function multiply(firstNumber: number, secondNumber?: number, base: number = 2): number {
    return firstNumber * base;
}

// const result: number = addNumbers(5, 10);
// const result2: string = addNumbersArrow(5, 10);
// const result3: number = multiply(5);

// console.log(result);
// console.log(result2);
// console.log(result3);

interface Character {
    name: string;
    hp: number;
    showHp: () => void;
}

const healCharacter = (character: Character, amount: number): void => {
    character.hp += amount;
}

const strider: Character = {
    name: 'Strider',
    hp: 50,
    showHp: () => {
        console.log(`HP: ${strider.hp}`);
    }
}

healCharacter(strider, 10);
healCharacter(strider, 30);
strider.showHp();

export {}