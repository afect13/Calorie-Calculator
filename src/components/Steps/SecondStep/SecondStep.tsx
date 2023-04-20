import Button from "@mui/material/Button";
import HotelIcon from "@mui/icons-material/Hotel";
import DirectionsWalkIcon from "@mui/icons-material/DirectionsWalk";
import DirectionsRunIcon from "@mui/icons-material/DirectionsRun";
import DirectionsBikeIcon from "@mui/icons-material/DirectionsBike";
import SportsMartialArtsIcon from "@mui/icons-material/SportsMartialArts";
import { SecondStepProps } from "./SecondStep.props";

const SecondStep = ({ value, toggleSteps, changeActivity }: SecondStepProps): JSX.Element => {
  return (
    <div className="flex flex-col mx-auto w-[350px] min-h-screen justify-between">
      <div>
        <h1 className="text-2xl my-12">Выберите уровень ежедневной активности</h1>
        <div onChange={changeActivity} className="flex flex-col justify-between  mb-12">
          <label
            htmlFor="activity-1.200"
            className={
              "flex flex-row justify-center  w-full h-[100px] relative items-center mb-4 bg-white rounded-lg shadow-xl text-blue-500  hover:shadow-lg hover:shadow-blue-200/40  " +
              (value === "1.200" ? " border-2 border-blue-500" : "")
            }
          >
            <div className="flex justify-center w-full h-full items-center basis-1/4">
              <HotelIcon sx={{ fontSize: 50 }} color="inherit" />
            </div>
            <div className="flex flex-col basis-3/4">
              <span>1.200</span>
              <span className="text-black text-xs">Для малоподвижных людей, тренировок мало или они отсутствуют.</span>
            </div>

            <input
              className="cursor-pointer opacity-0 absolute w-full h-full "
              id="activity-1.200"
              type="radio"
              name="activity"
              value="1.200"
            />
          </label>
          <label
            htmlFor="activity-1.375"
            className={
              "flex flex-row justify-center w-full h-[100px] relative items-center mb-4 bg-white rounded-lg shadow-xl text-blue-500 hover:shadow-lg hover:shadow-blue-200/40  " +
              (value === "1.375" ? " border-2 border-blue-500" : "")
            }
          >
            <div className="flex justify-center w-full h-full items-center basis-1/4">
              <DirectionsWalkIcon sx={{ fontSize: 50 }} color="inherit" />
            </div>
            <div className="flex flex-col basis-3/4">
              <span>1.375</span>
              <span className="text-black text-xs ">
                Для людей с низкой активностью, легкие тренировки 1-3 раза в неделю или в виде эквивалента другой
                активности.
              </span>
            </div>
            <input
              className="cursor-pointer opacity-0 absolute w-full h-full "
              id="activity-1.375"
              type="radio"
              name="activity"
              value="1.375"
            />
          </label>
          <label
            htmlFor="activity-1.550"
            className={
              "flex flex-row justify-center w-full h-[100px] relative items-center mb-4 bg-white rounded-lg shadow-xl text-blue-500 hover:shadow-lg hover:shadow-blue-200/40  " +
              (value === "1.550" ? " border-2 border-blue-500" : "")
            }
          >
            <div className="flex justify-center w-full h-full items-center basis-1/4">
              <DirectionsRunIcon sx={{ fontSize: 50 }} color="inherit" />
            </div>
            <div className="flex flex-col basis-3/4">
              <span>1.550</span>
              <span className="text-black text-xs ">
                Для умеренно активных людей: физическая работа средней тяжести или регулярные тренировки 3-5 дней в
                неделю.
              </span>
            </div>
            <input
              className="cursor-pointer opacity-0 absolute w-full h-full "
              id="activity-1.550"
              type="radio"
              name="activity"
              value="1.550"
            />
          </label>
          <label
            htmlFor="activity-1.725"
            className={
              "flex flex-row justify-center w-full h-[100px] relative items-center mb-4 bg-white rounded-lg shadow-xl text-blue-500 hover:shadow-lg hover:shadow-blue-200/40  " +
              (value === "1.725" ? " border-2 border-blue-500" : "")
            }
          >
            <div className="flex justify-center w-full h-full items-center basis-1/4">
              <DirectionsBikeIcon sx={{ fontSize: 50 }} color="inherit" />
            </div>
            <div className="flex flex-col basis-3/4">
              <span>1.725</span>
              <span className="text-black text-xs ">
                Для очень активных людей: физическая работа полный день или интенсивные тренировки 6-7 раз в неделю.
              </span>
            </div>
            <input
              className="cursor-pointer opacity-0 absolute w-full h-full "
              id="activity-1.725"
              type="radio"
              name="activity"
              value="1.725"
            />
          </label>
          <label
            htmlFor="activity-1.900"
            className={
              "flex flex-row justify-center w-full h-[100px] relative items-center mb-4 bg-white rounded-lg shadow-xl text-blue-500 hover:shadow-lg hover:shadow-blue-200/40  " +
              (value === "1.900" ? " border-2 border-blue-500" : "")
            }
          >
            <div className="flex justify-center w-full h-full items-center basis-1/4">
              <SportsMartialArtsIcon sx={{ fontSize: 50 }} color="inherit" />
            </div>
            <div className="flex flex-col basis-3/4">
              <span>1.900</span>
              <span className="text-black text-xs ">
                Для предельно активных людей: тяжелая физическая работа и интенсивные тренировки/занятия спортом.
              </span>
            </div>
            <input
              className="cursor-pointer opacity-0 absolute w-full h-full "
              id="activity-1.900"
              type="radio"
              name="activity"
              value="1.900"
            />
          </label>
        </div>
      </div>
      <Button onClick={() => toggleSteps("second")} sx={{ marginBottom: "60px" }} variant="contained">
        Продолжить
      </Button>
    </div>
  );
};

export default SecondStep;
