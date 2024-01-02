import { IncrementButton } from "../styles/styles.styled"

export const CartItemIncrementer = () => {
    return (
        <>
        <IncrementButton>
            <p className="decrease">-</p>
            <p className="quantity">1</p>
            <p className="increase">+</p>
        </IncrementButton>
        </>
    )
}