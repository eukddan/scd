// src/pages/Consulting/ConsultingStep3.tsx
import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import Sidebar from "../../components/layout/Sidebar";
import Header from "../../components/layout/consultingHeader/Header";
import Card from "../../components/common/Card";
import Button from "../../components/common/Button";
import StepIndicator from "../../components/common/StepIndicator";
import InfoPreview from "../../components/common/InfoPreviewCard";
import TargetEmissionInput from "../../components/form/TargetEmissionInput";
import RoiPeriodInput from "../../components/form/RoiPeriodInput";
import useGoToNextStep from "../../hooks/useGoToNextStep";

const ConsultingStep3: React.FC = () => {
  const location = useLocation();
  const { industry, facilities, investment, emission } = location.state || {};

  const [targetEmission, setTargetEmission] = useState<number | "">("");
  const [roiPeriod, setRoiPeriod] = useState<number | "">("");

  const goToNextStep = useGoToNextStep();

  return (
    <div className="flex w-full">
      {/* 사이드바 */}
      <Sidebar />

      {/* 우측 컨텐츠 영역 */}
      <div className="flex-1 flex flex-col bg-gray-50 min-h-screen">
        <Header />

        {/* 🔥 수직 정렬을 위한 flex-col 적용 */}
        <div className="flex flex-col items-center w-full max-w-[1200px] px-6 md:px-10 mt-8 mx-auto gap-6">
          {/* 🔥 제목 & StepIndicator (수평 정렬) */}
          <div className="flex justify-between items-center w-full">
            <h1 className="text-2xl font-bold">
              목표 배출량 및 목표 ROI 기간 입력
            </h1>
            <StepIndicator
              currentStep={3}
              totalSteps={3}
              className="text-gray-700"
            />
          </div>

          {/* 🔥 입력 폼 & 정보 미리보기 (수평 정렬) */}
          <div className="flex justify-between items-start w-full gap-6">
            {/* 좌측 입력 폼 */}
            <div className="w-full max-w-[800px] flex-grow">
              <Card>
                <TargetEmissionInput
                  targetEmission={targetEmission}
                  setTargetEmission={setTargetEmission}
                />
                <RoiPeriodInput
                  roiPeriod={roiPeriod}
                  setRoiPeriod={setRoiPeriod}
                />

                {/* 다음 버튼 */}
                <div className="text-right mt-6">
                  <Button
                    variant="primary"
                    onClick={() =>
                      goToNextStep({
                        industry,
                        facilities,
                        investment,
                        emission,
                        targetEmission:
                          targetEmission === "" ? undefined : targetEmission,
                        roiPeriod: roiPeriod === "" ? undefined : roiPeriod,
                      })
                    }
                  >
                    완료
                  </Button>
                </div>
              </Card>
            </div>

            {/* 우측 입력 정보 미리보기 */}
            <div className="w-[280px] flex-shrink-0">
              <InfoPreview
                industry={industry}
                facilities={facilities}
                investment={investment === "" ? "입력되지 않음" : investment}
                emission={emission === "" ? "입력되지 않음" : emission}
                targetEmission={targetEmission}
                roiPeriod={roiPeriod}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConsultingStep3;
