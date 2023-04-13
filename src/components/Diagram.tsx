type DiagramProps = {
  diagram: {
    basal: number[];
    digestion: number[];
    rest: number[];
  };
};

const Diagram = ({ diagram, ...props }: DiagramProps) => {
  return (
    <div className="flex flex-col items-center justify-center bg-white  shadow-xl mb-0">
      <div className="relative ">
        <span className="absolute top-1/2 left-1/2 translate-y-[-50%] translate-x-[-50%] text-xl font-bold">
          {diagram.basal[0] + diagram.digestion[0] + diagram.rest[0]}
        </span>
        <svg {...props} style={{ minWidth: "300px", fill: "none" }} width="300" height="300" viewBox="0 0 50 50">
          <circle
            className=" hover:opacity-80"
            style={{
              stroke: "#93c5fd",
              strokeDasharray: `${diagram.basal[1]} 100`,
              strokeDashoffset: "0",
              fill: "none",
              strokeWidth: "10",
            }}
            r="15.9"
            cx="50%"
            cy="50%"
          ></circle>
          <circle
            {...props}
            className=" hover:opacity-80"
            style={{
              stroke: "#c4b5fd",
              strokeDasharray: `${diagram.digestion[1]} 100`,
              strokeDashoffset: `-${diagram.basal[1]}`,
              fill: "none",
              strokeWidth: "10",
            }}
            r="15.9"
            cx="50%"
            cy="50%"
          ></circle>
          <circle
            {...props}
            className=" hover:opacity-80"
            style={{
              stroke: "#86efac",
              strokeDasharray: `${diagram.rest[1]} 100`,
              strokeDashoffset: `-${diagram.basal[1] + diagram.digestion[1]}`,
              fill: "none",
              strokeWidth: "10",
            }}
            r="15.9"
            cx="50%"
            cy="50%"
          ></circle>
        </svg>
      </div>
      <div className="flex flex-col justify-center gap-2 w-full  items-start  mb-6 ">
        <div className="flex items-center mx-3">
          <div className="min-w-[40px] min-h-[40px] bg-blue-300  rounded-lg"></div>
          <p className=" pl-4 text-xs">
            Базовый метаболизм (работа органов, дыхание и т.д)
            <span className=" font-bold text-blue-500 " {...props}>{` ${diagram.basal[0]} (${
              Math.round(diagram.basal[1] * 10) / 10
            }%)`}</span>
          </p>
        </div>
        <div className="flex items-center mx-3">
          <div className="min-w-[40px] min-h-[40px] bg-violet-300 rounded-lg"></div>
          <span className=" pl-4 text-xs">
            Расходы на переваривание и усвоение пищи{" "}
            <span className=" font-bold text-violet-500 " {...props}>{` ${diagram.digestion[0]} (${
              Math.round(diagram.digestion[1] * 10) / 10
            }%)`}</span>
          </span>
        </div>
        <div className="flex items-center mx-3">
          <div className="min-w-[40px] min-h-[40px] bg-green-300 rounded-lg"></div>
          <span className=" pl-4 text-xs">
            Вся остальная физическая активность (ходьба, работа, тренировки и т.д.)
            <span className=" font-bold text-green-500 " {...props}>{` ${diagram.rest[0]} (${
              Math.round(diagram.rest[1] * 10) / 10
            }%)`}</span>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Diagram;
