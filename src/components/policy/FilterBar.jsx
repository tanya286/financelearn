const FilterBar = () => {
    // Filters.jsx

  return (
    <div className="flex flex-col md:flex-row gap-3">

      <input
        type="text"
        placeholder="Search policies..."
        className="flex-1 px-3 py-2 rounded-lg border theme-dark:bg-gray-800"
      />

      <select className="px-3 py-2 rounded-lg border theme-dark:bg-gray-800">
        <option>All Categories</option>
        <option>Banking</option>
        <option>Investment</option>
      </select>

      <select className="px-3 py-2 rounded-lg border theme-dark:bg-gray-800">
        <option>Latest</option>
        <option>Popular</option>
      </select>

    </div>
  );
};

export default FilterBar;