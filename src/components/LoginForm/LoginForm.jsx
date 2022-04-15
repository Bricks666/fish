import { useCallback } from "react"
import { Button, Container, Form, Spinner } from "react-bootstrap"
import { useDispatch } from "react-redux"
import { useNavigate } from "react-router"
import { useAddresses, useField } from "../../hooks"
import { loginThunk } from "../../models/auth"

export const LoginForm = () => {
    const { addresses, isLoading } = useAddresses()
    const dispatch = useDispatch()
    const account = useField(0)
    const login = useField("")
    const password = useField("")
    const navigate = useNavigate()

    const onSubmit = useCallback(async(evt) => {
        evt.preventDefault()
        const isLogin = await dispatch(loginThunk(account.value, login.value, password.value))
        if(isLogin) {
            navigate("/profile", { replace: true })
        }
    }, [account.value, password.value, login.value, dispatch])

    return <Container>
                <Form onSubmit={onSubmit}>
                    <Form.Group>
                        {isLoading? 
                            <Spinner /> :
                            <>
                                <Form.Label>Аккаунт</Form.Label>
                                <Form.Select {...account}>
                                    <option value={0}/>
                                    {addresses.map((address) => <option value={address} key={address}>{address}</option>)}
                                </Form.Select>
                            </>
                        }
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Логин</Form.Label>
                        <Form.Control {...login} />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Пароль</Form.Label>
                        <Form.Control  {...password}/>
                    </Form.Group>
                    <Button type="submit">Войти</Button>
                </Form>
            </Container>
}