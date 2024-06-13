import TasksContainer from "@/app/components/dashboard/tasks/TasksContainer"
import { tasks } from "@/app/constants"
import Link from "next/link"

const Tasks = () => {
    return (
        <div className="flex flex-col gap-4">
            <Link href={'/dashboard/tasks/create-task'} className="main-btn w-fit">Add new Task</Link>
            <TasksContainer tasks={tasks} />
        </div>
    )
}
export default Tasks