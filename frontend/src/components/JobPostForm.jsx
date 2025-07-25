import React, { useState } from 'react';
import Axios from 'axios';

function JobPostForm() {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [skills_required, setSkillsRequired] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await Axios.post('http://localhost:8000/api/jobs/', {
                title,
                description,
                skills_required
            });
            setMessage('Job post created successfully!');
            setTitle('');
            setDescription('');
            setSkillsRequired('');
        } catch (error) {
            setMessage('Failed to Post job post.');
            console.error('post job error:', error);
        }
    };

    return (
        <div className="p-6">
            <h2 className="text-2xl font-bold mb-4">Post a job </h2>
            <form onSubmit={handleSubmit} className="space-y-4">
                <input
                    type="text"
                    placeholder="Job Title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    className="w-full p-2 border rounded"
                    required
                />
                <textarea
                    placeholder="Job Description"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    className="w-full p-2 border rounded"
                    rows={4}
                    required
                />
                <input
                    type="text"
                    placeholder="Skills Required (comma separated)"
                    value={skills_required}
                    onChange={(e) => setSkillsRequired(e.target.value)}
                    className="w-full p-2 border rounded"
                    required
                />
                <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">
                    Submit
                </button>
                {message && <p className="mt-2">{message}</p>}
            </form>
        </div>
    );
}

export default JobPostForm;