import { create } from "zustand";

// 🔹 Zustand 상태 정의
interface ConsultingState {
  industry: string;
  facilities: string[];
  investment?: number;
  emission?: number;
  targetEmission?: number;
  roiPeriod?: number;
  setIndustry: (industry: string) => void;
  setFacilities: (facilities: string[]) => void;
  setInvestment: (investment: number) => void;
  setEmission: (emission: number) => void;
  setTargetEmission: (targetEmission: number) => void;
  setRoiPeriod: (roiPeriod: number) => void;
}

// 🔹 Zustand Store 생성
export const useConsultingStore = create<ConsultingState>((set) => ({
  industry: "",
  facilities: [],
  investment: undefined,
  emission: undefined,
  targetEmission: undefined,
  roiPeriod: undefined,
  setIndustry: (industry) => set({ industry }),
  setFacilities: (facilities) => set({ facilities }),
  setInvestment: (investment) => set({ investment }),
  setEmission: (emission) => set({ emission }),
  setTargetEmission: (targetEmission) => set({ targetEmission }),
  setRoiPeriod: (roiPeriod) => set({ roiPeriod }),
}));
