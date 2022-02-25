import { Values } from "../Values"
import { Container, Content } from "./styles"

export function Banner() {
    return (
        <Container>
            <Content>
                <h1>
                    Lorem ipsum dolor sit amen. <span>Morbi dapibus magna diam</span>
                </h1>
                <p className="subtitle">
                    Lorem ipsum dolor sit amen.
                </p>
                <Values />
            </Content>
        </Container>


    )
}