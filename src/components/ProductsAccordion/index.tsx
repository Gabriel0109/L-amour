import Accordion from 'react-bootstrap/Accordion'
import { CestaItem, Container } from './styles'
import CestaUnique from '../../assets/img/unique.jpeg'
import CestaSoft from '../../assets/img/soft.jpeg'
import CestaBasic from '../../assets/img/basic.jpeg'
import CestaTradicional from '../../assets/img/tradicional.jpeg'



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
                                        <li>2 Pães caseirinhos</li>
                                        <li>2 Croassaints</li>
                                        <li>1 Croassaint de chocolate</li>
                                        <li>1 Mini manteiga</li>
                                        <li>1 Mini mel</li>
                                        <li>1 Mini doce-de-leite</li>
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
                    <Accordion.Item eventKey="3">
                        <Accordion.Header>Accordion Item #2</Accordion.Header>
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
                    <Accordion.Item eventKey="4">
                        <Accordion.Header>Accordion Item #2</Accordion.Header>
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
                </Accordion>
            </Container>
        </>


    )
}