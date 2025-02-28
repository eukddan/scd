import React from "react";

interface Option {
  label: string;
  value: string;
}

interface SelectProps {
  /**
   * 라벨 텍스트
   */
  label?: string;

  /**
   * Select 박스에 표시할 옵션 배열
   */
  options: Option[];

  /**
   * 현재 선택된 값
   */
  value: string;

  /**
   * 선택 값이 변경될 때 실행되는 콜백
   */
  onChange: (value: string) => void;

  /**
   * placeholder 역할 (첫 번째 옵션 대신)
   */
  placeholder?: string;

  /**
   * 추가적인 클래스명
   */
  className?: string;
}

const Select: React.FC<SelectProps> = ({
  label,
  options,
  value,
  onChange,
  placeholder = "선택해주세요",
  className = "",
}) => {
  return (
    <div className={`mb-4 ${className}`}>
      {label && <label className="block mb-1 text-gray-600">{label}</label>}
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="border border-gray-300 rounded p-2 w-full"
      >
        {/* placeholder 대체용 기본 option */}
        <option value="">{placeholder}</option>
        {options.map((opt) => (
          <option key={opt.value} value={opt.value}>
            {opt.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Select;
