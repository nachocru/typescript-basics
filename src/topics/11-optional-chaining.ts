export interface Passenger {
    name: string;
    children?: string[];
}

const passenger1: Passenger = {
    name: 'Antonio'
}

const passenger2: Passenger = {
    name: 'Estrella',
    children: ['Natalia', 'Pedro']
}

const printChildren = ( passenger: Passenger ) => {
    const howManyChildren = passenger.children?.length || 0;
    console.log( howManyChildren );
}   

printChildren( passenger1 );
printChildren( passenger2 );