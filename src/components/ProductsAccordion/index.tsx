import Accordion from 'react-bootstrap/Accordion'
import { CestaItem, Container } from './styles'
import CestaUnique from '../../assets/img/unique.jpeg'
import CestaSoft from '../../assets/img/soft.jpeg'
import CestaBasic from '../../assets/img/basic.jpeg'
import CestaTradicional from '../../assets/img/tradicional.jpeg'
import CestaPremium from '../../assets/img/premium.jpeg'



export function ProductAccordion() {

    return (
        <>
            <Container>
                <h1>Conheça nossos produtos</h1>
                <Accordion defaultActiveKey={['0']}>
                    <Accordion.Item eventKey="0">
                        <Accordion.Header>Cesta Unique</Accordion.Header>
                        <Accordion.Body>
                            <CestaItem>
                                <div className='div-img'>
                                    <img src={CestaUnique} alt="Cesta Unique" />
                                </div>
                                <div className='div-ingredients'>
                                    <p>Ingredientes:</p>

                                    <ul>
                                        <li>1 Suco natural de laranja</li>
                                        <li>1 Drip coffee</li>
                                        <li>1 Iogurte natural</li>
                                        <li>1 Granola tradicional</li>
                                        <li>2 Baguetes semi-italiano recheado com presunto e queijo mussarela</li>
                                        <li>1 Croassaint de chocolate</li>
                                        <li>1 Polenguinho</li>
                                        <li>Fruta da estação</li>
                                        <li>Cesta de pão-de-queijo e Palmier folhada doce</li>
                                    </ul>

                                    <small>
                                        Acompanha arranjo de flores e cesta mdf.
                                    </small>
                                </div>
                                <div className="pricing">
                                    R$ 130,00
                                </div>
                            </CestaItem>
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="1">
                        <Accordion.Header>Cesta Soft</Accordion.Header>
                        <Accordion.Body>
                            <CestaItem>
                                <div className='div-img'>
                                    <img src={CestaSoft} alt="Cesta Soft" />
                                </div>
                                <div className='div-ingredients'>
                                    <p>Ingredientes:</p>

                                    <ul>
                                        <li>1 Suco natural de laranja</li>
                                        <li>1 Drip coffee</li>
                                        <li>1 Iogurte natural</li>
                                        <li>1 Granola tradicional</li>
                                        <li>2 Baguetes semi-italiano</li>
                                        <li>2 Pães caseirinhos</li>
                                        <li>1 Mini manteiga</li>
                                        <li>1 Mini mel</li>
                                        <li>1 Brownie</li>
                                        <li>Peito de peru ou presunto</li>
                                        <li>Mussaerla</li>
                                        <li>Fruta da estação</li>
                                        <li>Cesta de pão-de-queijo e Palmier folhada doce</li>
                                    </ul>

                                    <small>
                                        Acompanha arranjo de flores e cesta mdf.
                                    </small>
                                </div>
                                <div className="pricing">
                                    R$ 165,00
                                </div>
                            </CestaItem>
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="2">
                        <Accordion.Header>Cesta Tradicional</Accordion.Header>
                        <Accordion.Body>
                            <CestaItem>
                                <div className='div-img'>
                                    <img src={CestaTradicional} alt="CestaTradicional" />
                                </div>
                                <div className='div-ingredients'>
                                    <p>Ingredientes:</p>

                                    <ul>
                                        <li>1 Suco natural de laranja</li>
                                        <li>2 Drip coffee</li>
                                        <li>1 Iogurte natural</li>
                                        <li>1 Granola tradicional</li>
                                        <li>2 Baguetes semi-italiano</li>
                                        <li>2 Croassaints</li>
                                        <li>1 Croassaint de chocolate</li>
                                        <li>1 Mini manteiga</li>
                                        <li>1 Mini mel</li>
                                        <li>1 Mini doce-de-leite</li>
                                        <li>1 Brownie</li>
                                        <li>Peito de peru ou presunto</li>
                                        <li>Mussaerla</li>
                                        <li>1 Salada de Frutas</li>
                                        <li>Cesta de pão-de-queijo e Palmier folhada doce</li>
                                    </ul>

                                    <small>
                                        Acompanha arranjo de flores e cesta mdf.
                                    </small>
                                </div>
                                <div className="pricing">
                                    R$ 195,00
                                </div>
                            </CestaItem>
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="3">
                        <Accordion.Header>Cesta Basic</Accordion.Header>
                        <Accordion.Body>
                            <CestaItem>
                                <div className='div-img'>
                                    <img src={CestaBasic} alt="Cesta Basic" />
                                </div>
                                <div className='div-ingredients'>
                                    <p>Ingredientes:</p>

                                    <ul>
                                        <li> 02 Drip Coffee</li>
                                        <li> 02 Chá Twinnings</li>
                                        <li> 01 Suco Natural de laranja</li>
                                        <li> 01 Granola tradicional</li>
                                        <li>01 Iogurte tradicional</li>
                                        <li>02 Pães caseirinhos</li>
                                        <li> 01 Baguete</li>
                                        <li> 02 Croissants</li>
                                        <li> 01 Croissant Chocolate</li>
                                        <li> 01 mini manteiga</li>
                                        <li>01 mini mel silvestre</li>
                                        <li>01 mini doce de leite</li>
                                        <li>  01 mini geléia de frutas vermelhas</li>
                                        <li>02 Brownies L’amour</li>
                                        <li>Cestinha de palmier folhadas</li>
                                        <li>Cestinha de pão de queijo</li>
                                        <li> 01 bowl de frutas da estação</li>
                                        <li>Presunto Parma ou Copa</li>
                                        <li> Queijo Brie</li>
                                    </ul>

                                    <small>
                                        Acompanha arranjo de flores, bowl de porcelana e cesta mdf.
                                    </small>
                                </div>
                                <div className="pricing">
                                    R$ 259,90
                                </div>
                            </CestaItem>
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="4">
                        <Accordion.Header>Cesta Premium</Accordion.Header>
                        <Accordion.Body>
                            <CestaItem>
                                <div className='div-img'>
                                    <img src={CestaPremium} alt="Cesta Premium" />
                                </div>
                                <div className='div-ingredients'>
                                    <p>Ingredientes:</p>

                                    <ul>
                                        <li> 02 Drip coffee</li>
                                        <li>    02 Chá Twinnings</li>
                                        <li>02 Cappuccinos</li>
                                        <li>02 Sucos Naturais de laranja</li>
                                        <li>01 Granola tradicional</li>
                                        <li>01 Iogurte tradicional</li>
                                        <li> 02 Pães caseirinhos</li>
                                        <li>02 Baguetes</li>
                                        <li> 02 Croissants</li>
                                        <li> 01 Croissant Chocolate</li>
                                        <li> 01 mini manteiga</li>
                                        <li> 01 mini mel silvestre</li>
                                        <li> 01 mini Nutella</li>
                                        <li> 01 mini doce de leite</li>
                                        <li> 02 Brownies L’amour</li>
                                        <li>Cestinha de palmier folhadas</li>
                                        <li>Cestinha de pão de queijo</li>
                                        <li>01 bowl de frutas da estação</li>
                                        <li> 01 Salada de frutas</li>
                                        <li>01 mini bomboniere de damasco em caldas</li>
                                        <li> Presunto Parma  ou Copa</li>
                                        <li>Queijo Brie</li>
                                        <li>01 mini bolo tsunami de chocolate e brigadeiro</li>
                                    </ul>

                                    <small>
                                        Acompanha arranjo de flores, bowl de porcelana, mini bomboniere e cesta mdf.
                                    </small>
                                </div>
                                <div className="pricing">
                                    R$ 330,00
                                </div>
                            </CestaItem>
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
            </Container>
        </>


    )
}