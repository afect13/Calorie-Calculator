import { DeficitTableProps } from "./DeficitTable.props";

const DeficitTable = ({ defecit, ...props }: DeficitTableProps) => {
  return (
    <div className="mb-6">
      <table className="border-collapse border text-center  bg-white  shadow-xl  border-slate-400 text-xs">
        <thead>
          <tr>
            <th className="border bg-blue-200 border-slate-300 p-2">Дефицит</th>
            <th className="border bg-blue-200 border-slate-300 p-2">Ккал в сутки</th>
            <th className="border bg-blue-200 border-slate-300 p-2">Примерная скорость похудения</th>
            <th className="border bg-blue-200 border-slate-300 p-2 "></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border border-slate-300 py-2">5%</td>
            <td className="border border-slate-300 py-2" {...props}>
              {defecit[5].kkal}
            </td>
            <td className="border border-slate-300 py-2">{defecit[5].weightLoss + " кг/месяц"}</td>
            <td className="border border-slate-300 px-2 py-2 text-zinc-400 text-left">Очень медленное похудение</td>
          </tr>
          <tr>
            <td className="border border-slate-300 py-2">10%</td>
            <td className="border border-slate-300 py-2" {...props}>
              {defecit[10].kkal}
            </td>
            <td className="border border-slate-300 py-2">{defecit[10].weightLoss + " кг/месяц"}</td>
            <td rowSpan={2} className="border border-slate-300 px-2 py-2 text-green-400 text-left">
              Оптимальный уровень дефицита
            </td>
          </tr>
          <tr>
            <td className="border border-slate-300 py-2">15%</td>
            <td className="border border-slate-300 py-2" {...props}>
              {defecit[15].kkal}
            </td>
            <td className="border border-slate-300 py-2">{defecit[15].weightLoss + " кг/месяц"}</td>
          </tr>
          <tr>
            <td className="border border-slate-300 py-2">20%</td>
            <td className="border border-slate-300 py-2" {...props}>
              {defecit[20].kkal}
            </td>
            <td className="border border-slate-300 py-2">{defecit[20].weightLoss + " кг/месяц"}</td>
            <td className="border border-slate-300 py-2 text-red-400 px-2 text-left">
              Более высокий дефицит чреват растройствами нервной системы, срывами и в итоге низкой общей эффекивностью
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default DeficitTable;
