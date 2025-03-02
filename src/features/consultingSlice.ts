import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// Step 데이터 타입 정의
interface ConsultingState {
  industry?: string;
  facilities?: string[];
  investment?: number;
  emission?: number;
  targetEmission?: number;
  roiPeriod?: number;
}

const initialState: ConsultingState = {};

const consultingSlice = createSlice({
  name: "consulting",
  initialState,
  reducers: {
    updateStepData: (
      state,
      action: PayloadAction<Partial<ConsultingState>>
    ) => {
      return { ...state, ...action.payload };
    },
    resetData: () => initialState, // 데이터 초기화 (결과 페이지에서 활용 가능)
  },
});

export const { updateStepData, resetData } = consultingSlice.actions;
export default consultingSlice.reducer;
