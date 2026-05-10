const PolicyTable = () => {
  const data = [
    { bank: "SBI", interest: "8.4%", processing: "0.5%", tenure: "30 yrs" },
    { bank: "HDFC", interest: "8.5%", processing: "0.6%", tenure: "25 yrs" },
  ];

  return (
    <div className="
      mt-4 p-4 rounded-xl
      bg-white dark:bg-gray-900
      border border-gray-200 dark:border-gray-700
    ">

      <h3 className="font-semibold mb-3 text-gray-900 dark:text-white">
        Compare Bank Policies
      </h3>

      <table className="w-full text-sm">
        <thead className="text-gray-500 dark:text-gray-400">
          <tr>
            <th className="text-left py-2">Bank</th>
            <th>Interest</th>
            <th>Processing</th>
            <th>Tenure</th>
          </tr>
        </thead>

        <tbody className="text-gray-800 dark:text-gray-200">
          {data.map((row, i) => (
            <tr key={i} className="border-t border-gray-200 dark:border-gray-700">
              <td className="py-2">{row.bank}</td>
              <td className="text-green-600">{row.interest}</td>
              <td>{row.processing}</td>
              <td>{row.tenure}</td>
            </tr>
          ))}
        </tbody>
      </table>

    </div>
  );
};

export default PolicyTable;