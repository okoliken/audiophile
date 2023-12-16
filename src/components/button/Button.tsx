import { BaseButton } from "./button.styled";
import type { ButtonProps } from "./types";

export const Button = ({
  loading,
  children,
  buttonType,
  variant = "default",
}: ButtonProps) => {
  return (
    <BaseButton
      $buttonType={buttonType}
      type="submit"
      $variant={variant}
      disabled={loading}
    >
      {loading ? "Loading..." : children}
    </BaseButton>
  );
};
