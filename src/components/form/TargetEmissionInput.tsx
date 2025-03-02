// src/components/form/TargetEmissionInput.tsx
import React from "react";

interface TargetEmissionInputProps {
  targetEmission: number | "";
  setTargetEmission: React.Dispatch<React.SetStateAction<number | "">>;
}

const TargetEmissionInput: React.FC<TargetEmissionInputProps> = ({
  targetEmission,
  setTargetEmission,
}) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value.replace(/[^0-9]/g, ""); // 숫자만 허용

    if (value.startsWith("0") && value.length > 1) {
      value = value.replace(/^0+/, ""); // 앞자리 0 제거
    }

    setTargetEmission(value === "" ? "" : Number(value)); // 빈 값은 "", 숫자는 number 변환
  };

  return (
    <div className="mb-6">
      <label className="block mb-1 text-gray-600">목표 배출량 (tCO₂-eq)</label>
      <input
        type="text"
        value={targetEmission === "" ? "" : targetEmission}
        onChange={handleChange}
        placeholder="목표 배출량을 입력하세요"
        className="border border-gray-300 rounded p-2 w-full appearance-none"
      />
    </div>
  );
};

export default TargetEmissionInput;
