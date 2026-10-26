export interface Product {
    description: string;
    price: number;
}

const phone: Product = {
    description: 'Nokia A1',
    price: 150
}

const tablet: Product = {
    description: 'iPad Air',
    price: 350
}

interface TaxCalculationOptions {
    products: Product[];
    tax: number;
}

export function taxCalculation( options: TaxCalculationOptions ): [number, number] {

    const { products, tax } = options;

    let total = 0;

    products.forEach( ({ price }) => {
        total += price;
    });
    const finalPrice = total + (total * tax);
    return [total, finalPrice];
}

const shoppingCart: Product[] = [phone, tablet];
const tax = 0.15;

const [subtotal, total] = taxCalculation({ products: shoppingCart, tax });

console.log('Subtotal: ', subtotal);
console.log('Total: ', total);

export {}