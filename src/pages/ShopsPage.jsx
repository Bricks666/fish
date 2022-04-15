import { Container } from "react-bootstrap"
import { Navigate, Route, Routes } from "react-router"
import { Shop } from "../components/Shop"
import { AddShop } from "../components/AddShop"
import { ShopsList } from "../components/ShopsList"
import { useDispatch } from "react-redux"
import { useEffect } from "react"
import { resetShopsAC } from "../models/shops"

export const ShopsPage = () => {
    const dispatch = useDispatch()

    useEffect(() => {
        return () => {
            dispatch(resetShopsAC())
        }
    }, [])
    return <Container>
        <Routes>
            <Route path="/all" element={<ShopsList />} />
            <Route path="/add" element={<AddShop />} />
            <Route path=":id" element={<Shop />}/>
            <Route path="*" element={<Navigate to="/"  replace={true} />} />
        </Routes>
    </Container>
}