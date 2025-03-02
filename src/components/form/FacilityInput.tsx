import React, { useState } from "react";

interface FacilityInputProps {
  facilities: string[];
  setFacilities: (facilities: string[]) => void; // ✅ Zustand과 호환되는 타입
}

const FacilityInput: React.FC<FacilityInputProps> = ({
  facilities,
  setFacilities,
}) => {
  const [facilityInput, setFacilityInput] = useState("");

  // 설비 추가 함수
  const addFacility = () => {
    const trimmed = facilityInput.trim();
    if (trimmed && !facilities.includes(trimmed)) {
      setFacilities([...facilities, trimmed]); // ✅ 새로운 배열로 상태 업데이트
      setFacilityInput(""); // 입력창 초기화
    }
  };

  // Enter 키 입력 시 추가 & 기본 동작 방지
  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      event.preventDefault(); // ✅ 페이지 새로고침 방지
      addFacility();
    }
  };

  // 설비 제거 함수
  const removeFacility = (target: string) => {
    setFacilities(facilities.filter((f) => f !== target)); // ✅ 새로운 배열로 상태 업데이트
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
          onKeyDown={handleKeyDown} // ✅ Enter 키 입력 가능 + 기본 동작 방지
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

export default FacilityInput;
