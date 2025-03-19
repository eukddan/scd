import React from "react";

interface GenericInputProps {
  label: string;
  placeholder: string;
  value: number | "";
  setValue: React.Dispatch<React.SetStateAction<number | "">>;
}

const GenericInput = ({
  label,
  placeholder,
  value,
  setValue,
}: GenericInputProps) => {
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
      </div>
    </div>
  );
};

export default GenericInput;
