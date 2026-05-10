import PolicySidebar from "../components/policy/PolicySidebar";
import BankCard from "../components/policy/BankCard";
import PolicyTable from "../components/policy/PolicyTable";
import { banks } from "../data/banks";

const Policies = () => {
  return (
    <div className="
      min-h-screen
      bg-white dark:bg-gray-900
      text-gray-900 dark:text-gray-100
    ">
      <div className="max-w-7xl mx-auto px-4 py-6">

        {/* HEADER */}
        <h1 className="text-xl font-semibold mb-1">
          Financial Policies & Guidelines
        </h1>

        <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
          Compare banking, investment, and government policies
        </p>

        {/* SEARCH */}
        <div className="flex gap-2 mb-6">
          <input
            placeholder="Search policies..."
            className="
              flex-1 px-3 py-2 rounded-lg
              bg-white dark:bg-gray-900
              border border-gray-300 dark:border-gray-700
              text-gray-900 dark:text-white
            "
          />

          <select className="px-3 rounded-lg border bg-white dark:bg-gray-900 dark:border-gray-700">
            <option>All Categories</option>
          </select>

          <select className="px-3 rounded-lg border bg-white dark:bg-gray-900 dark:border-gray-700">
            <option>Latest</option>
          </select>
        </div>

        {/* LAYOUT */}
        <div className="grid md:grid-cols-4 gap-6">

          <PolicySidebar />

          <div className="md:col-span-3 space-y-4">
            {banks.map((bank) => (
              <BankCard key={bank.id} bank={bank} />
            ))}

            <PolicyTable />
          </div>

        </div>
      </div>
    </div>
  );
};

export default Policies;