type ButtonType = "primary" | "dark";
type Variant = "outline" | 'default'
export interface ButtonProps {
  children: React.ReactNode;
  loading?: boolean;
  buttonType: ButtonType;
  variant?:Variant;
  size?:string;
  onClick?: () => void
  // Add other props as needed
}
