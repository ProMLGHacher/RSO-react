import { Navigate, RouterProvider, createBrowserRouter } from "react-router-dom"
import Login from "../pages/Login/Login"
import { useAppDispatch, useAppSelector } from "./store/storeHooks"
import Main, { navigation } from "../pages/Main/Main"
import Reg from "../pages/reg/Reg"
import { useEffect } from "react"
import { getUserThunk } from "../features/authorization/getUserThunk"
import { logOut } from "../features/authorization/authSlice"
import UploadDoc from "../pages/UploadDoc/UploadDoc"
import { NewQuestion } from "../pages/newQuestion/NewQuestion"

const nonAuth = createBrowserRouter([
    {
        path: '/login',
        element: <Login />
    },
    {
        path: '/reg',
        element: <Reg />
    },
    {
        path: '*',
        element: <Navigate to={'/login'} />
    }
])

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main />,
        children: [
            ...navigation
        ]
    },
    {
        path: '/uploaddoc/:type',
        element: <UploadDoc />
    },
    {
        path: '/newQuestion',
        element: <NewQuestion />
    },
    {
        path: '*',
        element: <Navigate to={'/'} />
    }
])


const RouterApp = () => {

    const dispatch = useAppDispatch()

    const token = useAppSelector(state => state.auth.tokens.accessToken)
    const user = useAppSelector(state => state.auth.user)


    useEffect(() => {
        if (!token) return
        dispatch(getUserThunk())
    }, [])

    if (token && !user) return 'Loading...'


    return (
        user ? <RouterProvider router={router} /> : <RouterProvider router={nonAuth} />
    )
}

export default RouterApp