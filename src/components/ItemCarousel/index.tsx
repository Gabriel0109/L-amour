import { CestaWrapper } from "./styles";

interface Products {
    name: string,
    description: string,

}


export function ItemCarousel(props: Products) {

    return (
        <CestaWrapper>
            <p>{props.name}</p>
            <small>{props.description}</small>
        </CestaWrapper>
    )

}