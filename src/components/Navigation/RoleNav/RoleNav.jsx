import { useUser } from "../../../hooks"

export const RoleNav = ({ children, roles, invert }) => {
    const { info: { role }} = useUser()

    if(invert && roles.includes(role) || !invert && !roles.includes(role)) {
        return null
    }

    return children
}