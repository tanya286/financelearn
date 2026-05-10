const PolicySidebar = () => {
  return (
    <div className="space-y-4">

      <div className="
        p-4 rounded-xl
        bg-white dark:bg-gray-900
        border border-gray-200 dark:border-gray-700
      ">
        <h3 className="font-semibold mb-3 text-gray-900 dark:text-white">
          Quick Navigation
        </h3>

        <ul className="space-y-3 text-sm text-gray-700 dark:text-gray-300">
          {[
            "Banking Policies",
            "Government Schemes",
            "Investment Policies",
            "Consumer Protection",
          ].map((item) => (
            <li key={item} className="flex items-center gap-2">
              <span className="w-2 h-2 bg-green-500 rounded-full"></span>
              {item}
            </li>
          ))}
        </ul>
      </div>

      <div className="
        p-4 rounded-xl
        bg-white dark:bg-gray-900
        border border-gray-200 dark:border-gray-700
      ">
        <h3 className="font-semibold mb-3 text-gray-900 dark:text-white">
          Download Center
        </h3>

        <div className="text-sm text-gray-700 dark:text-gray-300 space-y-2">
          <div className="flex justify-between">
            Policy Handbook <span>⬇</span>
          </div>
          <div className="flex justify-between">
            Interest Chart <span>⬇</span>
          </div>
        </div>
      </div>

    </div>
  );
};

export default PolicySidebar;