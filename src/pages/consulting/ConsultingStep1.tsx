import React, { useState } from "react";
import Sidebar from "../../components/layout/Sidebar";
import Header from "../../components/layout/consultingHeader/Header";
import Card from "../../components/common/Card";
import Button from "../../components/common/Button";

const ConsultingStep1: React.FC = () => {
  const [industry, setIndustry] = useState("");
  const [facilityInput, setFacilityInput] = useState("");
  const [facilities, setFacilities] = useState<string[]>([]);

  // 설비 추가
  const addFacility = () => {
    const trimmed = facilityInput.trim();
    if (trimmed && !facilities.includes(trimmed)) {
      setFacilities((prev) => [...prev, trimmed]);
      setFacilityInput("");
    }
  };

  // 설비 제거
  const removeFacility = (target: string) => {
    setFacilities((prev) => prev.filter((f) => f !== target));
  };

  return (
    <div className="flex w-full max-w-[1440px] lg:max-w-[1520px] xl:max-w-[1920px]">
      {/* 사이드바 */}
      <Sidebar />

      {/* 우측 컨텐츠 영역 */}
      <div className="flex-1 flex flex-col bg-gray-50 min-h-screen">
        {/* 헤더 */}
        <Header />
        <div className="ml-16 mt-10">
          {/* 메인 컨텐츠 */}

          <main className="flex-1 p-6">
            <h1 className="text-2xl font-bold mb-6">산업군 및 보유설비 선택</h1>

            <Card>
              {/* 산업군 선택 */}
              <div className="mb-4">
                <label className="block mb-1 text-gray-600">산업군</label>
                <select
                  value={industry}
                  onChange={(e) => setIndustry(e.target.value)}
                  className="border border-gray-300 rounded p-2 w-full"
                >
                  <option value="">선택해주세요</option>
                  <option value="철강">철강</option>
                  <option value="화학">화학</option>
                  <option value="제조업">제조업</option>
                </select>
              </div>

              {/* 보유설비 입력 */}
              <div className="mb-4">
                <label className="block mb-1 text-gray-600">
                  보유설비 입력
                </label>
                <div className="flex items-center gap-2">
                  <input
                    type="text"
                    value={facilityInput}
                    onChange={(e) => setFacilityInput(e.target.value)}
                    placeholder="설비명을 입력하세요"
                    className="border border-gray-300 rounded p-2 flex-1"
                  />
                  <Button variant="primary" onClick={addFacility}>
                    추가
                  </Button>
                </div>

                {/* 태그 형태로 추가된 설비 표시 */}
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

              <div className="text-right">
                <Button variant="primary">다음</Button>
              </div>
            </Card>
          </main>
        </div>
      </div>
    </div>
  );
};

export default ConsultingStep1;
