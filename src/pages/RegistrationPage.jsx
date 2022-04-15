import { Container, Button } from "react-bootstrap"
import { Link } from "react-router-dom"
import { RegistrationForm } from "../components/RegistrationForm"

export const RegistrationPage = () => {
    return <Container>
        <h2>Регистрация</h2>
        <RegistrationForm />
        <Button variant="link" as={Link} to="/login">Войти</Button>
    </Container>
}