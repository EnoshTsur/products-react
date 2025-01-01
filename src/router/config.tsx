interface RouteItem {
    readonly path: string
    readonly component: React.ReactNode
}

type RouterConfig = ReadonlyArray<RouteItem>

export const config: RouterConfig = [
    {
        path: '/',
        component: <h1>Home</h1>
    },
    {
        path: '/checkout',
        component: <h1>Checkout</h1>
    }
]