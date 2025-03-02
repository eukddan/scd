import React, { useState } from "react";
import Sidebar from "../../components/layout/Sidebar";
import Header from "../../components/layout/consultingHeader/Header";
import Card from "../../components/common/Card";
import Button from "../../components/common/Button";
import InfoPreview from "../../components/common/InfoPreviewCard";
import FacilityInput from "../../components/form/FacilityInput";
import IndustryInput from "../../components/form/IndustryInput";
import StepIndicator from "../../components/common/StepIndicator";
import useGoToNextStep from "../../hooks/useGoToNextStep"; // Step 이동 Hook

const ConsultingStep1: React.FC = () => {
  const [industry, setIndustry] = useState(""); // 산업군 선택 상태
  const [facilities, setFacilities] = useState<string[]>([]); // 보유 설비 목록

  const goToNextStep = useGoToNextStep(); // 다음 Step으로 이동하는 Hook

  return (
    <div className="flex w-full">
      {/* 사이드바 */}
      <Sidebar />

      {/* 우측 컨텐츠 영역 */}
      <div className="flex-1 flex flex-col bg-gray-50 min-h-screen">
        {/* 헤더 */}
        <Header />

        {/* 🔥 수직 정렬을 위한 flex-col 적용 */}
        <div className="flex flex-col items-center w-full max-w-[1200px] px-6 md:px-10 mt-8 mx-auto gap-6">
          {/* 🔥 제목 & StepIndicator (수평 정렬) */}
          <div className="flex justify-between items-center w-full">
            <h1 className="text-2xl font-bold">산업군 및 보유설비 선택</h1>
            <StepIndicator
              currentStep={1}
              totalSteps={3}
              className="text-gray-700"
            />
          </div>

          {/* 🔥 입력 폼 & 정보 미리보기 (수평 정렬) */}
          <div className="flex justify-between items-start w-full gap-6">
            {/* 좌측 입력 폼 */}
            <div className="w-full max-w-[800px] flex-grow">
              <Card>
                <IndustryInput industry={industry} setIndustry={setIndustry} />
                <FacilityInput
                  facilities={facilities}
                  setFacilities={setFacilities}
                />

                {/* 다음 버튼 */}
                <div className="text-right mt-6">
                  <Button
                    variant="primary"
                    onClick={() => goToNextStep({ industry, facilities })}
                  >
                    다음
                  </Button>
                </div>
              </Card>
            </div>

            {/* 우측 입력 정보 미리보기 */}
            <div className="w-[280px] flex-shrink-0">
              <InfoPreview industry={industry} facilities={facilities} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConsultingStep1;
