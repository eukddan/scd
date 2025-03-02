import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// ✅ 컨설팅 입력 데이터를 위한 타입
interface ConsultingState {
  industry: string;
  facilities: string[];
  investment: number | "";
  emission: number | "";
}

// ✅ 초기 상태 값
const initialState: ConsultingState = {
  industry: "",
  facilities: [],
  investment: "",
  emission: "",
};

const consultingSlice = createSlice({
  name: "consulting",
  initialState,
  reducers: {
    // ✅ Step1: 산업군 및 설비 정보 업데이트
    setIndustryAndFacilities: (
      state,
      action: PayloadAction<{ industry: string; facilities: string[] }>
    ) => {
      state.industry = action.payload.industry;
      state.facilities = action.payload.facilities;
    },

    // ✅ Step2: 투자 가능 금액 및 배출량 업데이트
    setInvestmentAndEmission: (
      state,
      action: PayloadAction<{ investment: number | ""; emission: number | "" }>
    ) => {
      state.investment = action.payload.investment;
      state.emission = action.payload.emission;
    },
  },
});

// ✅ 액션 & 리듀서 내보내기
export const { setIndustryAndFacilities, setInvestmentAndEmission } =
  consultingSlice.actions;
export default consultingSlice.reducer;
