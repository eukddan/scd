import React from "react";
import { useConsultingStore } from "../../store/store"; // Zustand Store 가져오기
import Sidebar from "../../components/sidebar/Sidebar";
import Header from "../../components/header/ConsultingPageHeader";
import Card from "../../components/card/Card";

const ConsultingAnalysis = () => {
  // ✅ Zustand에서 데이터 가져오기
  const {
    industry,
    facilities,
    investment,
    emission,
    targetEmission,
    roiPeriod,
  } = useConsultingStore();

  return (
    <div className="flex w-full">
      {/* 사이드바 */}
      <Sidebar />
      <div className="flex-1 flex flex-col bg-gray-50 min-h-screen">
        {/* 헤더 */}
        <Header />

        {/* 메인 컨텐츠 */}
        <div className="flex flex-col items-center w-full max-w-[1200px] px-6 md:px-10 mt-12 mx-auto">
          <Card className="p-8 w-full">
            <h2 className="text-xl font-bold mb-6">입력한 정보입니닷.</h2>
            <div className="grid grid-cols-2 gap-6">
              {/* 산업군 */}
              <div>
                <strong className="text-gray-700">산업 유형</strong>
                <p className="text-gray-900">{industry || "선택 안됨"}</p>
              </div>

              {/* 투자 가능 금액 */}
              <div>
                <strong className="text-gray-700">투자 가능 금액</strong>
                <p className="text-gray-900">
                  {investment
                    ? `${investment.toLocaleString()} 원`
                    : "입력되지 않음"}
                </p>
              </div>

              {/* 보유 설비 목록 */}
              <div>
                <strong className="text-gray-700">보유 설비 목록</strong>
                <p className="text-gray-900">
                  {facilities.length > 0
                    ? facilities.join(", ")
                    : "입력된 설비 없음"}
                </p>
              </div>

              {/* 연간 현재 배출량 */}
              <div>
                <strong className="text-gray-700">연간 현재 배출량</strong>
                <p className="text-gray-900">
                  {emission ? `${emission} tCO₂eq` : "입력되지 않음"}
                </p>
              </div>

              {/* 연간 목표 배출량 */}
              <div>
                <strong className="text-gray-700">연간 목표 배출량</strong>
                <p className="text-gray-900">
                  {targetEmission
                    ? `${targetEmission} tCO₂eq`
                    : "입력되지 않음"}
                </p>
              </div>

              {/* 목표 ROI 기간 */}
              <div>
                <strong className="text-gray-700">목표 ROI 기간</strong>
                <p className="text-gray-900">
                  {roiPeriod ? `${roiPeriod} 년` : "입력되지 않음"}
                </p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default ConsultingAnalysis;
