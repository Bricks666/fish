import { useCallback } from "react"
import { Card, Button } from "react-bootstrap"
import { useDispatch } from "react-redux"
import { STATUSES } from "../../../consts"
import { acceptRequestThunk, cancelRequestThunk } from "../../../models/requests"
import { RequestCard } from "../../RequestCard"

export const AdminRequestCard = (props) => {
    
    const isFinish = props.status !== STATUSES.WAITING
    const dispatch = useDispatch()

    const onAccept = useCallback(() => {
        dispatch(acceptRequestThunk(props.id))
    }, [props.id])
    const onCancel = useCallback(() => {
        dispatch(cancelRequestThunk(props.id))
    }, [props.id])
    return <RequestCard {...props}>
        {!isFinish && <Card.Footer>
                <Button variant="success" onClick={onAccept}>Принять</Button>
                <Button variant="danger" onClick={onCancel}>Отклонить</Button>
        </Card.Footer>}
    </RequestCard>
}