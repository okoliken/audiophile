import { BaseButton } from "./button.styled";
import type { ButtonProps } from "./types";

export const Button = ({
  loading,
  children,
  buttonType,
  variant = "default",
  onClick,
}: ButtonProps) => {
  return (
    <BaseButton
      $buttonType={buttonType}
      type="submit"
      $variant={variant}
      disabled={loading}
      onClick={onClick}
    >
      {loading ? "Loading..." : children}
    </BaseButton>
  );
};
