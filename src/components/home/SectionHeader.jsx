const SectionHeader = ({ title }) => {
  return (
    <div className="flex justify-between items-center mb-3 px-1">
      <h2 className="text-base md:text-lg font-semibold">
        {title}
      </h2>
      <button className="text-sm text-green-500 hover:underline">
        View All
      </button>
    </div>
  );
};

export default SectionHeader;