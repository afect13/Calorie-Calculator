export type ThirdStepProps = {
  value: { age: string; growth: string; weight: string };
  changeParameters: (event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => void;
  toggleSteps: (stepNum: string) => void;
};
