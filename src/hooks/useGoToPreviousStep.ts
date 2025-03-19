import { useNavigate } from "react-router-dom";

/**
 * Step 이동을 위한 Hook (이전 단계로 이동)
 * @returns {Function} - 현재 위치에 따라 이전 Step으로 이동하는 함수
 */
const useGoToPreviousStep = () => {
  const navigate = useNavigate(); // 페이지 이동을 위한 useNavigate Hook

  return () => {
    const currentPath = window.location.pathname; // 현재 경로 가져오기

    if (currentPath.includes("step3")) {
      // Step3 → Step2 이동
      navigate("/consulting/step2");
    } else if (currentPath.includes("step2")) {
      // Step2 → Step1 이동
      navigate("/consulting/step1");
    }
  };
};

export default useGoToPreviousStep;
