import React from "react";

interface InvestmentInputProps {
  investment: number | ""; // ✅ 숫자 또는 빈 문자열 허용
  setInvestment: React.Dispatch<React.SetStateAction<number | "">>;
}

const InvestmentInput: React.FC<InvestmentInputProps> = ({
  investment,
  setInvestment,
}) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value.replace(/[^0-9]/g, ""); // 숫자만 허용

    if (value.startsWith("0") && value.length > 1) {
      value = value.replace(/^0+/, ""); // 앞자리 0 제거
    }

    setInvestment(value === "" ? "" : Number(value)); // ✅ 빈 값이면 "", 숫자면 number로 변환
  };

  return (
    <div className="mb-6">
      <label className="block mb-1 text-gray-600">투자 가능 금액 (원)</label>
      <input
        type="text"
        value={investment}
        onChange={handleChange}
        placeholder="투자 가능 금액을 입력하세요"
        className="border border-gray-300 rounded p-2 w-full appearance-none"
      />
    </div>
  );
};

export default InvestmentInput;
