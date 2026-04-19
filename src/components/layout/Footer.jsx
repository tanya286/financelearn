import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 mt-10">
      <div className="max-w-7xl mx-auto px-4 py-10 grid md:grid-cols-4 gap-8">

        {/* BRAND */}
        <div>
          <h2 className="text-white text-xl font-bold mb-3">
            FinanceLearn
          </h2>
          <p className="text-sm">
            Learn financial skills, build wealth, and secure your future.
          </p>
        </div>

        {/* LINKS */}
        <div>
          <h3 className="text-white font-semibold mb-3">Explore</h3>
          <ul className="space-y-2 text-sm">
            <li><Link to="/courses">Courses</Link></li>
            <li><Link to="/quiz">Quiz</Link></li>
            <li><Link to="/policies">Policies</Link></li>
          </ul>
        </div>

        {/* SUPPORT */}
        <div>
          <h3 className="text-white font-semibold mb-3">Support</h3>
          <ul className="space-y-2 text-sm">
            <li><Link to="#">Help Center</Link></li>
            <li><Link to="#">Contact Us</Link></li>
            <li><Link to="#">FAQs</Link></li>
          </ul>
        </div>

        {/* NEWSLETTER */}
        <div>
          <h3 className="text-white font-semibold mb-3">Stay Updated</h3>
          <p className="text-sm mb-2">
            Get latest financial tips & courses.
          </p>
          <div className="flex">
            <input
              type="email"
              placeholder="Your email"
              className="w-full px-2 py-1 text-gray-10 theme-dark:text-gray-100 rounded-l"
            />
            <button className="bg-green-500 px-3 py-1 rounded-r text-white">
              Join
            </button>
          </div>
        </div>

      </div>

      {/* BOTTOM BAR */}
      <div className="border-t border-gray-700 text-center py-4 text-sm">
        © {new Date().getFullYear()} FinanceLearn. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;