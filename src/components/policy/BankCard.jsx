import { useState } from "react";
import PolicyModal from "./PolicyModal";

const BankCard = ({ bank }) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className="
        p-4 rounded-xl
       bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700
      ">

        {/* HEADER */}
        <div className="flex justify-between mb-4">
          <div>
            <h3 className="font-semibold text-gray-900 dark:text-white">
              {bank.name}
            </h3>

            <p className="text-xs text-gray-500 dark:text-gray-400">
              {bank.tagline}
            </p>
          </div>

          <button
            onClick={() => setOpen(true)}
            className="text-green-600 text-sm font-medium hover:underline"
          >
            View Details →
          </button>
        </div>

        {/* LOANS */}
        <div className="grid md:grid-cols-3 gap-4">
          {bank.loans.map((loan, i) => (
            <div
              key={i}
              className="
                p-3 rounded-lg
    bg-gray-50 dark:bg-gray-800
    border border-gray-200 dark:border-gray-700
              "
            >
              <h4 className="text-sm font-medium mb-2">
                {loan.type}
              </h4>

              <ul className="text-xs text-gray-600 dark:text-gray-400 space-y-1">
                <li>Interest: {loan.interest}</li>
                <li>Processing: {loan.processing}</li>
                <li>Tenure: {loan.tenure}</li>
              </ul>
            </div>
          ))}
        </div>
      </div>

      {open && (
        <PolicyModal policy={bank} onClose={() => setOpen(false)} />
      )}
    </>
  );
};

export default BankCard;