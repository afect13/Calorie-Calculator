type BodyMassIndexProps = {
  imt: number;
};

const BodyMassIndex = ({ imt, ...props }: BodyMassIndexProps): JSX.Element => {
  return (
    <div className="flex flex-col justify-center  w-full h-[70px]  items-center  bg-white  shadow-xl  ">
      <span {...props} className="text-2xl text-red-400">
        {imt.toFixed(1)}
      </span>
      <span className="text-red-400">(норма от 18,5 до 25)</span>
    </div>
  );
};

export default BodyMassIndex;
