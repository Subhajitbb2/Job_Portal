import React from "react";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-100 via-sky-100 to-gray-200 flex items-center justify-center px-4 py-10 text-gray-800">
      <div className="w-full max-w-6xl bg-white/20 backdrop-blur-xl p-10 rounded-3xl shadow-2xl ring-1 ring-white/30">
        <h1 className="text-5xl font-extrabold text-center mb-6 text-gray-900 drop-shadow-xl">
          Welcome to the <span className="text-blue-600">Job Portal</span>
        </h1>

        <p className="text-lg text-gray-700 mb-12 text-center max-w-2xl mx-auto leading-relaxed">
          Find the best jobs that match your resume, explore listings, and post opportunities with ease.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Upload Resume */}
          <div className="bg-gradient-to-r from-blue-400 to-blue-600 p-1 rounded-xl transition-transform hover:scale-105 shadow-xl">
            <button
              onClick={() => navigate("/upload")}
              className="w-full bg-white text-blue-700 font-semibold py-3 px-6 rounded-xl hover:bg-blue-50"
            >
              Upload Resume
            </button>
          </div>

          {/* View Resumes */}
          <div className="bg-gradient-to-r from-green-400 to-green-600 p-1 rounded-xl transition-transform hover:scale-105 shadow-xl">
            <button
              onClick={() => navigate("/resumes")}
              className="w-full bg-white text-green-700 font-semibold py-3 px-6 rounded-xl hover:bg-green-50"
            >
              View Resumes
            </button>
          </div>

          {/* Post Job */}
          <div className="bg-gradient-to-r from-purple-400 to-purple-600 p-1 rounded-xl transition-transform hover:scale-105 shadow-xl">
            <button
              onClick={() => navigate("/post-job")}
              className="w-full bg-white text-purple-700 font-semibold py-3 px-6 rounded-xl hover:bg-purple-50"
            >
              Post Job
            </button>
          </div>

          {/* View Jobs */}
          <div className="bg-gradient-to-r from-yellow-400 to-yellow-600 p-1 rounded-xl transition-transform hover:scale-105 shadow-xl">
            <button
              onClick={() => navigate("/jobs")}
              className="w-full bg-white text-yellow-700 font-semibold py-3 px-6 rounded-xl hover:bg-yellow-50"
            >
              View Jobs
            </button>
          </div>

          {/* Match Resume to All Jobs */}
          <div className="bg-gradient-to-r from-pink-400 to-pink-600 p-1 rounded-xl transition-transform hover:scale-105 shadow-xl">
            <button
              onClick={() => navigate("/match-resume")}
              className="w-full bg-white text-pink-700 font-semibold py-3 px-6 rounded-xl hover:bg-pink-50"
            >
              Match Resume to All Jobs
            </button>
          </div>

          {/* Match Resume to Online Jobs */}
          <div className="bg-gradient-to-r from-orange-400 to-orange-600 p-1 rounded-xl transition-transform hover:scale-105 shadow-xl">
            <button
              onClick={() => navigate("/match-online-jobs")}
              className="w-full bg-white text-orange-700 font-semibold py-3 px-6 rounded-xl hover:bg-orange-50"
            >
              Match Resume to Online Jobs
            </button>
          </div>

          {/* My Profile */}
          <div className="bg-gradient-to-r from-indigo-400 to-indigo-600 p-1 rounded-xl transition-transform hover:scale-105 shadow-xl">
            <button
              onClick={() => navigate("/profile")}
              className="w-full bg-white text-indigo-700 font-semibold py-3 px-6 rounded-xl hover:bg-indigo-50"
            >
              My Profile
            </button>
          </div>

          {/* Logout */}
          <div className="bg-gradient-to-r from-red-400 to-red-600 p-1 rounded-xl transition-transform hover:scale-105 shadow-xl">
            <button
              onClick={() => {
                localStorage.removeItem("token");
                navigate("/");
              }}
              className="w-full bg-white text-red-700 font-semibold py-3 px-6 rounded-xl hover:bg-red-50"
            >
              Logout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;