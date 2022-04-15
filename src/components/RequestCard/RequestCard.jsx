import { Card } from "react-bootstrap"
import { REQUEST_TYPE, REQUEST_TYPE_NAME, ROLES_NAME, STATUSES_NAME } from "../../consts"

export const RequestCard = ({ id, type, sender, currentRole, newRole, status, shopAddress, children }) => {
    return <Card>
        <Card.Header>
            <Card.Title>Заявка #{id}</Card.Title>
        </Card.Header>
        <Card.Body>
            <Card.Text>Тип: {REQUEST_TYPE_NAME[type]}</Card.Text>
            <Card.Text>Отправитель: {sender}</Card.Text>
            <Card.Text>Текущая роль отправителя: {ROLES_NAME[currentRole]}</Card.Text>
            <Card.Text>Желаемая роль отправителя: {ROLES_NAME[newRole]}</Card.Text>
            <Card.Text>Текущий статус: {STATUSES_NAME[status]}</Card.Text>
            {type === REQUEST_TYPE.TO_SHOPER && <Card.Text>{shopAddress}</Card.Text>}
        </Card.Body>
        {children}
    </Card>
}