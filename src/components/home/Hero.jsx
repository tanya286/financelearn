const Hero = () => {
  return (
    <section className="relative w-full h-[260px] md:h-[380px] rounded-2xl overflow-hidden">

      <img
        src="https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3"
        className="w-full h-full object-cover"
      />

      <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-transparent flex items-center">

        <div className="px-6 md:px-12 max-w-xl text-white">
          <h1 className="text-2xl md:text-4xl font-bold mb-3">
            Learn Smart Investing
          </h1>

          <p className="text-sm md:text-base mb-4">
            Master stocks, crypto and wealth building
          </p>

          <button className="bg-green-500 px-5 py-2 rounded-lg text-sm md:text-base hover:bg-green-600 transition">
            Start Learning
          </button>
        </div>

      </div>
    </section>
  );
};

export default Hero;