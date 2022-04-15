import { Container, ListGroup, Spinner, Button } from "react-bootstrap"
import { useShops } from "../../hooks"
import { ShopCard } from "../ShopCard"
import { Link } from "react-router-dom"

export const ShopsList = () => {
    const { isLoading, shops } = useShops()
    console.log(shops)
    return <Container>
        {isLoading? <Spinner />:
        <ListGroup>
            {shops.map((shop) => <ListGroup.Item key={shop.id}>
                <ShopCard {...shop} />
                <Button variant="link" to={`/shops/${shop.id}`} as={Link}>Подробнее</Button>
            </ListGroup.Item>)}    
        </ListGroup>}
    </Container>
}