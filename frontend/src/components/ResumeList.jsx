import React, { useEffect, useState } from 'react';
import axios from 'axios';

function ResumeList() {
  const [resumes, setResumes] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8000/api/resumes/')
      .then(res => setResumes(res.data))
      .catch(err => console.error(err));
  }, []);

  const handleViewFile = (fileUrl) => {
    const finalUrl = fileUrl.startsWith('http') ? fileUrl : `http://localhost:8000${fileUrl}`;
    window.open(finalUrl, '_blank');
  };

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <h2 className="text-3xl font-bold mb-6 text-blue-700 border-b pb-2">Uploaded Resumes</h2>

      {resumes.length === 0 ? (
        <p className="text-gray-600">No resumes found.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {resumes.map((resume) => (
            <div
              key={resume.id}
              className="bg-white p-5 rounded-2xl shadow-md border border-gray-200 hover:shadow-lg transition duration-300"
            >
              <p className="text-sm text-gray-500 mb-1"><strong>ID:</strong> #{resume.id}</p>
              <p className="text-sm text-gray-500 mb-2">
                <strong>Uploaded At:</strong> {new Date(resume.upload_at).toLocaleDateString()}
              </p>
              <div className="text-gray-800 text-sm mb-3 max-h-40 overflow-hidden">
                <strong>Parsed Text:</strong>
                <p className="mt-1">{resume.parsed_text.slice(0, 300)}...</p>
              </div>
              <button
                onClick={() => handleViewFile(resume.file)}
                className="mt-2 w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-xl transition"
              >
                View File
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default ResumeList;
