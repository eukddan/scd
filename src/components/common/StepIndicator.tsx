import React from "react";

interface StepIndicatorProps {
  /** 현재 단계(1부터 시작) */
  currentStep: number;
  /** 전체 단계 개수 */
  totalSteps: number;
  /**
   * 텍스트 정렬 (기본값: "right")
   * "left", "center", "right" 중 하나 선택 가능
   */
  align?: "left" | "center" | "right";
  /** 추가적인 클래스명 */
  className?: string;
}

const StepIndicator = ({
  currentStep,
  totalSteps,
  align = "right",
  className = "",
}: StepIndicatorProps) => {
  const alignmentClass =
    align === "center"
      ? "text-center"
      : align === "left"
      ? "text-left"
      : "text-right";

  return (
    <div
      className={`text-sm font-bold text-gray-600 ${alignmentClass} ${className}`}
    >
      Step {currentStep} / {totalSteps}
    </div>
  );
};

export default StepIndicator;
