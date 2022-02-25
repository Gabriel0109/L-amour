import Carousel from 'react-elastic-carousel'
import { ItemCarousel } from './styles';

const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2, itemsToScroll: 2 },
    { width: 768, itemsToShow: 3 },
    { width: 1200, itemsToShow: 4 }
];
export function ProductsCarousel() {

    return (
        <Carousel isRTL={false} breakPoints={breakPoints}>
            <ItemCarousel>
                oi
            </ItemCarousel>
            <ItemCarousel>
                oi
            </ItemCarousel>
            <ItemCarousel>
                oi
            </ItemCarousel>
            <ItemCarousel>
                oi
            </ItemCarousel>
            <ItemCarousel>
                oi
            </ItemCarousel>
            <ItemCarousel>
                oi
            </ItemCarousel>
            <ItemCarousel>
                oi
            </ItemCarousel>
            <ItemCarousel>
                oi
            </ItemCarousel>
        </Carousel>
    )
}