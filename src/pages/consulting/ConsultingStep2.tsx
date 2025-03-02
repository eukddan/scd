import React from "react";
import { useConsultingStore } from "../../store/store"; // Zustand Store 가져오기
import { useNavigate } from "react-router-dom";
import Sidebar from "../../components/layout/Sidebar";
import Header from "../../components/layout/consultingHeader/Header";
import Card from "../../components/common/Card";
import Button from "../../components/common/Button";
import StepIndicator from "../../components/common/StepIndicator";
import GenericInput from "../../components/form/GenericInput";
import InfoPreview from "../../components/common/InfoPreviewCard";

const ConsultingStep2: React.FC = () => {
  const navigate = useNavigate();

  // ✅ Zustand 상태 가져오기
  const {
    industry,
    facilities,
    investment,
    emission,
    setInvestment,
    setEmission,
  } = useConsultingStore();

  return (
    <div className="flex w-full">
      <Sidebar />
      <div className="flex-1 flex flex-col bg-gray-50 min-h-screen">
        <Header />
        <div className="flex flex-col items-center w-full max-w-[1200px] px-6 md:px-10 mt-8 mx-auto gap-6">
          <div className="flex justify-between items-center w-full">
            <h1 className="text-2xl font-bold">
              투자 가능 금액 및 배출량 입력
            </h1>
            <StepIndicator
              currentStep={2}
              totalSteps={3}
              className="text-gray-700"
            />
          </div>
          <div className="flex justify-between items-start w-full gap-6">
            <div className="w-full max-w-[800px] flex-grow">
              <Card>
                {/* ✅ 투자 가능 금액 입력 */}
                <GenericInput
                  label="투자 가능 금액"
                  placeholder="투자 가능 금액을 입력하세요"
                  value={investment || ""}
                  setValue={(value) => setInvestment(value as number)}
                  unit="원"
                />

                {/* ✅ 현재 배출량 입력 */}
                <GenericInput
                  label="현재 배출량"
                  placeholder="현재 배출량을 입력하세요"
                  value={emission || ""}
                  setValue={(value) => setEmission(value as number)}
                  unit="tCO₂-eq"
                />

                {/* 🔥 버튼 그룹 (이전 & 다음) */}
                <div className="flex justify-between mt-6">
                  <Button
                    variant="secondary"
                    onClick={() => navigate("/consulting/step1")}
                  >
                    이전
                  </Button>
                  <Button
                    variant="primary"
                    onClick={() => navigate("/consulting/step3")}
                  >
                    다음
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
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConsultingStep2;
