import { useCallback } from "react"
import { Card, Button } from "react-bootstrap"
import { useDispatch } from "react-redux"
import { REQUEST_TYPE, ROLES } from "../../consts"
import { useUser } from "../../hooks"
import { addRequestThunk } from "../../models/requests"
import { deleteShopThunk } from "../../models/shops"

export const ShopCard = ({ id, name, city, shopers, address }) => {
    const dispatch = useDispatch()
    const { info: { role }} = useUser()
    const toBeShoper = useCallback(() => {
        dispatch(addRequestThunk(REQUEST_TYPE.TO_SHOPER, address))
    }, [address])
    const deleteShop = useCallback(() => {
        dispatch(deleteShopThunk(address))
    }, [address])
    return <Card>
        <Card.Header>
            <Card.Title>{name}</Card.Title>
        </Card.Header>
        <Card.Body>
            <Card.Text>Город {city}</Card.Text>
            <Card.Text>Количество продавцов {shopers.length}</Card.Text>
        </Card.Body>
        <Card.Footer>
            {role === ROLES.USER && <Button onClick={toBeShoper}>Стать продавцом</Button>}
            {role === ROLES.ADMIN && <Button onClick={deleteShop} variant="danger">Удалить</Button>}
        </Card.Footer>
    </Card>
}