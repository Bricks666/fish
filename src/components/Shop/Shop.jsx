import { Container } from "react-bootstrap"
import { useParams } from "react-router"
import { useShop } from "./useShop"
import { ShopCard } from "../ShopCard"

export const Shop = () => {
    const { id } = useParams()
    const shop = useShop(id)
    

    if (!shop) {
        return null
    }

    return <Container>
        <ShopCard {...shop} />
    </Container>
}