import { Values } from "../Values"
import { Container, Content } from "./styles"

export function Banner() {
    return (
        <Container id="Home">
            <Content>
                <h1>
                    Cestas de café da manhã artesanais <span>Com muito amor e carinho</span>
                </h1>
                <p className="subtitle">
                    Lorem ipsum dolor sit amen.
                </p>
                <Values />
            </Content>
        </Container>


    )
}