const CourseCard = ({ continueWatching }) => {
  return (
    <div className="min-w-[180px] md:min-w-[220px] bg-white theme-dark:bg-gray-800 
    rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition duration-300 group">

      {/* Image */}
      <div className="relative h-28 md:h-36 overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1642543492481-44e81e3914a7"
          className="w-full h-full object-cover group-hover:scale-110 transition duration-300"
        />

        <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 flex items-center justify-center transition">
          <span className="text-white text-xl">▶</span>
        </div>
      </div>

      {/* Content */}
      <div className="p-2 md:p-3">
        <h3 className="text-xs md:text-sm font-medium line-clamp-2">
          Stock Market Basics for Beginners
        </h3>

        <p className="text-[10px] md:text-xs text-gray-500 mt-1">
          Beginner • 2h 30m
        </p>

        {/* Progress */}
        {continueWatching && (
          <div className="mt-2 h-[3px] bg-gray-200 rounded">
            <div className="h-[3px] bg-green-500 rounded w-[60%]" />
          </div>
        )}
      </div>
    </div>
  );
};

export default CourseCard;