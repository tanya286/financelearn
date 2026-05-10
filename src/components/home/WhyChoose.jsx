const WhyChoose = () => {
  return (
    <section className="text-center py-10">

      <h2 className="text-xl md:text-2xl font-bold mb-8">
        Why Choose FinanceLearn?
      </h2>

      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">

        {["Interactive Learning", "Multi-language", "Certified Experience"].map((item) => (
          <div key={item} className="p-5 rounded-xl bg-white theme-dark:bg-gray-800 shadow-sm">
            <h3 className="font-semibold mb-2">{item}</h3>
            <p className="text-sm text-gray-500">
              Learn effectively with modern tools and guidance.
            </p>
          </div>
        ))}

      </div>
    </section>
  );
};

export default WhyChoose;