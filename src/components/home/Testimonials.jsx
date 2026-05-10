const Testimonials = () => {
  return (
    <section className="text-center py-10">

      <h2 className="text-xl md:text-2xl font-bold mb-8">
        What Our Learners Say
      </h2>

      <div className="grid md:grid-cols-3 gap-4">

        {[1,2,3].map(i => (
          <div key={i} className="p-5 rounded-xl bg-white theme-dark:bg-gray-800 shadow-sm">
            <p className="text-sm text-gray-500 mb-3">
              “This platform completely improved my financial knowledge.”
            </p>
            <h4 className="font-semibold">User {i}</h4>
          </div>
        ))}

      </div>
    </section>
  );
};

export default Testimonials;