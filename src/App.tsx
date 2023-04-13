import { useState } from "react";
import FirstStep from "./components/Steps/FirstStep";
import SecondStep from "./components/Steps/SecondStep";
import ThirdStep from "./components/Steps/ThirdStep";
import Result from "./components/Result/Result";

type IInitialSteps = {
  first: boolean;
  second: boolean;
  third: boolean;
  result: boolean;
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
    result: false,
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
        if (
          !["e", "E", "+", "-", "."].includes(event.target.value) &&
          Number(event.target.value) >= 0 &&
          Number(event.target.value) < 110
        ) {
          setParameters((prevState) => ({ ...prevState, age: event.target.value }));
        }
      }
      if (event.target.id === "growth") {
        if (
          !["e", "E", "+", "-", "."].includes(event.target.value) &&
          Number(event.target.value) >= 0 &&
          Number(event.target.value) < 300
        ) {
          setParameters((prevState) => ({ ...prevState, growth: event.target.value }));
        }
      }
      if (event.target.id === "weight") {
        if (
          !["e", "E", "+", "-", "."].includes(event.target.value) &&
          Number(event.target.value) >= 0 &&
          Number(event.target.value) < 600
        ) {
          setParameters((prevState) => ({ ...prevState, weight: event.target.value }));
        }
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
      setStep((prevState: IInitialSteps) => ({ ...prevState, third: false, result: true }));
    }
    if (stepNum === "result") {
      setStep((prevState: IInitialSteps) => ({ ...prevState, result: false, first: true }));
      setGender("male");
      setActivity("1.200");
      setParameters({ ...initialParameters });
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
      {step.result === true && (
        <Result gender={gender} activity={activity} parameters={parameters} toggleSteps={handleToggleSteps} />
      )}
    </div>
  );
};

export default App;

//  Менять динамически цвет на ИМТ (когда в норме зеленый)
//  Понять как считать скорость похудения и исправить
//  Вынести типы в отдельные файлы
