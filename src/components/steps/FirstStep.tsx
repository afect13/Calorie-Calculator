import FemaleIcon from "@mui/icons-material/Female";
import MaleIcon from "@mui/icons-material/Male";
import Button from "@mui/material/Button";

type FirstStepProps = {
  value: string;
  changeGender: (event: React.ChangeEvent<HTMLInputElement>) => void;
  toggleSteps: (stepNum: string) => void;
};

const FirstStep = ({ value, changeGender, toggleSteps }: FirstStepProps): JSX.Element => {
  return (
    <div className="flex flex-col mx-auto w-[350px] min-h-screen justify-between">
      <div>
        <h1 className="text-2xl my-12">Калькулятор нормы калорий</h1>
        <h2 className=" text-xl mb-12">Выберите ваш пол:</h2>
        <div onChange={changeGender} className="flex justify-between  mb-12">
          <label
            htmlFor="gender"
            className={
              "flex flex-col justify-center w-[170px] relative items-center text-center text-blue-500" +
              (value === "male" ? " border-2 rounded-lg border-blue-500" : "")
            }
          >
            <span>Мужской</span>
            <MaleIcon sx={{ fontSize: 130 }} color="inherit" />
            <input
              className="cursor-pointer opacity-0 absolute w-full h-full "
              type="radio"
              name="gender"
              value="male"
            />
          </label>
          <label
            htmlFor="gender"
            className={
              "flex flex-col justify-center w-[170px] relative items-center text-center text-pink-500" +
              (value === "female" ? " border-2 rounded-lg border-pink-500" : "")
            }
          >
            <span>Женский</span>
            <FemaleIcon sx={{ fontSize: 130 }} color="inherit" />
            <input
              className="cursor-pointer opacity-0 absolute w-full h-full "
              type="radio"
              name="gender"
              value="female"
            />
          </label>
        </div>
      </div>
      <Button onClick={() => toggleSteps("first")} sx={{ marginBottom: "60px" }} variant="contained">
        Продолжить
      </Button>
    </div>
  );
};

export default FirstStep;
