import { Container } from "./styles";
import cup from '../../assets/img/cup.svg'
import  croassaint from '../../assets/img/croassaint.svg'
import shop from '../../assets/img/shop.svg'
export function Values(){
    return (
        <Container>
            <div>
                <img src={cup} alt="Cupcake" />
                <p>Main text</p>
                <small>small text</small>
            </div>
            <div>
                <img src={ croassaint} alt="Cupcake" />
                <p>Main text</p>
                <small>small text</small>
            </div>
            <div>
                <img src={shop} alt="Cupcake" />
                <p>Main text</p>
                <small>small text</small>
            </div>
        </Container>
    )
}