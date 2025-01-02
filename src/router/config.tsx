import Checkout from "../pages/Checkout"
import Home from "../pages/Home"

interface RouteItem {
    readonly path: string
    readonly component: React.ReactNode
}

type RouterConfig = ReadonlyArray<RouteItem>

export const config: RouterConfig = [
    {
        path: '/',
        component: <Home />
    },
    {
        path: '/checkout',
        component: <Checkout /> 
    }
]