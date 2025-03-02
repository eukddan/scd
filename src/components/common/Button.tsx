import React from "react";

type ButtonVariant = "primary" | "secondary" | "outline";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  children: React.ReactNode;
  className?: string;
}

const variantStyles: Record<ButtonVariant, string> = {
  primary: "bg-black text-white hover:bg-gray-900", // ✅ Black
  secondary: "bg-white text-black border border-gray-300 hover:bg-gray-200", // ✅ White로 변경
  outline: "bg-transparent text-black border border-black hover:bg-gray-100",
};

const Button: React.FC<ButtonProps> = ({
  variant = "primary",
  children,
  className = "",
  ...rest
}) => {
  return (
    <button
      className={`
        px-4 py-2 rounded-md font-medium transition-colors
        ${variantStyles[variant]} ${className}
      `}
      {...rest}
    >
      {children}
    </button>
  );
};

export default Button;
