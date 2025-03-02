// src/App.tsx
import React from "react";
import { Routes, Route } from "react-router-dom";
import ConsultingStep1 from "./pages/consulting/ConsultingStep1";
import ConsultingStep2 from "./pages/consulting/ConsultingStep2";
import ConsultingStep3 from "./pages/consulting/ConsultingStep3";
import RandingPage from "./pages/LandingPage";

const App: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<RandingPage />} />
      <Route path="/consulting/step1" element={<ConsultingStep1 />} />
      <Route path="/consulting/step2" element={<ConsultingStep2 />} />
      <Route path="/consulting/step3" element={<ConsultingStep3 />} />
    </Routes>
  );
};

export default App;
