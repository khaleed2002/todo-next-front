import { TaskType } from "@/app/types"
import Task from "./Task"

const TasksContainer = ({ tasks, completed }: { tasks: TaskType[], completed?: boolean }) => {
    return (
        <section>
            {tasks.map((task) => {
                return <Task key={task.id} task={task} completed={completed} />
            })}
        </section>
    )
}
export default TasksContainer