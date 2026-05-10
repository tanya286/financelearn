import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Home, Car, CreditCard } from "lucide-react";

const tabs = ["Overview", "Benefits", "Apply"];

const iconMap = {
  "Home Loan": <Home size={16} className="text-green-500" />,
  "Car Loan": <Car size={16} className="text-blue-500" />,
  "Personal Loan": <CreditCard size={16} className="text-purple-500" />,
};

const PolicyModal = ({ policy, onClose }) => {
  const [activeTab, setActiveTab] = useState("Overview");

  if (!policy) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center">

        {/* BACKDROP */}
        <motion.div
          className="absolute inset-0 bg-black/40 backdrop-blur-sm"
          onClick={onClose}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        />

        {/* MODAL */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 40 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 40 }}
          transition={{ type: "spring", stiffness: 260, damping: 20 }}
          className="relative w-full max-w-4xl rounded-2xl shadow-2xl z-10 overflow-hidden
                     bg-white/80 dark:bg-gray-900/80 backdrop-blur-xl
                     text-black dark:text-white"
        >

          {/* HEADER */}
          <div className="flex justify-between items-center px-6 py-4 border-b border-gray-200 dark:border-gray-700">
            <h2 className="text-lg font-semibold">{policy.bank}</h2>

            <button onClick={onClose}>
              <X className="text-gray-500 dark:text-gray-300 hover:text-black dark:hover:text-white" />
            </button>
          </div>

          {/* TABS */}
          <div className="flex gap-6 px-6 pt-4 border-b border-gray-200 dark:border-gray-700">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`pb-2 text-sm font-medium relative
                  ${activeTab === tab ? "text-green-600" : "text-gray-500 dark:text-gray-400"}`}
              >
                {tab}

                {activeTab === tab && (
                  <motion.div
                    layoutId="underline"
                    className="absolute left-0 right-0 -bottom-[1px] h-[2px] bg-green-500"
                  />
                )}
              </button>
            ))}
          </div>

          {/* CONTENT */}
          <div className="p-6 max-h-[60vh] overflow-y-auto">

            {/* OVERVIEW */}
            {activeTab === "Overview" && (
              <div className="space-y-6">

                {/* BANK INFO */}
                <div className="bg-blue-50 dark:bg-gray-800 p-4 rounded-xl">
                  <p className="text-sm font-medium mb-2">{policy.bank}</p>
                  <p className="text-xs text-gray-600 dark:text-gray-400 mb-3">
                    {policy.about || "No description available"}
                  </p>

                  <div className="grid grid-cols-2 md:grid-cols-4 gap-3 text-xs">
                    <div><p className="text-gray-500">Established</p><p>{policy.established || "-"}</p></div>
                    <div><p className="text-gray-500">HQ</p><p>{policy.hq || "-"}</p></div>
                    <div><p className="text-gray-500">Branches</p><p>{policy.branches || "-"}</p></div>
                    <div><p className="text-gray-500">ATMs</p><p>{policy.atms || "-"}</p></div>
                  </div>
                </div>

                {/* LOANS */}
                {policy?.loans?.map((loan, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.1 }}
                    className="p-4 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800"
                  >
                    <div className="flex items-center gap-2 mb-3">
                      {iconMap[loan.type] || <CreditCard size={16} />}
                      <h3 className="text-sm font-semibold">{loan.type}</h3>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4 text-xs text-gray-600 dark:text-gray-300">
                      <div>
                        <p><b>Interest:</b> {loan.rate}</p>
                        <p><b>Processing:</b> {loan.processing}</p>
                        <p><b>Tenure:</b> {loan.tenure}</p>
                      </div>

                      <div>
                        <p><b>LTV:</b> {loan.ltv}</p>
                        <p><b>Eligibility:</b> {loan.eligibility}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            )}

            {/* BENEFITS */}
            {activeTab === "Benefits" && (
              <div className="space-y-3 text-sm">
                <p>✔ Low interest rates</p>
                <p>✔ Flexible repayment options</p>
                <p>✔ Quick approval</p>
                <p>✔ Trusted bank</p>
              </div>
            )}

            {/* APPLY */}
            {activeTab === "Apply" && (
              <div className="text-sm space-y-3">
                <p>📄 Documents required:</p>
                <ul className="list-disc ml-4">
                  <li>Identity proof</li>
                  <li>Address proof</li>
                  <li>Income proof</li>
                </ul>
              </div>
            )}

          </div>

          {/* FOOTER CTA */}
          <div className="p-4 border-t border-gray-200 dark:border-gray-700">
            <a
              href={policy.officialLink}
              target="_blank"
              rel="noreferrer"
              className="block w-full text-center bg-green-500 hover:bg-green-600
                         dark:bg-green-600 dark:hover:bg-green-700
                         text-white py-2 rounded-lg transition"
            >
              Visit Official Website
            </a>
          </div>

        </motion.div>
      </div>
    </AnimatePresence>
  );
};

export default PolicyModal;