const CTA = () => {
  return (
    <section className="mt-10">

      <div className="relative rounded-2xl overflow-hidden 
      bg-gradient-to-r from-green-500 to-emerald-600 text-white">

        {/* Content */}
        <div className="px-6 md:px-12 py-10 md:py-14 text-center">

          <h2 className="text-xl md:text-3xl font-bold mb-3">
            Ready to Transform Your Financial Future?
          </h2>

          <p className="text-sm md:text-base opacity-90 mb-6 max-w-2xl mx-auto">
            Join thousands of learners who have already started their journey to financial independence. Start learning today!
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 justify-center">

            <button className="bg-white text-green-600 px-6 py-2 rounded-lg font-semibold hover:bg-gray-100 transition">
              Browse Courses
            </button>

            <button className="border border-white px-6 py-2 rounded-lg font-semibold hover:bg-white hover:text-green-600 transition">
              View Learning Paths
            </button>

          </div>

        </div>

        {/* Optional subtle pattern */}
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="w-full h-full bg-[radial-gradient(circle_at_top_left,white,transparent)]"></div>
        </div>

      </div>

    </section>
  );
};

export default CTA;