const Diagram = () => {
  return (
    <>
      <div className="relative ">
        <span className="absolute top-1/2 left-1/2 translate-y-[-50%] translate-x-[-50%] text-xl font-bold ">2222</span>
        <svg style={{ minWidth: "300px", fill: "none" }} width="300" height="300" viewBox="0 0 50 50">
          <circle
            className=" hover:opacity-80"
            style={{
              stroke: "#93c5fd",
              strokeDasharray: "84 100",
              strokeDashoffset: "0",
              fill: "none",
              strokeWidth: "10",
            }}
            r="15.9"
            cx="50%"
            cy="50%"
          ></circle>
          <circle
            className=" hover:opacity-80"
            style={{
              stroke: "#c4b5fd",
              strokeDasharray: "10 100",
              strokeDashoffset: "-84",
              fill: "none",
              strokeWidth: "10",
            }}
            r="15.9"
            cx="50%"
            cy="50%"
          ></circle>
          <circle
            className=" hover:opacity-80"
            style={{
              stroke: "#86efac",
              strokeDasharray: "6 100",
              strokeDashoffset: "-94",
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
        <div className="flex items-center">
          <div className="min-w-[40px] min-h-[40px] bg-blue-300  rounded-lg"></div>
          <span className=" pl-4 text-xs">Базовый метаболизм (работа органов, дыхание и т.д) 1,700 (83.4%)</span>
        </div>
        <div className="flex items-center">
          <div className="min-w-[40px] min-h-[40px] bg-violet-300 rounded-lg"></div>
          <span className=" pl-4 text-xs">Расходы на переваривание и усвоение пищи 204 (10%)</span>
        </div>
        <div className="flex items-center">
          <div className="min-w-[40px] min-h-[40px] bg-green-300 rounded-lg"></div>
          <span className=" pl-4 text-xs">
            Вся остальная физическая активность (ходьба, работа, тренировки и т.д.) 135 (6.6%)
          </span>
        </div>
      </div>
    </>
  );
};

export default Diagram;
