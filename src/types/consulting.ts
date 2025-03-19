// types.ts
export interface ConsultingState {
  industry: string;
  facilities: string[];
  investment?: number;
  emission?: number;
  targetEmission?: number;
  roiPeriod?: number;
}

export interface ConsultingActions {
  setIndustry: (industry: string) => void;
  setFacilities: (facilities: string[]) => void;
  setInvestment: (investment: number) => void;
  setEmission: (emission: number) => void;
  setTargetEmission: (targetEmission: number) => void;
  setRoiPeriod: (roiPeriod: number) => void;
  resetState: () => void;
}

export type ConsultingStore = ConsultingState & ConsultingActions;
