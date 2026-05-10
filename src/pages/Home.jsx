import Hero from "../components/home/Hero";
import CourseRow from "../components/home/CourseRow";
import WhyChoose from "../components/home/WhyChoose";
import Testimonials from "../components/home/Testimonials";
import CTA from "../components/home/CTA"; 
const Home = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 md:px-6 py-6 space-y-10">

      <Hero />

      <CourseRow title="Continue Learning" continueWatching />
      <CourseRow title="Popular Courses" />
      <CourseRow title="Recommended For You" />

      <WhyChoose />
      <Testimonials />
      <CTA />
    </div>
  );
};

export default Home;