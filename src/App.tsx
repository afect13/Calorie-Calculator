import FirstStep from "./components/steps/FirstStep";
import { useState } from "react";
import SecondStep from "./components/steps/SecondStep";
import ThirdStep from "./components/steps/ThirdStep";

type IInitialSteps = {
  first: boolean;
  second: boolean;
  third: boolean;
};

type IInitialParameters = {
  age: string;
  growth: string;
  weight: string;
};

const App = (): JSX.Element => {
  const initialSteps: IInitialSteps = {
    first: true,
    second: false,
    third: false,
  };
  const initialParameters: IInitialParameters = {
    age: "",
    growth: "",
    weight: "",
  };
  const [gender, setGender] = useState("male");
  const [activity, setActivity] = useState("1.200");
  const [parameters, setParameters] = useState({ ...initialParameters });
  const [step, setStep] = useState({ ...initialSteps });
  const handleChangeInput = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    if (step.first === true) {
      setGender((event.target as HTMLInputElement).value);
    }
    if (step.second === true) {
      setActivity((event.target as HTMLInputElement).value);
    }
    if (step.third === true) {
      if (event.target.id === "age") {
        setParameters((prevState) => ({ ...prevState, age: event.target.value }));
      }
      if (event.target.id === "growth") {
        setParameters((prevState) => ({ ...prevState, growth: event.target.value }));
      }
      if (event.target.id === "weight") {
        setParameters((prevState) => ({ ...prevState, weight: event.target.value }));
      }
    }
  };
  const handleToggleSteps = (stepNum: string) => {
    if (stepNum === "first") {
      setStep((prevState: IInitialSteps) => ({ ...prevState, first: false, second: true }));
    }
    if (stepNum === "second") {
      setStep((prevState: IInitialSteps) => ({ ...prevState, second: false, third: true }));
    }
    if (stepNum === "third") {
      setStep((prevState: IInitialSteps) => ({ ...prevState, third: false, first: true }));
    }
  };
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
    </div>
  );
};

export default App;
