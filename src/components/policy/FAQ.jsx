// FAQ.jsx
const FAQ = () => {
  return (
    <div>

      <h2 className="text-lg font-semibold mb-3">
        Frequently Asked Questions
      </h2>

      <div className="space-y-2">

        {[
          "What documents are required for a loan?",
          "How to claim insurance?",
          "What is SIP investment?"
        ].map((q, i) => (
          <details key={i} className="bg-white theme-dark:bg-gray-800 p-3 rounded-lg">
            <summary className="cursor-pointer font-medium">{q}</summary>
            <p className="text-sm text-gray-500 mt-2">
              Answer content goes here...
            </p>
          </details>
        ))}

      </div>

    </div>
  );
};

export default FAQ;