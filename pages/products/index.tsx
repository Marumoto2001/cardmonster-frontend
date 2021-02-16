import Link from "next/link"

export interface Product {
    id: string;
    title: string;
    price: number;
}

export const products: Product[] = [
    {
        id: "1",
        title: "Glurak",
        price: 700,
    },
    {
        id: "2",
        title: "Pikachu",
        price: 200,
    },
    {
        id: "3",
        title: "Glumanda",
        price: 200,

        
    },
    {
        id: "4",
        title: "marcus",
        price: 0,

        
    }

]

export default function Products() {
    return (
        <>
        <h1>Produktübersicht</h1>
        <ul>
            { products.map(product => (
                <li>{product.title}, Preis: {product.price}€, <Link href={`/products/${product.id}`}>Zum Produkt</Link></li>
            ))}
        </ul>
        </>
    )
}