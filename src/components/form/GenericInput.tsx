import React from "react";

interface GenericInputProps {
  label: string;
  placeholder: string;
  value: number | "";
  setValue: (value: number | "") => void; // ✅ Zustand과 호환되도록 수정
  unit?: string; // 단위 (예: 원, tCO₂-eq, 년)
}

const GenericInput: React.FC<GenericInputProps> = ({
  label,
  placeholder,
  value,
  setValue,
  unit,
}) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let inputValue = e.target.value.replace(/[^0-9]/g, ""); // 숫자만 입력 가능
    if (inputValue.startsWith("0") && inputValue.length > 1) {
      inputValue = inputValue.replace(/^0+/, ""); // 앞자리 0 제거
    }
    setValue(inputValue === "" ? "" : Number(inputValue)); // 빈 값이면 "", 숫자면 number 변환
  };

  return (
    <div className="mb-6">
      <label className="block mb-1 text-gray-600">{label}</label>
      <div className="relative">
        <input
          type="text"
          value={value === "" ? "" : value}
          onChange={handleChange}
          placeholder={placeholder}
          className="border border-gray-300 rounded p-2 w-full appearance-none"
        />
        {unit && (
          <span className="absolute right-3 top-2 text-gray-500">{unit}</span>
        )}
      </div>
    </div>
  );
};

export default GenericInput;
