import type { ButtonProps } from "./types";
import { Button as BaseButton } from "./button.styles";

export const Button = ({
  loading = false,
  children,
  buttonType = "primary",
  variant = "solid",
  onClick,
  size = "default",
  disabled = false,
  type = "button",
}: ButtonProps) => {
  return (
    <BaseButton
      onClick={onClick}
      type={type}
      size={size}
      buttonType={buttonType}
      variant={variant}
      disabled={disabled}
    >
      {loading ? "Loading..." : children}
    </BaseButton>
  );
};
