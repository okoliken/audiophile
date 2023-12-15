type ButtonType = "primary" | "dark";

export interface ButtonProps {
  children: React.ReactNode;
  loading?: boolean;
  buttonType: ButtonType;
  // Add other props as needed
}
