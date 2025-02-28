// src/App.tsx
import React from "react";
import { Routes, Route } from "react-router-dom";

import ConsultingStep1 from "./pages/consulting/ConsultingStep1";

const App: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<ConsultingStep1 />} />
    </Routes>
  );
};

export default App;
