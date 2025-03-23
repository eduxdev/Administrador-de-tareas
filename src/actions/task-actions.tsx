"use server"

import prisma from "@/lib/prisma";
import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";

export async function createTask(formData: FormData) {
    
    const name = formData.get("name")?.toString();
    const description = formData.get("description")?.toString();
    const priority = formData.get("priority")?.toString();


    console.log({ name, description, priority })

    if (!name || !description || !priority) {
      return;
    }

    const newTask = await prisma.task.create({
      data: {
        name: name,
        description: description,
        priority: priority,
      },
  })

  console.log(newTask)
  redirect('/')
}

export async function removeTask(formData: FormData) {
    // Your code her
    "use server"
    const taskId = formData.get("taskId")?.toString();
    
    if (!taskId) {
        return;
    }   

    await prisma.task.delete({
        where: {
            id: Number(taskId)
        }
})
revalidatePath('/')
}

export async function updateTask (formData: FormData) {
  const id = formData.get("id")?.toString();
  const name = formData.get("name")?.toString();
  const description = formData.get("description")?.toString();
  const priority = formData.get("priority")?.toString();  
  

  if (!id || !name || !description || !priority) {
    return;
  }


  await prisma.task.update({
    where: {
      id: parseInt(id),
    },
    data: {
      name: name,
      description: description,
      priority: priority,
    }
  });

  console.log({ id, name, description, priority });
  redirect('/')



  
}