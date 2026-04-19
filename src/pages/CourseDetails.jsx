import React from "react";
const CourseDetails = () => {
  return (
    <div className="container mx-auto p-4">     

        <h1 className="text-3xl font-bold mb-4">Course Title</h1>   
        <p className="text-gray-700 theme-dark:text-gray-300 mb-6">
            This is a detailed description of the course. It covers what you will learn, the course structure, and any prerequisites.   
            You can also include information about the instructor, course duration, and any certifications offered upon completion.
        </p>
        <button className="bg-green-500 text-white px-4 py-2 rounded">
            Enroll Now
        </button>
    </div>
  );
};

export default CourseDetails;