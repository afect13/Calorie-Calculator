type IResult = {
  basalMetabolic: number;
  activityMetabolic: number;
  bodyMassIndex: number;
  defecit: { [key: string]: number };
};

const calc = (
  gender: string,
  activity: string,
  parameters: {
    age: string;
    growth: string;
    weight: string;
  }
) => {
  const result: IResult = {
    basalMetabolic: 0,
    activityMetabolic: 0,
    bodyMassIndex: 0,
    defecit: {
      5: 0,
      10: 0,
      15: 0,
      20: 0,
    },
    // diagram: {
    // Расчитать для диаграммы basalMetabolic синий расход на еду 10% остальное в зеленый
    // }
  };
  if (gender === "male") {
    result.basalMetabolic = Math.trunc(
      9.99 * Number(parameters.weight) + 6.25 * Number(parameters.growth) - 4.92 * Number(parameters.age) + 5
    );
  }
  if (gender === "female") {
    result.basalMetabolic = Math.trunc(
      9.99 * Number(parameters.weight) + 6.25 * Number(parameters.growth) - 4.92 * Number(parameters.age) - 161
    );
  }
  result.activityMetabolic = Math.trunc(result.basalMetabolic * Number(activity));
  result.bodyMassIndex = Number(parameters.weight) / Math.pow(Number(parameters.growth) / 100, 2);
  Object.keys(result.defecit).forEach((def: string) => {
    result.defecit[def] = result.activityMetabolic - (result.activityMetabolic * Number(def)) / 100;
  });
  console.log(result);
};

export default calc;
