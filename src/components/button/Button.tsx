import { BaseButton } from "./button.styled";
import type { ButtonProps } from "./types";

export const Button = ({
  loading,
  children,
  buttonType,
  variant = "default",
  onClick,
  size = "default",
}: ButtonProps) => {
  return (
    <BaseButton
      $buttonType={buttonType}
      type="button"
      $variant={variant}
      disabled={loading}
      onClick={onClick}
      $size={size}
    >
      {loading ? "Loading..." : children}
    </BaseButton>
  );
};
