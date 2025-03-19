import { Routes, Route } from "react-router-dom";
import ConsultingStep1 from "./pages/consulting/ConsultingStep1";
import ConsultingStep2 from "./pages/consulting/ConsultingStep2";
import ConsultingStep3 from "./pages/consulting/ConsultingStep3";
import ConsultingAnalysis from "./pages/consulting/ConsultingAnalysis";
import LandingPage from "./pages/LandingPage";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/consulting/step1" element={<ConsultingStep1 />} />
      <Route path="/consulting/step2" element={<ConsultingStep2 />} />
      <Route path="/consulting/step3" element={<ConsultingStep3 />} />
      <Route path="/consulting/analysis" element={<ConsultingAnalysis />} />
    </Routes>
  );
};

export default App;
