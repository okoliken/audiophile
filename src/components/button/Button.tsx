import { BaseButton } from "./button.styled";
import type { ButtonProps } from "./types";

export const Button = ({ loading, children }: ButtonProps) => {
  return (
    <BaseButton type="submit" disabled={loading}>
      {loading ? "Loading..." : children}
    </BaseButton>
  );
};
