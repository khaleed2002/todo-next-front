import TasksContainer from "@/app/components/dashboard/tasks/TasksContainer"
import { tasks } from "@/app/constants"


const CompletedTasks = () => {
    return (
        <div className="flex flex-col gap-4">
            <TasksContainer tasks={tasks} completed={true} />
        </div>
    )
}
export default CompletedTasks