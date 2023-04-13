import { Button } from "@mui/material";
import Diagram from "../Diagram";
import MetobolismTable from "../MetobolismTable";
import DefecitTable from "../DefecitTable";
import BodyMassIndex from "../BodyMassIndex";
import calc from "../../helpers/calc";

type ResultProps = {
  gender: string;
  activity: string;
  parameters: {
    age: string;
    growth: string;
    weight: string;
  };
  toggleSteps: (stepNum: string) => void;
};

type IResult = {
  basalMetabolic: number;
  activityMetabolic: number;
  bodyMassIndex: number;
  defecit: { [key: string]: number };
  diagram: {
    basal: number[];
    digestion: number[];
    rest: number[];
  };
};

const Result = ({ gender, activity, parameters, toggleSteps }: ResultProps): JSX.Element => {
  const result: IResult = calc(gender, activity, parameters);
  return (
    <div className="flex flex-col mx-auto w-[350px] min-h-screen justify-between">
      <div>
        <h1 className="text-2xl text-center  uppercase  mt-6 mb-6">Ваш индекс массы тела</h1>
        <div className="flex flex-col justify-between items-center ">
          <BodyMassIndex imt={result.bodyMassIndex} />
          <Diagram diagram={result.diagram} />
          <MetobolismTable base={result.basalMetabolic} activ={result.activityMetabolic} />
          <DefecitTable defecit={result.defecit} />
        </div>
      </div>
      <Button onClick={() => toggleSteps("result")} sx={{ marginBottom: "60px" }} variant="contained">
        Пересчитать
      </Button>
    </div>
  );
};

export default Result;
