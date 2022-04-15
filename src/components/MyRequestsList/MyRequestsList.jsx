import { Container, ListGroup, Spinner } from "react-bootstrap"
import { RequestCard } from "../RequestCard"
import { useMyRequests } from "./useMyRequests"

export const MyRequestsList = () => {
    const { isLoading,requests } = useMyRequests()
    return <Container>
        {isLoading? <Spinner />:
            <ListGroup>
                {requests.map(request => <ListGroup.Item key={request.id}>
                    <RequestCard {...request}/>
                </ListGroup.Item>)}
            </ListGroup>
        }
    </Container>
}