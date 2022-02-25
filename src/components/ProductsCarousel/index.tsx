import { useEffect, useState } from 'react';
import Carousel from 'react-elastic-carousel'
import { api } from '../../services/api'
import { ItemCarousel } from '../ItemCarousel';
import { Container } from './styles'

const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2, itemsToScroll: 2 },
    { width: 768, itemsToShow: 3 },
    { width: 1200, itemsToShow: 3, itemsToScroll: 1 }
];
interface Cestas {
    name: string,
    description: string,
}
export function ProductsCarousel() {
    const [products, setProducts] = useState<Cestas[]>([])
    useEffect(() => {
        api.get('products')
            .then(response => setProducts(response.data))
    }, [])
    return (
        <Container>

            <Carousel
                isRTL={false}
                breakPoints={breakPoints}
            >
                {products.map(cestas => {
                    return <ItemCarousel
                        key={cestas.name}
                        name={cestas.name}
                        description={cestas.description}
                    />
                })}
            </Carousel>
        </Container>

    )
}