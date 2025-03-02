import { useNavigate } from "react-router-dom";

/**
 * Step 이동을 위한 Hook
 * @returns {Function} - 현재 위치에 따라 다음 Step으로 이동하는 함수
 */

// Step 데이터를 위한 타입 정의
interface StepData {
  industry?: string; // 선택한 산업군
  facilities?: string[]; // 보유 설비 리스트
  investment?: number; // 투자 가능 금액
  emission?: number; // 현재 배출량
  targetEmission?: number; // 목표 배출량 (Step3)
  roiPeriod?: number; // 목표 ROI 기간 (Step3)
}

const useGoToNextStep = () => {
  const navigate = useNavigate(); // 페이지 이동을 위한 useNavigate Hook

  /**
   * 현재 Step에 따라 다음 Step으로 이동하는 함수
   * @param {StepData} data - 현재 Step에서 입력된 데이터 (state로 전달)
   */
  return (data: StepData) => {
    const currentPath = window.location.pathname; // 현재 경로 가져오기

    if (currentPath.includes("step1")) {
      // Step1 → Step2 이동
      navigate("/consulting/step2", { state: data });
    } else if (currentPath.includes("step2")) {
      // Step2 → Step3 이동
      navigate("/consulting/step3", { state: data });
    } else if (currentPath.includes("step3")) {
      // Step3 완료 → 결과 페이지 이동 (예: "/consulting/result")
      console.log("🔥 모든 입력이 완료되었습니다!", data);
      navigate("/consulting/result", { state: data });
    }
  };
};

export default useGoToNextStep;
