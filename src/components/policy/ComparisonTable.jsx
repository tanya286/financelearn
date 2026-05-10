const ComparisonTable = () => {
  return (
    <div className="bg-white border rounded-2xl p-5 shadow-sm">

      <h3 className="text-sm font-semibold mb-3">
        Compare Bank Policies
      </h3>

      <div className="overflow-hidden rounded-xl border">
        <table className="w-full text-sm">

          <thead className="bg-white text-gray-600">
            <tr>
              <th className="p-3 text-left">Bank</th>
              <th className="p-3 text-left">Interest</th>
              <th className="p-3 text-left">Processing</th>
              <th className="p-3 text-left">Tenure</th>
            </tr>
          </thead>

          <tbody>
            <tr className="border-t hover:bg-gray-50 transition">
              <td className="p-3 font-medium">SBI</td>
              <td className="p-3 text-green-600 font-semibold">8.4%</td>
              <td className="p-3">0.5%</td>
              <td className="p-3">30 yrs</td>
            </tr>
          </tbody>

        </table>
      </div>
    </div>
  );
};
export default ComparisonTable;