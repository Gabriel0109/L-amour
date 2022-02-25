import Carousel from 'react-elastic-carousel'
import { Container } from './styles'

const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 1, itemsToScroll: 1 },
    { width: 768, itemsToShow: 1 },
    { width: 1200, itemsToShow: 1, itemsToScroll: 1 }
];
export function CommentsCarousel() {
    return (
        <Container>

            <Carousel
                isRTL={false}
                breakPoints={breakPoints}
            >

            </Carousel>
        </Container>

    )
}