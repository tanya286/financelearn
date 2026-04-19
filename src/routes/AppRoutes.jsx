// src/routes/AppRoutes.jsx

import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "../pages/Home";
import Courses from "../pages/Courses";
import CourseDetails from "../pages/CourseDetails";
import LessonPlayer from "../pages/LessonPlayer";
import QuizDashboard from "../pages/QuizDashboard";
import QuizPlayer from "../pages/QuizPlayer";
import Policies from "../pages/Policies";
import NotFound from "../pages/NotFound";

const AppRoutes = () => {
  return (
      <Routes>

        <Route path="/" element={<Home />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/course/:id" element={<CourseDetails />} />
        <Route path="/lesson/:courseId/:lessonId" element={<LessonPlayer />} />
        <Route path="/quiz" element={<QuizDashboard />} />
        <Route path="/quiz/:id" element={<QuizPlayer />} />
        <Route path="/policies" element={<Policies />} />

        {/* fallback */}
        <Route path="*" element={<NotFound />} />

      </Routes>
  
  );
};

export default AppRoutes;