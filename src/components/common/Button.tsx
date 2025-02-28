// src/components/common/Button/Button.tsx
import React from "react";

type ButtonVariant = "primary" | "secondary" | "outline";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  children: React.ReactNode;
  className?: string;
}

const variantStyles: Record<ButtonVariant, string> = {
  primary: "bg-blue-600 text-white hover:bg-blue-700",
  secondary: "bg-gray-600 text-white hover:bg-gray-700",
  outline:
    "bg-transparent text-blue-600 border border-blue-600 hover:bg-blue-50",
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
