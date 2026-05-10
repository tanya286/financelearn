const categories = ["All", "Banking", "Government", "Investment", "Insurance"];

const CategoryChips = () => {
  return (
    <div className="flex gap-2 overflow-x-auto mb-4">

      {categories.map((cat, i) => (
        <button
          key={i}
          className={`px-4 py-1.5 rounded-full text-sm whitespace-nowrap
          ${i === 0
            ? "bg-green-500 text-white"
            : "bg-gray-200 theme-dark:bg-gray-800"
          }`}
        >
          {cat}
        </button>
      ))}

    </div>
  );
};

export default CategoryChips;