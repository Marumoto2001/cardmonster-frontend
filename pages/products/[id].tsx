import { useRouter } from 'next/router'
import { products } from "./index"

export default function Product() {
    const router = useRouter()
    const { id } = router.query

    let product = products.find(el => id == el.id)

    return (
        <>
            { product != undefined ? (
                <>
                    <h1>Produkt: {product.title}</h1>
                    <p>Price: {product.price}</p>
                </>
            ): (
                <h1>Das Produkt konnte nicht gefunden werden.</h1>
            )}
        </>
    )   
}