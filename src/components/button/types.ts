type ButtonType = "primary" | "dark";
type Variant = "outline" | 'default'
export interface ButtonProps {
  children: React.ReactNode;
  loading?: boolean;
  buttonType: ButtonType;
  variant?:Variant;
  size?:string;
  onClick?: (arg: any) => void
  disabled?: boolean
  type?: string
  // Add other props as needed
}
