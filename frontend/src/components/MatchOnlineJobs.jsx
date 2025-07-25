import React, { useEffect, useState } from 'react';
import API from '../api/api';

function MatchOnlineJobs() {
  const [resumes, setResumes] = useState([]);
  const [resumeId, setResumeId] = useState('');
  const [query, setQuery] = useState('developer');
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchResumes = async () => {
      try {
        const res = await API.get('resumes/');
        setResumes(res.data);
      } catch (err) {
        console.error('Failed to fetch resumes', err);
      }
    };
    fetchResumes();
  }, []);

  const handleMatch = async () => {
    setLoading(true);
    try {
      const res = await API.post('match-online-jobs/', {
        resume_id: resumeId,
        query: query,
      });
      setResults(res.data.results || []);
    } catch (err) {
      console.error('Error matching online jobs:', err);
    }
    setLoading(false);
  };

  return (
    <div className="min-h-screen p-6 bg-gradient-to-br from-purple-800 to-orange-600 text-white">
      <div className="max-w-4xl mx-auto bg-white bg-opacity-10 backdrop-blur-lg p-6 rounded-lg shadow-lg">
        <h2 className="text-3xl font-bold mb-6 text-center">🎯 Match Resume with Online Jobs</h2>

        <div className="mb-6 space-y-4">
          <label className="block">
            <span className="block mb-1 text-white font-semibold">Select Resume:</span>
            <select
              value={resumeId}
              onChange={(e) => setResumeId(e.target.value)}
              className="block w-full mt-1 p-2 rounded border border-white bg-white bg-opacity-20 text-white focus:outline-none focus:ring-2 focus:ring-orange-400"
            >
              <option value="">-- Choose Resume --</option>
              {resumes.map((resume) => (
                <option key={resume.id} value={resume.id}>
                  Resume {resume.id}
                </option>
              ))}
            </select>
          </label>

          <label className="block">
            <span className="block mb-1 text-white font-semibold">Job Title / Query:</span>
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="e.g. Python Developer"
              className="block w-full mt-1 p-2 rounded border border-white bg-white bg-opacity-20 text-white placeholder-white focus:outline-none focus:ring-2 focus:ring-orange-400"
            />
          </label>

          <button
            onClick={handleMatch}
            disabled={!resumeId}
            className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded shadow disabled:bg-orange-300"
          >
            Match Jobs
          </button>
        </div>

        {loading ? (
          <p className="text-center text-orange-200">🔄 Loading matching jobs...</p>
        ) : (
          results.length > 0 && (
            <div>
              <h3 className="text-2xl font-semibold mb-4">✅ Matching Jobs</h3>
              {results.map((job, idx) => (
                <div
                  key={idx}
                  className="bg-white bg-opacity-20 p-4 rounded-lg mb-4 shadow hover:shadow-xl transition"
                >
                  <h4 className="text-xl font-bold text-white">{job.job_title}</h4>
                  <p className="text-sm text-orange-200">{job.company}</p>
                  <p className="mt-2 text-sm">
                    Score: <strong>{job.score}%</strong>
                  </p>
                  <p className="mt-1 text-sm">
                    Matched Keywords: <span className="text-white">{job.matched_keywords.join(', ')}</span>
                  </p>
                  <p className="mt-1 text-sm">
                    Missing Keywords: <span className="text-white">{job.missing_keywords.join(', ')}</span>
                  </p>
                  <a
                    href={job.apply_link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-2 inline-block text-blue-300 hover:text-blue-200 underline"
                  >
                    Apply Now →
                  </a>
                </div>
              ))}
            </div>
          )
        )}
      </div>
    </div>
  );
}

export default MatchOnlineJobs;