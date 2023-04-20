export type FirstStepProps = {
  value: string;
  changeGender: (event: React.ChangeEvent<HTMLInputElement>) => void;
  toggleSteps: (stepNum: string) => void;
};
