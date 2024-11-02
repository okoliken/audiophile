type ButtonType = "primary" | "secondary" | "transparent";
export type ButtonVariant = "outline" | "solid" | "ghost";

export interface ButtonProps {
  children: React.ReactNode;
  loading?: boolean;
  buttonType?: ButtonType;
  variant?: ButtonVariant;
  size?: "default" | "large";
  onClick?: (arg: any) => void
  disabled?: boolean
  type?: "button" | "submit" | "reset"
  // Add other props as needed
}
