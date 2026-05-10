const PoliciesHeader = () => {
  return (
    <div className="mb-6">

      <h1 className="text-2xl md:text-3xl font-bold mb-2">
        Financial Policies & Schemes
      </h1>

      <p className="text-sm text-gray-500 mb-4">
        Verified government & banking policies in one place
      </p>

      {/* Search */}
      <div className="flex gap-3">
        <input
          placeholder="Search policies, schemes..."
          className="flex-1 px-4 py-2 rounded-lg border theme-dark:bg-gray-800"
        />
        <button className="bg-green-500 px-5 py-2 rounded-lg text-white">
          Search
        </button>
      </div>

    </div>
  );
};

export default PoliciesHeader;