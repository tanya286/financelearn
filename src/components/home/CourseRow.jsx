import { useRef } from "react";
import CourseCard from "./CourseCard";
import SectionHeader from "./SectionHeader";

const CourseRow = ({ title, continueWatching }) => {
  const ref = useRef();

  const scroll = (dir) => {
    ref.current.scrollBy({
      left: dir === "left" ? -300 : 300,
      behavior: "smooth",
    });
  };

  return (
    <section className="relative">

      <SectionHeader title={title} />

      {/* LEFT ARROW */}
      <button
        onClick={() => scroll("left")}
        className="hidden md:flex absolute left-0 top-1/2 -translate-y-1/2 z-10 
        bg-white/80 theme-dark:bg-gray-800/80 backdrop-blur-md 
        shadow rounded-full w-8 h-8 items-center justify-center hover:scale-110"
      >
        ❮
      </button>

      {/* ROW */}
      <div
        ref={ref}
        className="flex gap-3 overflow-x-auto scrollbar-hide px-1"
      >
        {Array(10).fill(0).map((_, i) => (
          <CourseCard key={i} continueWatching={continueWatching} />
        ))}
      </div>

      {/* RIGHT ARROW */}
      <button
        onClick={() => scroll("right")}
        className="hidden md:flex absolute right-0 top-1/2 -translate-y-1/2 z-10 
        bg-white/80 theme-dark:bg-gray-800/80 backdrop-blur-md 
        shadow rounded-full w-8 h-8 items-center justify-center hover:scale-110"
      >
        ❯
      </button>
    </section>
  );
};

export default CourseRow;