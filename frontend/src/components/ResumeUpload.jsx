import React, { useState } from 'react';
import API from '../api/api';

function ResumeUpload() {
  const [file, setFile] = useState(null);
  const [skills, setSkills] = useState([]);
  const [error, setError] = useState("");

  const handleUpload = async () => {
    try {
      const formData = new FormData();
      formData.append('file', file);
      const res = await API.post('resumes/upload/', formData);
      setSkills(res.data.skills);
      setError(""); // clear previous errors
    } catch (err) {
      setError("❌ Failed to upload resume. Please try again.");
      setSkills([]); // clear previous skills on error
    }
  };

  return (
    <div className="p-6 max-w-xl mx-auto bg-white shadow rounded-xl">
      <h2 className="text-2xl font-bold mb-4 text-center text-gray-800">📄 Resume Upload</h2>

      <input
        type="file"
        onChange={(e) => setFile(e.target.files[0])}
        className="mb-4 block w-full text-sm text-gray-700 file:mr-4 file:py-2 file:px-4
                   file:rounded-full file:border-0 file:text-sm file:font-semibold
                   file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
      />

      <button
        className="w-full bg-black hover:bg-gray-800 text-white py-2 px-4 rounded-lg font-semibold transition"
        onClick={handleUpload}
      >
        🚀 Upload Resume
      </button>

      {error && (
        <p className="mt-4 text-red-600 font-medium text-sm text-center">{error}</p>
      )}

      {skills.length > 0 && (
        <div className="mt-6">
          <h3 className="font-semibold text-lg text-gray-700 mb-3">✅ Extracted Skills:</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {skills.map((skill, i) => (
              <div
                key={i}
                className={`px-3 py-2 rounded-xl text-white font-medium shadow transition transform hover:scale-105 ${
                  i % 5 === 0 ? 'bg-indigo-500' :
                  i % 5 === 1 ? 'bg-purple-500' :
                  i % 5 === 2 ? 'bg-pink-500' :
                  i % 5 === 3 ? 'bg-teal-500' :
                                'bg-yellow-500'
                }`}
              >
                {skill}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default ResumeUpload;
