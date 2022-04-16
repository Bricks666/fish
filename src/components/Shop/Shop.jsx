import { Container } from "react-bootstrap"
import { useParams } from "react-router"
import { useShop } from "./useShop"
import { ShopCard } from "../ShopCard"
import { SalesmenList } from "../SalesmenList/SalesmenList"

export const Shop = () => {
    const { id } = useParams()
    const shop = useShop(id)
    

    if (!shop) {
        return null
    }
    console.log(shop)

    return <Container>
        <ShopCard {...shop} />
        <SalesmenList shopId={shop.id} salesmenAddress={shop.shopers} />
    </Container>
}