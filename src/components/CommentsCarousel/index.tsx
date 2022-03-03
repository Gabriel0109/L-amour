import Carousel from 'react-elastic-carousel'
import { Container, ItemCarousel } from './styles'

const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 1, itemsToScroll: 1 },
    { width: 768, itemsToShow: 1 },
    { width: 1200, itemsToShow: 1, itemsToScroll: 1 }
];

export function CommentsCarousel() {
    
    return (
        <Container>
            <h1>O quem dizem sobre nós</h1>
            <Carousel
                isRTL={false}
                breakPoints={breakPoints}
                showArrows={false}
            >
                <ItemCarousel>
                    <header>
                        <p>" Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque posuere ipsum nisi, eget elementum leo lacinia eu. "</p>
                    </header>
                    <small>
                        nome pessoa
                    </small>
                </ItemCarousel>
                <ItemCarousel>
                    <header>
                        <p>" Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque posuere ipsum nisi, eget elementum leo lacinia eu. "</p>
                    </header>
                    <small>
                        nome pessoa
                    </small>
                </ItemCarousel>
                <ItemCarousel>
                    <header>
                        <p>" Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque posuere ipsum nisi, eget elementum leo lacinia eu. "</p>
                    </header>
                    <small>
                        nome pessoa
                    </small>
                </ItemCarousel>
            </Carousel>
        </Container>

    )
}