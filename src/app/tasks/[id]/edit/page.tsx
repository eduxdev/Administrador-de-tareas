import { TaskForm } from "@/app/new/task-form";
import prisma from "@/lib/prisma";
import { redirect } from "next/navigation";
import { JSX } from "react/jsx-runtime";

// Se define la interfaz de props según lo que Next.js espera,
// es decir, que `params` sea una Promise que resuelva al objeto de parámetros.
interface TaskPageEditProps {
  params: Promise<{
    id: string;
  }>;
}

export default async function TaskPageEdit({ params: promiseParams }: TaskPageEditProps): Promise<JSX.Element> {
  // Se espera la resolución de la Promise para obtener los parámetros
  const params = await promiseParams;
  console.log({ params });

  const task = await prisma.task.findFirst({
    where: {
      id: parseInt(params.id, 10),
    },
  });

  if (!task) {
    redirect("/");
  }

  console.log({ task });
  return (
    <div className="flex justify-center items-center h-screen">
      <TaskForm task={task} />
    </div>
  );
}
