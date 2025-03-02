// src/components/common/InfoPreviewCard.tsx
import React from "react";

interface InfoPreviewProps {
  industry: string;
  facilities: string[];
  investment?: number | "";
  emission?: number | "";
  targetEmission?: number | "";
  roiPeriod?: number | "";
}

const InfoPreview: React.FC<InfoPreviewProps> = ({
  industry,
  facilities,
  investment,
  emission,
  targetEmission,
  roiPeriod,
}) => {
  return (
    <div className="bg-white shadow rounded-lg p-4 w-full max-w-[280px]">
      <h2 className="text-lg font-bold mb-4">입력된 정보</h2>

      {/* 산업군 */}
      <p className="text-gray-600 mb-2">
        <strong>산업군:</strong> {industry || "선택 안됨"}
      </p>

      {/* 보유 설비 */}
      <p className="text-gray-600 mb-2">
        <strong>보유설비:</strong>{" "}
        {facilities && facilities.length > 0
          ? facilities.join(", ")
          : "입력된 설비 없음"}
      </p>

      {/* 투자 가능 금액 */}
      {investment !== undefined && (
        <p className="text-gray-600 mb-2">
          <strong>투자 가능 금액:</strong>{" "}
          {investment !== ""
            ? `${investment.toLocaleString()} 원`
            : "입력되지 않음"}
        </p>
      )}

      {/* 현재 배출량 */}
      {emission !== undefined && (
        <p className="text-gray-600 mb-2">
          <strong>현재 배출량:</strong>{" "}
          {emission !== "" ? `${emission} tCO₂` : "입력되지 않음"}
        </p>
      )}

      {/* 목표 배출량 (Step3 추가) */}
      {targetEmission !== undefined && (
        <p className="text-gray-600 mb-2">
          <strong>목표 배출량:</strong>{" "}
          {targetEmission !== "" ? `${targetEmission} tCO₂` : "입력되지 않음"}
        </p>
      )}

      {/* 목표 ROI 기간 (Step3 추가) */}
      {roiPeriod !== undefined && (
        <p className="text-gray-600 ">
          <strong>목표 ROI 기간:</strong>{" "}
          {roiPeriod !== "" ? `${roiPeriod} 년` : "입력되지 않음"}
        </p>
      )}
    </div>
  );
};

export default InfoPreview;
