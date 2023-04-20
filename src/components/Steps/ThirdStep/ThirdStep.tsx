import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import { ThirdStepProps } from "./ThirdStep.props";

const ThirdStep = ({ value, toggleSteps, changeParameters }: ThirdStepProps): JSX.Element => {
  return (
    <div className="flex flex-col mx-auto w-[350px] min-h-screen justify-between">
      <div>
        <h1 className="text-2xl my-12 text-center uppercase">Внесите свои данные</h1>
        <form className="flex flex-col justify-between items-center mb-12">
          <TextField
            value={value.age}
            onChange={changeParameters}
            label="Ваш возраст"
            type="number"
            id="age"
            sx={{ m: 1, width: "100%" }}
          />
          <TextField
            value={value.growth}
            onChange={changeParameters}
            label="Ваш рост"
            type="number"
            id="growth"
            sx={{ m: 1, width: "100%" }}
            InputProps={{
              endAdornment: <InputAdornment position="end">см</InputAdornment>,
            }}
          />
          <TextField
            value={value.weight}
            onChange={changeParameters}
            label="Ваш вес"
            type="number"
            id="weight"
            sx={{ m: 1, width: "100%" }}
            InputProps={{
              endAdornment: <InputAdornment position="end">кг</InputAdornment>,
            }}
          />
        </form>
      </div>
      {Number(value.age) > 0 && Number(value.weight) > 0 && Number(value.growth) > 0 ? (
        <Button onClick={() => toggleSteps("third")} sx={{ marginBottom: "60px" }} variant="contained">
          Продолжить
        </Button>
      ) : (
        <Button disabled sx={{ marginBottom: "60px" }} variant="contained">
          Продолжить
        </Button>
      )}
    </div>
  );
};

export default ThirdStep;
