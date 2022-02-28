import Accordion from 'react-bootstrap/Accordion'
import { CestaItem, Container } from './styles'
import CestaSoft from '../../assets/img/cesta-soft.jpg'



export function ProductAccordion() {

    return (
        <>
            <Container>
                <Accordion defaultActiveKey={['0']}>
                    <Accordion.Item eventKey="0">
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
                    <Accordion.Item eventKey="1">
                        <Accordion.Header>Accordion Item #2</Accordion.Header>
                        <Accordion.Body>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                            commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                            velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                            cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
                            est laborum.
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="2">
                        <Accordion.Header>Accordion Item #2</Accordion.Header>
                        <Accordion.Body>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                            commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                            velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                            cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
                            est laborum.
                        </Accordion.Body>
                    </Accordion.Item>     
                    <Accordion.Item eventKey="3">
                        <Accordion.Header>Accordion Item #2</Accordion.Header>
                        <Accordion.Body>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                            commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                            velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                            cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
                            est laborum.
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
            </Container>
        </>


    )
}