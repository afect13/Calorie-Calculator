import FirstStep from "./components/Steps/FirstStep/FirstStep";
import SecondStep from "./components/Steps/SecondStep/SecondStep";
import ThirdStep from "./components/Steps/ThirdStep/ThirdStep";
import Result from "./components/Result/Result";
import { useDataCollector } from "./hooks/useDataCollector";

const App = (): JSX.Element => {
  const { parameters, gender, activity, step, handleToggleSteps, handleChangeInput } = useDataCollector();
  return (
    <div className="min-h-screen max-w-[640px] mx-auto overflow-x-hidden font-Roboto ">
      {step.first === true && (
        <FirstStep value={gender} changeGender={handleChangeInput} toggleSteps={handleToggleSteps} />
      )}
      {step.second === true && (
        <SecondStep value={activity} changeActivity={handleChangeInput} toggleSteps={handleToggleSteps} />
      )}
      {step.third === true && (
        <ThirdStep value={parameters} changeParameters={handleChangeInput} toggleSteps={handleToggleSteps} />
      )}
      {step.result === true && (
        <Result gender={gender} activity={activity} parameters={parameters} toggleSteps={handleToggleSteps} />
      )}
    </div>
  );
};

export default App;
