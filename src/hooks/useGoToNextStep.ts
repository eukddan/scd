import { useNavigate } from "react-router-dom";
import { useConsultingStore } from "../store/store"; // zustand 상태 가져오기

const useGoToNextStep = () => {
  const navigate = useNavigate();
  const consultingState = useConsultingStore(); // zustand에서 상태 가져오기

  return () => {
    const currentPath = window.location.pathname;

    // 🚨 필수 입력값 검증
    if (currentPath.includes("/step1")) {
      if (!consultingState.industry) {
        alert("🚨 산업군을 선택해주세요!");
        return;
      }
      if (
        !consultingState.facilities ||
        consultingState.facilities.length === 0
      ) {
        alert("🚨 보유 설비를 최소 1개 이상 선택해주세요!");
        return;
      }
      navigate("/consulting/step2");
    } else if (currentPath.includes("step2")) {
      if (
        consultingState.investment === undefined ||
        consultingState.investment <= 0
      ) {
        alert("🚨 투자 가능 금액을 입력해주세요!");
        return;
      }
      if (consultingState.emission === undefined) {
        alert("🚨 현재 배출량을 입력해주세요!");
        return;
      }
      navigate("/consulting/step3");
    } else if (currentPath.includes("step3")) {
      if (consultingState.targetEmission === undefined) {
        alert("🚨 목표 배출량을 입력해주세요!");
        return;
      }
      if (consultingState.roiPeriod === undefined) {
        alert("🚨 목표 ROI 기간을 입력해주세요!");
        return;
      }
      console.log("🔥 모든 입력이 완료되었습니다!", consultingState);
      navigate("/consulting/analysis");
    }
  };
};

export default useGoToNextStep;
