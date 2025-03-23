import { Badge } from "@/components/ui/badge";
import {  buttonVariants } from "@/components/ui/button";
import { Card, CardHeader, CardContent, CardFooter, CardTitle } from "@/components/ui/card";
import { Task } from "@prisma/client"; // Corrección aquí
import clsx from "clsx";
import TaskButtonDelete from "./task-button-delete";
import Link from "next/link";

function TaskCard({ task }: { task: Task }) {
  return (
    <Card>
      <CardHeader className="flex justify-between">
        <CardTitle className="text-2xl">{task.name}</CardTitle>
        <Badge
          className={clsx({
            "bg-red-500 text-with": task.priority === "urgent",
            "bg-yellow-500 text-with": task.priority === "medium",
            "bg-green-500 text-with": task.priority === "low",
          })}
        >
          {task.priority}
        </Badge>
      </CardHeader>
      <CardContent>
        <p>{task.description}</p>
        <span className="text-slate-400">
          {new Date(task.createdAt).toLocaleDateString()}
        </span>
      </CardContent>
      <CardFooter className="flex gap-x-2 justify-end">
        
        <TaskButtonDelete taskId={task.id}/>
        <Link href={`/tasks/${task.id}/edit`}
        className={buttonVariants({variant: "secondary"})}>
        Editar
        </Link>
      </CardFooter>
    </Card>
  );
}

export default TaskCard;