import { Container, Content } from './styles'
import Bread from '../../assets/img/bread.jpg'
export function About() {
    return (
        <>
            <Container>
                <Content className="left">
                    <img className="img-fluid" src={Bread} alt="Baguetes" />
                </Content>
                <Content className="right">
                    <h1>Quem somos nós?</h1>

                    <p>A empresa L'amour Cestas&Cia. surgiu durante a pandemia do Corona Vírus, Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean urna sem, scelerisque sed lectus eget, pretium sodales ipsum. Duis lacus lectus, cursus ut nibh vel. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean urna sem, scelerisque sed lectus eget, pretium sodales ipsum. Duis lacus lectus, cursus ut nibh vel</p>
                </Content>
            </Container>

        </>
    )
}