import { useCallback } from "react";
import { Container, Button } from "react-bootstrap"
import { useDispatch } from "react-redux"
import { REQUEST_TYPE, ROLES } from "../../consts";
import { addRequestThunk } from "../../models/requests"

export const ProfileButtons = ({ role }) => {
    const dispatch = useDispatch()

    const toBeAdmin = useCallback(() => {
        dispatch(addRequestThunk(REQUEST_TYPE.TO_ADMIN))
    })
    const toBeUser = useCallback(() => {
        dispatch(addRequestThunk(REQUEST_TYPE.TO_USER))
    })
    let button;
    switch (role) {
        case ROLES.USER: {
            button = <Button onClick={toBeAdmin}>Заявка на администратора</Button>
            break
        }
        case ROLES.SHOPER: {
            button = <Button onClick={toBeUser}>Заявка на пользователя</Button>
            break
        }
    }

    return button? <Container>{button}</Container>: null
}