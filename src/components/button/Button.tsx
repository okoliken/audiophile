import { BaseButton } from "./button.styled"
import type { ButtonProps } from './types'

export const Button: React.FC<ButtonProps> = ({ loading, children }) => {
    return (
        <BaseButton type="submit" disabled={loading}>
            {loading ? "Loading..." : children}
        </BaseButton>
    )
}