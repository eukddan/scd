import React from "react";

interface CardProps {
  children: React.ReactNode;
  className?: string;
}

const Card = ({ children, className = "" }: CardProps) => {
  return (
    <div
      className={`bg-white rounded-lg shadow p-8 w-full max-w-[800px] mx-auto ${className}`}
    >
      {children}
    </div>
  );
};

export default Card;
