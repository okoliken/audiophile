import { BaseButton } from "./button.styled";
import type { ButtonProps } from "./types";

export const Button = ({
  loading = false,
  children,
  buttonType,
  variant = "default",
  onClick,
  size = "default",
  disabled = false,
  type = "button"
}: ButtonProps) => {
  return (
    <BaseButton
      $buttonType={buttonType}
      type={type}
      $variant={variant}
      disabled={disabled || loading}
      onClick={onClick}
      $size={size}
    >
      {loading ? "Loading..." : children} 
    </BaseButton>
  );
};
