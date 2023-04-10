import FirstStep from "./components/steps/FirstStep";
import { useState } from "react";

function App(): JSX.Element {
  const [gender, setGender] = useState("male");
  const handleChangeGender = (event: React.ChangeEvent<HTMLInputElement>) => {
    setGender((event.target as HTMLInputElement).value);
  };
  return (
    <div className="h-screen max-w-[640px] mx-auto overflow-x-hidden font-Roboto ">
      <FirstStep value={gender} changeGender={handleChangeGender} />
    </div>
  );
}

export default App;
