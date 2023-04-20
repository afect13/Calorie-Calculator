export type ResultProps = {
  gender: string;
  activity: string;
  parameters: {
    age: string;
    growth: string;
    weight: string;
  };
  toggleSteps: (stepNum: string) => void;
};

export type IResult = {
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
