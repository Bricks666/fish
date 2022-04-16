import { Container, ListGroup, Spinner } from "react-bootstrap"
import { UserInfo } from "../UserInfo"
import { useSalesmen } from "./useSalesmen"

export const SalesmenList = ({ shopId, salesmenAddress  }) => {
    const { isLoading, salesmen } = useSalesmen(shopId, salesmenAddress)

    return <Container>
        <h3>Продавцы</h3>
        {isLoading?
        <Spinner />:
        <ListGroup>
            {salesmen.map((salesman) => <ListGroup.Item key={salesman.address}>
                <UserInfo {...salesman}/>
            </ListGroup.Item>)}    
        </ListGroup>}
    </Container>

}