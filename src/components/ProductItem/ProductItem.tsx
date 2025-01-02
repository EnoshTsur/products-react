import { styled } from "styled-components";
import { ProductItemData } from "../../hooks/useFetchProducts";
import Button from "../ui/Button/Button";

const ProductContainer = styled.div`
    padding: 1rem;
    border-radius: 5px;
    border: 1px solid #d3d3d3;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    text-align: center;
    max-width: 20rem;
    justify-content: space-between;
    align-items: center;
`

const ProductImage = styled.img`
    width: 5rem;
    border-radius: 5px;
`

interface ProductItemProps {
    readonly data: ProductItemData
}

const ProductItem = ({data: { title, description, price, image }}: ProductItemProps) => (
    <ProductContainer>
        <ProductImage src={image} />
        <h2>{title} {price}$</h2>
        <p>{description}</p>
        <Button>Add to cart</Button>
    </ProductContainer>
)

export default ProductItem