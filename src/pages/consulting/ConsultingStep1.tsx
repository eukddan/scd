import React from "react";
import { useConsultingStore } from "../../store/store"; // Zustand Store 가져오기
import { useNavigate } from "react-router-dom";
import Sidebar from "../../components/layout/Sidebar";
import Header from "../../components/layout/consultingHeader/Header";
import Card from "../../components/common/Card";
import Button from "../../components/common/Button";
import StepIndicator from "../../components/common/StepIndicator";
import IndustryInput from "../../components/form/IndustryInput";
import FacilityInput from "../../components/form/FacilityInput";
import InfoPreview from "../../components/common/InfoPreviewCard";

const ConsultingStep1: React.FC = () => {
  const navigate = useNavigate();

  // ✅ Zustand 상태 가져오기
  const { industry, facilities, setIndustry, setFacilities } =
    useConsultingStore();

  return (
    <div className="flex w-full">
      <Sidebar />
      <div className="flex-1 flex flex-col bg-gray-50 min-h-screen">
        <Header />
        <div className="flex flex-col items-center w-full max-w-[1200px] px-6 md:px-10 mt-8 mx-auto gap-6">
          <div className="flex justify-between items-center w-full">
            <h1 className="text-2xl font-bold">산업군 및 보유설비 선택</h1>
            <StepIndicator
              currentStep={1}
              totalSteps={3}
              className="text-gray-700"
            />
          </div>
          <div className="flex justify-between items-start w-full gap-6">
            <div className="w-full max-w-[800px] flex-grow">
              <Card>
                {/* ✅ Zustand 상태와 연결된 IndustryInput */}
                <IndustryInput industry={industry} setIndustry={setIndustry} />

                {/* ✅ Zustand 상태와 연결된 FacilityInput */}
                <FacilityInput
                  facilities={facilities}
                  setFacilities={setFacilities}
                />

                <div className="text-right mt-6">
                  <Button
                    variant="primary"
                    onClick={() => navigate("/consulting/step2")}
                  >
                    다음
                  </Button>
                </div>
              </Card>
            </div>

            {/* ✅ InfoPreview에도 Zustand 상태 바로 전달 */}
            <div className="w-[280px] flex-shrink-0">
              <InfoPreview
                industry={industry || "선택 안됨"}
                facilities={
                  facilities.length > 0 ? facilities : ["입력된 설비 없음"]
                }
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConsultingStep1;
