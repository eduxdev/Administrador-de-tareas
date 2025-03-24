import { TaskForm } from "./task-form";

function NewPage() {
  const defaultTask = {
    id: 0,
    name: "",
    description: null,
    priority: "",
    createdAt: new Date(),
    updatedAt: new Date(),
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <TaskForm task={defaultTask} />
    </div>
  );
}

export default NewPage;