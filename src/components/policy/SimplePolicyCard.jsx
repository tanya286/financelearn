const SimplePolicyCard = ({ title, desc }) => {
  return (
    <div className="bg-white border rounded-2xl p-5 shadow-sm hover:shadow-md transition flex justify-between items-center">

      <div>
        <h3 className="text-sm font-semibold">{title}</h3>
        <p className="text-xs text-gray-500">{desc}</p>
      </div>

      <span className="text-green-600 text-sm font-medium">
        View →
      </span>

    </div>
  );
};

export default SimplePolicyCard;