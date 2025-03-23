
import { removeTask } from "@/actions/task-actions"
import { Button } from "./ui/button"


function TaskButtonDelete({taskId}: {taskId: number}) {
    
    return (
        <form action={removeTask}>
            <input type="hidden" name="taskId" value={taskId} />
            <Button variant="destructive">
                Eliminar
            </Button>
        </form>
    )
}

export default TaskButtonDelete 