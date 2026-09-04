import Header from "./components/Header";
import InputSection from "./components/InputSection";
import ResultTable from "./components/ResultTable";
import { calculateInvestmentResults, formatter } from "./util/investment";

import { useState } from "react";

const DEFAULT_PARAMS = {
  initialInvestment: 15000,
  annualInvestment: 900,
  expectedReturn: 5.5,
  duration: 10,
};

function App() {
  const [investmentParams, setInvestmentParams] = useState(DEFAULT_PARAMS);
  const handleInputChange = (inputId, value) => {
    setInvestmentParams({ ...investmentParams, [inputId]: +value });
  };

  return (
    <>
      <Header />
      <div className="center">
        <InputSection
          defaultValues={investmentParams}
          onInputChange={handleInputChange}
        />
        <ResultTable investmentParams={investmentParams} />
      </div>
    </>
  );
}

export default App;
