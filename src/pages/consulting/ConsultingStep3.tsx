import React from "react";
import { useConsultingStore } from "../../store/store"; // Zustand Store 가져오기
import useGoToNextStep from "../../hooks/useGoToNextStep"; // 🚀 useGoToNextStep 가져오기
import useGoToPreviousStep from "../../hooks/useGoToPreviousStep"; // 🚀 useGoToPreviousStep 가져오기

import Sidebar from "../../components/sidebar/Sidebar";
import Header from "../../components/header/ConsultingPageHeader";
import Card from "../../components/card/Card";
import Button from "../../components/common/Button";
import StepIndicator from "../../components/common/StepIndicator";
import GenericInput from "../../components/input-form/GenericInput";
import InfoPreview from "../../components/card/InfoPreviewCard";

const ConsultingStep3 = () => {
  const goToNextStep = useGoToNextStep(); // 🚀 다음 단계 이동 훅 사용
  const goToPreviousStep = useGoToPreviousStep(); // 🚀 이전 단계 이동 훅 사용
  const {
    industry,
    facilities,
    investment,
    emission,
    targetEmission,
    roiPeriod,
    setTargetEmission,
    setRoiPeriod,
  } = useConsultingStore();

  return (
    <div className="flex w-full">
      <Sidebar />
      <div className="flex-1 flex flex-col bg-gray-50 min-h-screen">
        <Header />
        <div className="flex flex-col items-center w-full max-w-[1200px] px-6 md:px-10 mt-8 mx-auto gap-6">
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
          <div className="flex justify-between items-start w-full gap-6">
            <div className="w-full max-w-[800px] flex-grow">
              <Card>
                {/* ✅ 목표 배출량 입력 */}
                <GenericInput
                  label="목표 배출량"
                  placeholder="목표 배출량을 입력하세요"
                  value={targetEmission || ""}
                  setValue={(value) => setTargetEmission(value as number)}
                />

                {/* ✅ 목표 ROI 기간 입력 */}
                <GenericInput
                  label="목표 ROI 기간"
                  placeholder="목표 ROI 기간을 입력하세요"
                  value={roiPeriod || ""}
                  setValue={(value) => setRoiPeriod(value as number)}
                />

                {/* 🔥 버튼 그룹 (이전 & 완료) */}
                <div className="flex justify-between mt-6">
                  <Button variant="secondary" onClick={goToPreviousStep}>
                    이전
                  </Button>
                  <Button variant="primary" onClick={goToNextStep}>
                    완료
                  </Button>
                </div>
              </Card>
            </div>

            {/* ✅ Zustand 상태로 InfoPreview 업데이트 */}
            <div className="w-[280px] flex-shrink-0">
              <InfoPreview
                industry={industry || "선택 안됨"}
                facilities={
                  facilities.length > 0 ? facilities : ["입력된 설비 없음"]
                }
                investment={investment !== undefined ? investment : ""}
                emission={emission !== undefined ? emission : ""}
                targetEmission={
                  targetEmission !== undefined ? targetEmission : ""
                }
                roiPeriod={roiPeriod !== undefined ? roiPeriod : ""}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConsultingStep3;
