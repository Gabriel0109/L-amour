import { Container } from "./styles";


export function Header(){
    return(
       <Container>
           <header>
                {/* <img src="" alt="L'amour Cestas&Cia." /> */}
                <div>
                    Logo
                </div>
                <hr />
                <nav>
                    <ul>
                        <li><a href="#Home">Home</a></li>
                        <li><a href="#About">Sobre nós</a></li>
                        <li><a href="#Products">Produtos</a></li>
                        <li><a href="#Comments">Feedback</a></li>
                        <li><a href="">Contato</a></li>
                    </ul>
                </nav>
           </header>
       </Container>

            )
}