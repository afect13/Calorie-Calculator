export type SecondStepProps = {
  value: string;
  toggleSteps: (stepNum: string) => void;
  changeActivity: (event: React.ChangeEvent<HTMLInputElement>) => void;
};
