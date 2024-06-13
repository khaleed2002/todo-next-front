'use client'
import { useState } from 'react';

const CreateTaskPage = () => {
    const [taskDescription, setTaskDescription] = useState('');
    const [taskStatus, setTaskStatus] = useState(false);

    return (
        <div className="flex justify-center items-center h-screen">
            <form className="w-96 p-6 bg-white rounded shadow">
                <h2 className="text-xl font-bold mb-4">Create Task</h2>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="taskDescription">
                        Task Description
                    </label>
                    <textarea
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-200"
                        id="taskDescription"
                        value={taskDescription}
                        onChange={(e) => setTaskDescription(e.target.value)}
                        required
                    ></textarea>
                </div>
                <div className="flex items-center mb-4">
                    <input
                        className="mr-2"
                        type="checkbox"
                        id="taskStatus"
                        checked={taskStatus}
                        onChange={(e) => setTaskStatus(e.target.checked)}
                    />
                    <label className="text-gray-700 text-sm font-bold" htmlFor="taskStatus">
                        Completed
                    </label>
                </div>
                <button
                    className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring focus:ring-blue-200"
                    type="submit"
                >
                    Create
                </button>
            </form>
        </div>
    );
};

export default CreateTaskPage;