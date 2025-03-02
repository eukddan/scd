// src/components/form/RoiPeriodInput.tsx
import React from "react";

interface RoiPeriodInputProps {
  roiPeriod: number | "";
  setRoiPeriod: React.Dispatch<React.SetStateAction<number | "">>;
}

const RoiPeriodInput: React.FC<RoiPeriodInputProps> = ({
  roiPeriod,
  setRoiPeriod,
}) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value.replace(/[^0-9]/g, ""); // 숫자만 허용

    if (value.startsWith("0") && value.length > 1) {
      value = value.replace(/^0+/, ""); // 앞자리 0 제거
    }

    setRoiPeriod(value === "" ? "" : Number(value));
  };

  return (
    <div className="mb-6">
      <label className="block mb-1 text-gray-600">목표 ROI 기간 (년)</label>
      <input
        type="text"
        value={roiPeriod === "" ? "" : roiPeriod}
        onChange={handleChange}
        placeholder="목표 ROI 기간을 입력하세요"
        className="border border-gray-300 rounded p-2 w-full appearance-none"
      />
    </div>
  );
};

export default RoiPeriodInput;
