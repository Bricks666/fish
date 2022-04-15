import { useCallback } from "react"
import { Button, Nav, Navbar, NavDropdown } from "react-bootstrap"
import { useDispatch, useSelector } from "react-redux"
import { Link } from "react-router-dom"
import { ROLES } from "../../consts"
import { logoutAC } from "../../models/auth"
import { RoleNav } from "./RoleNav"

const navigation = [
    {
        label: "Магазины",
        path: [
            {
                label: "Список магазинов",
                path: "/shops/all"
            },
            {
                label: "Добавить магазин",
                path: "/shops/add",
                roles: [ROLES.ADMIN]
            }
        ],
    },
    {
        label: "Профиль",
        path: "/profile",
        roles:  [ROLES.GUEST],
        invert: true
    },
    {
        label: "Запросы",
        path: [
            {
                label: "Мои запросы",
                path: "/requests/my"
            }, 
            {
                label: "Все запросы",
                path: "/requests/all",
                roles: [ROLES.ADMIN]
            }
        ],
        roles: [ROLES.ADMIN, ROLES.SHOPER, ROLES.USER]
    }
]

export const Navigation = () => {
    const dispatch = useDispatch()
    const isAuth = useSelector(state => state.auth.isAuth)

    const onLogout = useCallback(() => {
        dispatch(logoutAC())
    }, [dispatch])
    return <Navbar>
        <Navbar.Text>Продавай и покупай</Navbar.Text>
        <Nav>
            {navigation.map((nav) => <NavigationItem {...nav} key={nav.label} />)}
        </Nav>
        {isAuth? <Button onClick={onLogout}>Выйти</Button>: <Button variant="link" as={Link} to="/login">Войти</Button>}
    </Navbar>
}


const NavigationItem = ({ label, path, roles, invert }) => {
    const item = <Nav.Item>{
        typeof path === "string"? 
                <Nav.Link as={Link} to={path}>{label}</Nav.Link>
            : <NavDropdown title={label}>
                {path.map(({ label, path, roles, invert }) => {
                const item = <NavDropdown.Item as={Link} to={path} key={path}>
                    {label}
                    </NavDropdown.Item>

                    return roles? <RoleNav roles={roles} invert={invert} key={path}>{item}</RoleNav>:item
                })}
            </NavDropdown>
        }</Nav.Item>

    return roles? <RoleNav roles={roles} invert={invert}>{item}</RoleNav>: item
}