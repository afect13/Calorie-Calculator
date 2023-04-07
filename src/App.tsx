import { Routes, Route } from "react-router-dom";
import FirstStep from "./components/pages/FirstStep";
import SecondStep from "./components/pages/SecondStep";
import ThirdStep from "./components/pages/ThirdStep";
import Result from "./components/pages/Result";

export default function App() {
  return (
    <div>
      <Routes>
        <Route path="step-1" element={<ThirdStep />} />
        <Route path="step-2" element={<FirstStep />} />
        <Route path="step-3" element={<SecondStep />} />
        <Route path="finish" element={<Result />} />
      </Routes>
    </div>
  );
}
