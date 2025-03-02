import React, { useState } from "react";

interface FacilityManagerProps {
  facilities: string[];
  setFacilities: React.Dispatch<React.SetStateAction<string[]>>;
}

const FacilityManager: React.FC<FacilityManagerProps> = ({
  facilities,
  setFacilities,
}) => {
  const [facilityInput, setFacilityInput] = useState("");

  // 설비 추가
  const addFacility = () => {
    const trimmed = facilityInput.trim();
    if (trimmed && !facilities.includes(trimmed)) {
      setFacilities((prev) => [...prev, trimmed]);
      setFacilityInput("");
    }
  };

  // 엔터 키 입력 시 추가
  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      event.preventDefault(); // 기본 폼 제출 방지
      addFacility();
    }
  };

  // 설비 제거
  const removeFacility = (target: string) => {
    setFacilities((prev) => prev.filter((f) => f !== target));
  };

  return (
    <div>
      {/* 보유설비 입력 */}
      <label className="block mb-1 text-gray-600">보유설비 입력</label>
      <div className="flex items-center gap-2">
        <input
          type="text"
          value={facilityInput}
          onChange={(e) => setFacilityInput(e.target.value)}
          onKeyDown={handleKeyDown} // 🔥 엔터 키 입력 가능
          placeholder="설비명을 입력하세요"
          className="border border-gray-300 rounded p-2 flex-1"
        />
      </div>

      {/* 추가된 설비 리스트 */}
      <div className="mt-2 flex flex-wrap gap-2">
        {facilities.map((facility) => (
          <span
            key={facility}
            className="bg-gray-200 text-gray-800 px-2 py-1 rounded flex items-center gap-2"
          >
            {facility}
            <button
              onClick={() => removeFacility(facility)}
              className="text-red-500 hover:text-red-700 font-bold"
            >
              &times;
            </button>
          </span>
        ))}
      </div>
    </div>
  );
};

export default FacilityManager;
