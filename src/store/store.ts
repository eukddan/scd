// store.ts
import { create } from "zustand";
import { ConsultingStore } from "../types/consulting";

export const useConsultingStore = create<ConsultingStore>((set) => ({
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

  resetState: () =>
    set({
      industry: "",
      facilities: [],
      investment: undefined,
      emission: undefined,
      targetEmission: undefined,
      roiPeriod: undefined,
    }),
}));
