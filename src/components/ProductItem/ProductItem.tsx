import { styled } from "styled-components";
import { ProductItemData } from "../../hooks/useFetchProducts";

const ProductContainer = styled.div`
    padding: 1rem;
    border-radius: 5px;
    border: 1px solid #d3d3d3;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    text-align: center;
    max-width: 20rem;
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
        <h3>{title} {price}$</h3>
        <hr />
        <p>{description}</p>
    </ProductContainer>
)

export default ProductItem