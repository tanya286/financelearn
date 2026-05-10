const PolicyCard = ({ policy }) => {
  return (
    <div className="bg-white theme-dark:bg-gray-800 text-gray-900 dark:text-white rounded-xl p-4 shadow-sm hover:shadow-lg transition flex flex-col justify-between">

      {/* Top */}
      <div>

        {/* Badge */}
        <div className="flex justify-between items-center mb-2">
          <span className="text-xs bg-green-100 text-green-600 px-2 py-1 rounded">
            Verified
          </span>

          <span className="text-xs text-gray-400">
            Govt
          </span>
        </div>

        <h3 className="font-semibold text-sm mb-1">
          {policy.title}
        </h3>

        <p className="text-xs text-gray-500 mb-3">
          {policy.desc}
        </p>

        {/* Key Info */}
        <div className="text-xs text-gray-400 space-y-1">
          <p>📞 {policy.contact}</p>
          <p>📄 PDF Available</p>
        </div>
      </div>

      {/* Actions */}
      <div className="grid grid-cols-3 gap-2 mt-4">

        <a
          href={policy.link}
          target="_blank"
          className="text-center text-xs bg-green-500 text-white py-1.5 rounded"
        >
          Visit
        </a>

        <a
          href={policy.pdf}
          target="_blank"
          className="text-center text-xs border rounded py-1.5"
        >
          PDF
        </a>

        <a
          href={`tel:${policy.contact}`}
          className="text-center text-xs border rounded py-1.5"
        >
          Call
        </a>

      </div>

    </div>
  );
};

export default PolicyCard;