import { BaseButton } from "./button.styled";
import type { ButtonProps } from "./types";

export const Button = ({ loading, children, buttonType }: ButtonProps) => {
  return (
    <BaseButton $buttonType={buttonType} type="submit" disabled={loading}>
      {loading ? "Loading..." : children}
    </BaseButton>
  );
};
