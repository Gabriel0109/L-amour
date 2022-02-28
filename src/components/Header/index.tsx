import { Container } from "./styles";


export function Header(){
    return(
       <Container>
           <header>
                {/* <img src="" alt="" /> */}
                <div>
                    Logo
                </div>
                <hr />
                <nav>
                    <ul>
                        <li><a href="">Home</a></li>
                        <li><a href="">Sobre nós</a></li>
                        <li><a href="">Produtos</a></li>
                        <li><a href="">Feedback</a></li>
                        <li><a href="">Contato</a></li>
                    </ul>
                </nav>
           </header>
       </Container>

            )
}