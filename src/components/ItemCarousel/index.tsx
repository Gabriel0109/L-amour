
import { useEffect, useState } from 'react'
import { api } from '../../services/api'

interface Products {
    name: string,
    description: string,
    src_url: string,


}

export function ItemCarousel() {
    const [products, setProducts] = useState<Products[]>([])
    useEffect(() => {
        api.get('products')
            .then(response => console.log(response.data))
    }, [])
}