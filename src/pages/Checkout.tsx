import useCartStore from "../store/cartStore"

const Checkout = () => {
    const { cart } = useCartStore()
    console.log('!!!', cart)

    return  (
        <>checkout</>
    )
}

export default Checkout