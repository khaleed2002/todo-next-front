'use client'
import { TaskType } from "@/app/types"
import Link from "next/link";

const Task = ({ task, completed }: { task: TaskType, completed?: boolean }) => {
    return (
        <div className="flex justify-between items-center bg-white p-4 rounded-lg shadow-md mb-4">
            <div>
                <p className={`text-gray-600 ${!task.status ? "line-through" : ""}`}>{task.description}</p>
            </div>
            {!completed ? <div className="flex space-x-2">
                {!task.status ? <button
                    className="secandary-btn bg-green-500  hover:bg-green-600 focus:ring-green-200"
                >
                    Mark as Completed
                </button> : ""}
                <Link
                    className="secandary-btn bg-blue-500  hover:bg-blue-600 focus:ring-blue-200"
                    href={`/dashboard/tasks/${task.id}/edit-task/`}
                >
                    Edit
                </Link>
                <button
                    className="secandary-btn bg-red-500 hover:bg-red-600 focus:ring-red-200"
                >
                    Delete
                </button>

            </div> : ""}

        </div>
    );
}
export default Task