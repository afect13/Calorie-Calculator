export type IInitialSteps = {
  first: boolean;
  second: boolean;
  third: boolean;
  result: boolean;
};

export type IInitialParameters = {
  age: string;
  growth: string;
  weight: string;
};

export const initialSteps: IInitialSteps = {
  first: true,
  second: false,
  third: false,
  result: false,
};
export const initialParameters: IInitialParameters = {
  age: "",
  growth: "",
  weight: "",
};
