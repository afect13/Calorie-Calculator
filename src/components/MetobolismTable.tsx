const MetobolismTable = () => {
  return (
    <div>
      <table className="border-collapse border text-xs my-6 border-slate-400 ">
        <tbody>
          <tr>
            <td className="border p-2 border-slate-300">
              Ваш базовый метаболизм (основной обмен). Это калории, которые сжигаются, когда вы находитесь в покое, и
              энергия тратится на обеспечение процессов дыхания, кровообращения, поддержание температуры тела и т.д.
            </td>
            <td className="border border-slate-300  ">
              <div className="flex flex-col items-center min-w-[60px]">
                <span className="text-sm">1700</span>
                <span className="text-[8px]">ккал/сутки</span>
              </div>
            </td>
          </tr>
          <tr>
            <td className="border p-2 border-slate-300">
              Ваша норма калорий для поддержания веса с текущей физической активностью (вы не худеете и не набираете
              вес)
            </td>
            <td className="border border-slate-300  ">
              <div className="flex flex-col items-center min-w-[60px]">
                <span className="text-sm">1700</span>
                <span className="text-[8px]">ккал/сутки</span>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default MetobolismTable;
