import { Container } from "./styles";
import cup from '../../assets/img/cup.svg'
import  croassaint from '../../assets/img/croassaint.svg'
import shop from '../../assets/img/shop.svg'
export function Values(){
    return (
        <Container>
            <div>
                <img src={cup} alt="Caneca de café" />
                <p>Alta qualidade</p>
                <small>small text</small>
            </div>
            <div>
                <img src={ croassaint} alt="Croassaint" />
                <p>Produtos frescos</p>
                <small>small text</small>
            </div>
            <div>
                <img src={shop} alt="Loja" />
                <p>Feitos a mão</p>
                <small>small text</small>
            </div>
        </Container>
    )
}